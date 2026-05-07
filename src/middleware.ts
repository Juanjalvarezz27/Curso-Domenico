import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// 1. CONFIGURACIÓN DEL VIGILANTE (Upstash)
const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(10, "10 s"), // 10 peticiones cada 10 segundos
});

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 2. EXCEPCIONES PRIMERO (¡Vital para que NextAuth no se congele!)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // 3. ESCUDO ANTI-ATAQUES (Rate Limiting)
  if (pathname.startsWith("/api/")) {
    // Solución al error de TypeScript: Leemos la IP directamente de los headers.
    // x-forwarded-for puede traer varias IPs (ej: "ip1, ip2"), tomamos la primera.
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : (realIp ?? "127.0.0.1");
    
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        { error: "Demasiadas peticiones. Sistema de seguridad activo." },
        { status: 429 }
      );
    }
  }

  // 4. Obtener el token de la sesión
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // 5. SI NO ESTÁ LOGUEADO: Bloquear zonas privadas
  const isProtectedRoute = 
    pathname.startsWith("/admin") || 
    pathname.startsWith("/home") || 
    pathname.startsWith("/api/users");
  
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // ==========================================
  // REGLA DE ORO: EL ADMIN ES TODOPODEROSO
  // ==========================================
  if (token?.role === "ADMIN") {
    if (pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return NextResponse.next();
  }

  // ==========================================
  // REGLA PARA ALUMNOS (No admins)
  // ==========================================
  if (token && token.role !== "ADMIN") {
    if (pathname.startsWith("/admin") || pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
  }

  return NextResponse.next();
}

// 6. MATCHERS ACTUALIZADOS
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};