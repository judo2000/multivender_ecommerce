// Next.js
import type { Metadata } from "next";

// Global css
import "./globals.css";

// font
import { Geist, Geist_Mono, Barlow } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlowFont = Barlow({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-barlow",
});
// Metadata
export const metadata: Metadata = {
  title: "GoShop",
  description:
    "Welcome to GoShop, your ultimate destination for seamless online shopping!  Discover a vast ______ and experience the joy of",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${barlowFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
