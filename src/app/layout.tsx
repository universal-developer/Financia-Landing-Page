import React from "react";
import "./globals.css";
import { manrope } from "@/app/font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.className} dark`}>
      <body>{children}</body>
    </html>
  );
}
