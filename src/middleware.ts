import { NextResponse, type NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Ignorar archivos estáticos y auth API
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const token: any = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isProtectedRoute = 
    pathname.startsWith("/admin") || 
    pathname.startsWith("/home") || 
    pathname.startsWith("/api/users");

  // ===========================================================
  // 🔒 LÓGICA DE SESIÓN ÚNICA (SOLO EN RUTAS PROTEGIDAS)
  // ===========================================================
  if (isProtectedRoute && token?.id && token?.sessionId) {
    // Consultamos Redis con un parámetro aleatorio para saltar el caché de Vercel
    const activeSessionId = await redis.get(`session:${token.id}`);

    if (activeSessionId && activeSessionId !== token.sessionId) {
      // Si el ticket no coincide, lo sacamos
      const response = NextResponse.redirect(new URL("/login?error=session_expired", request.url));
      response.cookies.delete("next-auth.session-token");
      response.cookies.delete("__Secure-next-auth.session-token");
      return response;
    }
  }

  // ===========================================================
  // REDIRECCIONES SEGÚN ROL (Solo si la sesión es válida)
  // ===========================================================
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token) {
    // Si el ADMIN intenta ir a /login o /, lo mandamos a su panel
    if (token.role === "ADMIN" && (pathname === "/login" || pathname === "/")) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    // Si el USUARIO intenta ir a /admin, /login o /, lo mandamos a su home
    if (token.role !== "ADMIN" && (pathname.startsWith("/admin") || pathname === "/login" || pathname === "/")) {
      return NextResponse.next(); // Permitimos que cargue la página y el componente decidirá qué vista mostrar
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};