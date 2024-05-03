import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackGround";
// import NavBar from "@/components/main/NavBar";
import Header from "@/components/main/Header";
// import Link from "next/link";

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
        {/* <NavBar/> */}
        {children}
        </body>
    </html>
  );
}
