import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col w-full h-full' id='about-me'>
        <video  
        autoPlay
        muted
        loop
        className='absolute  top-[-340] left-0 z-[1] w-full h-full opject-cover'
        >
            <source src='/blackhole.webm' type='video/webm' />
        </video>
       
        <HeroContent/>
    </div>
  )
}

export default Hero