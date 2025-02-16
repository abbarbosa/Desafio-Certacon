'use client'

import Header from "@/components/header";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const Pathame = usePathname()

  const NoHeaderPages = ['/', '/cadastro']

  return (
    <html lang="en">
      <body
        className="vsc-initialized"
      >
        {!NoHeaderPages.includes(Pathame) && <Header />}
        {children}
        
      </body>
    </html>
  );
}
