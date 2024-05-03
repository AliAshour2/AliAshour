"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/outline";
// import { ScrollParallax } from "react-just-parallax";
import Image from "next/image";
import { Button, MovingBorder } from "../ui/moving-border";
// import { HoverBorderGradient } from "../ui/hover-border-gradient";



const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
     

     
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
           className="Welcome-box py-[8px] px-[7px]  bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl "
          variants={slideInFromTop}
        >
          
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />

            <h2 className="Welcome-text text-[13px]  font-code ">Software Engineer</h2>
         
        </motion.div>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex flex-col gap-6 mt-6 text-6xl font-bold
         text-white max-w-[600px] w-auto h-auto" >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
        </motion.div>


        <motion.p
        variants={slideInFromLeft(0.5)}
        className = "text-lg text-gray-400 my-5 max-w-[600px]"
        >

        </motion.p>

        <motion.a
        variants={slideInFromLeft(1)}
        className = " button-primar text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <Button>Download Resume</Button>
          {/* <HoverBorderGradient>Download Resume</HoverBorderGradient> */}
          
        </motion.a>
      </div>
      <motion.div
      variants = {slideInFromRight(0.8)}
      className ="w-full w-full flex justify-center items-center"

      >
          <Image width={650} height={650} src="/mainIconsdark.svg" alt="tech icons"  />
        
      </motion.div>
   
    </motion.div>
  );
};

export default HeroContent;
