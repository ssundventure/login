import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Carrot-market Assignment",
  description: "Generated by create Carrot-market assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative max-w-screen-sm mx-auto py-10 px-5 bg-stone-100`}>{children}</body>
    </html>
  );
}