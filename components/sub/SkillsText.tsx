"use client";
import { SparklesIcon } from "@heroicons/react/24/outline";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";

const SkillsText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <motion.div
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        variants={slideInFromTop}
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />

        <h1 className="Welcome-text text-[13px]">Next js </h1>
      </motion.div>

      <motion.div className='font-sans text-[30px] text-white text-center   mt-2 mb-3' variants={slideInFromLeft(0.5 )}>
         Making app with modern technology
      </motion.div>

      <motion.div className=' font-code text-[20px] text-gray-200 text-center   my-2' variants={slideInFromRight(0.5 )}>
         Never miss a task , deadline or idea
      </motion.div>


    </div>
  );
};

export default SkillsText;
