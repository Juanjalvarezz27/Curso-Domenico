import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(10, "10 s"),
});

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. EXCEPCIONES: Archivos y Auth API
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // 2. ESCUDO ANTI-ATAQUES
  if (pathname.startsWith("/api/")) {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : (realIp ?? "127.0.0.1");
    
    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return NextResponse.json({ error: "Demasiadas peticiones." }, { status: 429 });
    }
  }

  // 3. OBTENER TOKEN
  const token: any = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // 4. VALIDAR SI LA SESIÓN ES REAL EN REDIS
  let isSessionValid = true;
  if (token?.id && token?.sessionId) {
    const activeSessionId = await redis.get(`session:${token.id}`);
    if (activeSessionId && activeSessionId !== token.sessionId) {
      isSessionValid = false;
    }
  }

  const isProtectedRoute = 
    pathname.startsWith("/admin") || 
    pathname.startsWith("/home") || 
    pathname.startsWith("/api/users");

  // =========================================================
  // 💥 CASO A: SESIÓN EXPIRADA (Pateado por intruso)
  // =========================================================
  if (token && !isSessionValid) {
    // Definimos hacia dónde lo enviamos
    let response = isProtectedRoute 
      ? NextResponse.redirect(new URL("/login?error=session_expired", request.url))
      : NextResponse.next();

    // ANIQUILACIÓN TOTAL DE COOKIES ZOMBIES
    response.cookies.delete("next-auth.session-token");
    response.cookies.delete("__Secure-next-auth.session-token");
    response.cookies.delete("next-auth.csrf-token");
    response.cookies.delete("__Host-next-auth.csrf-token");
    
    return response;
  }

  // =========================================================
  // 🔓 CASO B: NO HAY TOKEN (Usuario anónimo)
  // =========================================================
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // =========================================================
  // 🏆 CASO C: SESIÓN VÁLIDA (Redirecciones normales)
  // =========================================================
  if (token && isSessionValid) {
    if (token.role === "ADMIN") {
      if (pathname === "/login" || pathname === "/") {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
    } else {
      if (pathname.startsWith("/admin") || pathname === "/login" || pathname === "/") {
        return NextResponse.redirect(new URL("/home", request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};