
import Header from "@/components/header";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 
  return (
    <html lang="en">
      <body
        className="vsc-initialized"
      >
        

        {/*conteúdo das páginas */}
        {children}

      </body>
    </html>
  );
}
