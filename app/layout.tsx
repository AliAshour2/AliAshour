import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackGround";

import Header from "@/components/main/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ali Ashour",
  description: "Ali Ashour Portfolio",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden `}>
        <StarsCanvas/>
        <Header/>
        {children}
        </body>
    </html>
  );
}
