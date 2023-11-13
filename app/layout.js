import Navbar from "@/components/Navbar/Navbar";
import NavbarMobile from "@/components/Navbar/NavbarMobile";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Apple Store แบบออนไลน์ - Apple (TH)</title>
        <link rel="icon" type="image/png" href="/Images/Icontitle.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-IBM">
        <Navbar />
        <NavbarMobile />
        {children}
      </body>
    </html>
  );
}
