import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. EXCEPCIONES CRÍTICAS (Ignorar archivos y auth interno)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/api/setup") ||
    pathname.includes(".") // Ignora cualquier archivo con extensión (imágenes, favicons)
  ) {
    return NextResponse.next();
  }

  // 2. OBTENER TOKEN
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // 3. LÓGICA PARA RUTA DE LOGIN
  // Si ya está logueado y trata de ir al login, lo mandamos a su panel correspondiente
  if (pathname.startsWith("/login")) {
    if (token) {
      const url = token.role === "ADMIN" ? "/admin" : "/home";
      return NextResponse.redirect(new URL(url, request.url));
    }
    return NextResponse.next();
  }

  // 4. PROTECCIÓN DE RUTAS (ADMIN y HOME)
  if (pathname.startsWith("/admin") || pathname.startsWith("/home")) {
    // Si no hay token, al login
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Si es ruta de admin pero no es admin, al home
    if (pathname.startsWith("/admin") && token.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/home", request.url));
    }
    
    // Si es ruta de home pero es admin, podrías dejarlo o mandarlo a /admin (opcional)
    // Aquí lo dejamos pasar por si quieres que el admin vea lo que ve el alumno
  }

  // 5. PROTECCIÓN DE API (Excepto auth y setup)
  if (pathname.startsWith("/api/users") && !token) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  return NextResponse.next();
}

// Un matcher mucho más simple para evitar conflictos de parseo
export const config = {
  matcher: ["/((?!api/auth|api/setup|_next/static|_next/image|favicon.ico).*)"],
};