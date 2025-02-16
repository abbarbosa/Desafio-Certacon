'use client'

import Header from "@/components/header";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  //variável que usa o pathname para verificar a rota atual
  const Pathame = usePathname()

  //variavél para listar as páginas que vão ficar sem header
  const NoHeaderPages = ['/', '/cadastro']

  return (
    <html lang="en">
      <body
        className="vsc-initialized"
      >
        {/* Páginas sem header inclui pathame e tira o header */}
        {!NoHeaderPages.includes(Pathame) && <Header />}

        {/*conteúdo das páginas */}
        {children}

      </body>
    </html>
  );
}
