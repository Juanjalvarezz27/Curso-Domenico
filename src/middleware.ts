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

  // 2. EXCEPCIONES PRIMERO (Evita que NextAuth se congele)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // 3. ESCUDO ANTI-ATAQUES (Rate Limiting)
  if (pathname.startsWith("/api/")) {
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

  // ==========================================
  // VERIFICACIÓN DE SESIÓN ÚNICA (FIX LOOP)
  // ==========================================
  if (token && token.id && token.sessionId) {
    const activeSessionId = await redis.get(`session:${token.id}`);
    
    if (activeSessionId && activeSessionId !== token.sessionId) {
      // SESIÓN INVÁLIDA: El ticket cambió en Redis
      
      // Si el usuario YA ESTÁ en la página de login, no lo redirigimos de nuevo
      // Solo le quitamos los permisos y lo dejamos renderizar la página.
      if (pathname.startsWith("/login")) {
        const response = NextResponse.next();
        response.cookies.delete("next-auth.session-token");
        response.cookies.delete("__Secure-next-auth.session-token");
        return response;
      }

      // Si está en /home, /admin, etc. Lo mandamos al login y limpiamos.
      const response = NextResponse.redirect(new URL("/login?error=session_expired", request.url));
      response.cookies.delete("next-auth.session-token");
      response.cookies.delete("__Secure-next-auth.session-token");
      return response;
    }
  }

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