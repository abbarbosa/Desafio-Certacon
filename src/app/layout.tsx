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

        {/* <Provider store={store}> */}
          {/*conteúdo das páginas */}
          {children}
        {/* </Provider> */}

      </body>
    </html>
  );
}
