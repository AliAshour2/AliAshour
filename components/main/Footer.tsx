"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { Socials } from "@/constans";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[20rem] z-[60] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Ali Ashour
        </h2>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10"></p>
        <div className="text-center flex justify-center  py-1 px-2">
          {Socials.map((social) => (
            <a
                className="p-1 w-full h-full "
              href={social.link}
              target="_blank"
              key={social.name}
              style={{ width: "24px", height: "24px" }}
            >
              <img  src={social.src} alt={social.name} />
            </a>
          ))}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
