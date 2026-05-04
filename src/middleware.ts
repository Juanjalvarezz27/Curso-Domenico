import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. OBTENER SESIÓN DESDE EL TOKEN JWT
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // 2. RUTAS PÚBLICAS (Landing y Login)
  const isPublicRoute = pathname === "/" || pathname.startsWith("/login");
  
  if (isPublicRoute) {
    if (token) {
      // Si YA tiene sesión, lo sacamos de aquí y lo mandamos a su panel
      if (token.role === "ADMIN") {
        return NextResponse.redirect(new URL("/admin", request.url));
      } else {
        return NextResponse.redirect(new URL("/home", request.url));
      }
    }
    // Si no tiene sesión, que vea la landing o el login tranquilamente
    return NextResponse.next();
  }

  // 3. RUTAS PROTEGIDAS (Si llega aquí, intenta entrar a /admin, /home, etc)
  if (!token) {
    // Si un componente intenta hacer fetch a la API
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "No autorizado." }, { status: 401 });
    }
    // Si es una vista, patada al login
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 4. CONTROL DE ACCESO (RBAC) PARA ADMIN
  if (pathname.startsWith("/admin") && token.role !== "ADMIN") {
    // Usuario normal intentando entrar al panel administrativo
    return NextResponse.redirect(new URL("/home", request.url));
  }

  // 5. PASE LIBRE
  return NextResponse.next();
}

// MATCHERS: Vigila toda la app EXCEPTO los estáticos de Next.js, la API de Auth y las imágenes
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|api/auth|api/setup|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};