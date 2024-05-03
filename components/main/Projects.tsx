import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { SparklesPreview } from "../sub/SpraksHead";
// import { AnimatedPinDemo } from "../sub/AnimatedPinDemo";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      
      <SparklesPreview />
      <div className="flex flex-col  h-full w-full md:flex-row gap-10 px-10 ">
        <ProjectCard
          src="/LoraAi.png"
          title="Lora Ai"
          desc="AI powerd wepsite for chating with your data "
          url="https://aliashour2.github.io/Lora/"
        />

        <ProjectCard
          src="/bazel.png"
          title="bazel"
          desc="Marketing Agency"
          url="https://aliashour2.github.io/bezel/"
        />

        <ProjectCard
          src="/baity.png"
          title="Baity"
          desc="Baity is wep app for real state"
          url="https://aliashour2.github.io/Baity-website/"
        />
        
        {/* <AnimatedPinDemo
          imagePath="/LoraAi.png"
          title="Lora Ai.io"
          h2Text="Lora AI"
          desc="AI powerd wepsite for Quation answering and generating and chats with your  data "
          href="https://aliashour2.github.io/Lora/"
        />
        
        


        
        <AnimatedPinDemo
          imagePath="/bazel.png"
          title="www.bazel.com"
          h2Text="bazel"
          desc="Marketing Agency"
          href="https://aliashour2.github.io/bezel/"
        />
        
        
       
        <AnimatedPinDemo
          imagePath="/LoraAi.png"
          title="Lora Ai.io"
          h2Text="Lora AI"
          desc="AI powerd wepsite for Quation answering and generating and chats with your  data "
          href="https://aliashour2.github.io/Lora/"
        />
         */}
        
      </div>
    </div>
  );
};

export default Projects;
