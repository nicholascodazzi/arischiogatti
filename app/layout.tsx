import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arischiogatti - Home",
};

export const montserrat = localFont({
  src: [
    {
      path: "./fonts/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Montserrat-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/Montserrat-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./fonts/Montserrat-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Montserrat-Black.ttf",
      weight: "900",
      style: "black",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
