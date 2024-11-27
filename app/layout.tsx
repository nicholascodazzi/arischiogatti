import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arischiogatti - Home"
};

const montserrat = localFont({
  src: [
    {
      path: "./fonts/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/Montserrat-Italic.ttf",
      weight: "400",
      style: "italic"
    },
    {
      path: "./fonts/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal"
    },
    {
      path: "./fonts/Montserrat-BoldItalic.ttf",
      weight: "700",
      style: "italic"
    },
    {
      path: "./fonts/Montserrat-Black.ttf",
      weight: "900",
      style: "black"
    }
  ]
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
