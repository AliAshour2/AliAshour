import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";

interface props {
  src: string;
  title: string;
  desc: string;
  url: string;
}

const ProjectCard = ({ src, desc, title, url }: props) => {
  return (
      <Link href={url} target="_blank">
      <BackgroundGradient className="relative z-[20]  p-2 overflow-hidden cursor-pointer rounded-lg  bg-white dark:bg-zinc-900">
        <Image
            src={src}
            alt={title}
            width={900}
            height={900}
            className=" object-contain"
          />
          <div className="relative p-4 h-full">
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
            <p className="mt-2 text-gray-300">{desc}</p>
          </div>
          
    </BackgroundGradient>
      </Link>
        
      
    
    
  );
};

export default ProjectCard;
