import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. EXCEPCIONES: Archivos estáticos, Landing, Login, NextAuth y Setup temporal
  if (
    pathname.startsWith("/_next") || 
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/login") || 
    pathname === "/" || 
    pathname.endsWith(".png") || 
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // 2. OBTENER SESIÓN DESDE EL TOKEN JWT
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // 3. SI NO HAY SESIÓN ACTIVA (No Autorizado)
  if (!token) {
    // Si un componente intenta hacer fetch a la API sin estar logueado
    if (pathname.startsWith("/api/")) {
      return NextResponse.json(
        { error: "No autorizado. Inicie sesión." }, 
        { status: 401 }
      );
    }
    // Si intenta entrar al sistema, lo pateamos a la vista de /login
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 4. SI HAY SESIÓN: VERIFICACIÓN DE ROLES (RBAC)
  // Si alguien intenta entrar a las rutas de /admin, verificamos si es ADMIN
  if (pathname.startsWith("/admin") && token.role !== "ADMIN") {
    // Si un usuario normal intenta hacerse el listo, lo devolvemos a su panel
    return NextResponse.redirect(new URL("/home", request.url));
  }

  // 5. SI HAY SESIÓN Y EL ROL ES CORRECTO: Pase libre
  return NextResponse.next();
}

// 6. MATCHERS: ¿Qué rutas vigila este middleware?
export const config = {
  matcher: [
    "/home/:path*",      // Protege el panel de los estudiantes
    "/admin/:path*",     // Protege tu panel administrativo
    "/api/((?!auth|setup).*)"  // Protege toda la API excepto NextAuth y la creación de tu admin
  ],
};