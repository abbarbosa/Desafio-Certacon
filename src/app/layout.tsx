import { ToastContainer } from "react-toastify";
import "./globals.css";

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
        <ToastContainer />
        {children}

      </body>
    </html>
  );
}
