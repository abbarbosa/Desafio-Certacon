import "./globals.css";
import { Provider } from "react-redux";

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
          {children}

      </body>
    </html>
  );
}
