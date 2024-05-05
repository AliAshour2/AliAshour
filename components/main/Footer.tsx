"use client"
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { Socials } from "@/constans";
import Image from "next/image";
import Link from "next/link"; 

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[20rem] z-[60] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="relative z-10 text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Ali Ashour
        </h2>
        <ul className="flex gap-1 flex-wrap justify-center">
          {Socials.map((social) => (
            <Link
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-5"
              key={social.name}
              href={social.link}
              target="_blank"
            >
              <Image src={social.src} alt={social.name} width={20} height={20} />
            </Link>
          ))}
        </ul>
      </div>
      <BackgroundBeams />
    </div>
  );
}

