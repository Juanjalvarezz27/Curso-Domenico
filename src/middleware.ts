import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// 1. CONFIGURACIÓN DEL VIGILANTE (Upstash) - Sin caché
const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(10, "10 s"),
});

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // 2. EXCEPCIONES PRIMERO
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // 3. ESCUDO ANTI-ATAQUES
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

  // 4. Obtener el token
  const token: any = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // =========================================================
  // 🧹 LIMPIEZA TOTAL: Si acaba de ser expulsado, destruir cookies
  // =========================================================
  if (pathname === "/login" && searchParams.get("error") === "session_expired") {
    const response = NextResponse.next();
    // Forzamos la muerte de la cookie estableciendo maxAge en 0 y path en "/"
    response.cookies.set("next-auth.session-token", "", { maxAge: 0, path: "/" });
    response.cookies.set("__Secure-next-auth.session-token", "", { maxAge: 0, path: "/" });
    return response;
  }

  const isProtectedRoute = 
    pathname.startsWith("/admin") || 
    pathname.startsWith("/home") || 
    pathname.startsWith("/api/users");

  // =========================================================
  // 🔒 VALIDACIÓN DE SESIÓN (Solo en rutas protegidas)
  // =========================================================
  if (isProtectedRoute && token?.id && token?.sessionId) {
    const activeSessionId = await redis.get(`session:${token.id}`);
    
    if (activeSessionId && activeSessionId !== token.sessionId) {
      // El ticket no coincide: Patearlo a la pantalla de login con el error
      const response = NextResponse.redirect(new URL("/login?error=session_expired", request.url));
      response.cookies.set("next-auth.session-token", "", { maxAge: 0, path: "/" });
      response.cookies.set("__Secure-next-auth.session-token", "", { maxAge: 0, path: "/" });
      return response;
    }
  }

  // =========================================================
  // REDIRECCIONES DE ROL Y SEGURIDAD
  // =========================================================
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token) {
    if (token.role === "ADMIN" && (pathname === "/login" || pathname === "/")) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    if (token.role !== "ADMIN" && (pathname.startsWith("/admin") || pathname === "/login" || pathname === "/")) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};