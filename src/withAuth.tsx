import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token") || req.headers.get("Authorization");

  // Rotas protegidas
  const protectedRoutes = ["/dashboard", "/perfil", "/configuracoes"];

  if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
    return NextResponse.redirect(new URL("/", req.url)); // Redireciona para login
  }

  return NextResponse.next();
}

// Define quais rotas vão usar o middleware
export const config = {
  matcher: ["/dashboard", "/perfil", "/configuracoes"],
};
