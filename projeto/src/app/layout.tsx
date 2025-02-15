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
        {children}
      </body>
    </html>
  );
}
