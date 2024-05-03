import { Frontend_skill} from '@/constans'
import React from 'react'
import SkillsDataProvider from '../sub/SkillsDataProvider'
import SkillsText from './../sub/SkillsText';

const Skills = () => {
  return (
    <section id="skills" className ="flex flex-col justify-center gap-3 h-full relative   py-80 " style = {{transform:"scale(0.9)"}}>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        <SkillsText/>
        {Frontend_skill.map((image , index)=>(
          <SkillsDataProvider 
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

        <div className = "w-full h-full absolute">
          <div className="flex items-center justify-center w-full h-full absolute  z-[-10] opacity-30 ">
            <video 
            src="/cards-video.webm"
            className='w-full h-auto'
            preload='false'
            loop
            muted
            autoPlay
            playsInline
            >

            </video>
          </div>
        </div>
    </section>
  )
}

export default Skills
