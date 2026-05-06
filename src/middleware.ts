import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Ignorar archivos del sistema, imágenes y rutas de NextAuth
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // 2. Obtener el token de la sesión
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // 3. SI NO ESTÁ LOGUEADO: Bloquear zonas privadas
  const isProtectedRoute = pathname.startsWith("/admin") || pathname.startsWith("/home") || pathname.startsWith("/api/users");
  
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // ==========================================
  // REGLA DE ORO: EL ADMIN ES TODOPODEROSO
  // ==========================================
  if (token?.role === "ADMIN") {
    // Solo lo sacamos de la página de /login por lógica (ya está dentro)
    if (pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    // ¡Dejamos que pase a cualquier otra ruta sin estorbar!
    return NextResponse.next();
  }

  // ==========================================
  // REGLA PARA ALUMNOS (No admins)
  // ==========================================
  if (token && token.role !== "ADMIN") {
    // Si intenta hacerse el listo y entrar a /admin, o si va a /login, al Aula Virtual
    if (pathname.startsWith("/admin") || pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
  }

  return NextResponse.next();
}

// El matcher define en qué rutas se activa este filtro
export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico).*)"],
};