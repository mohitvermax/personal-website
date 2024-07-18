'use client'

import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import SocialIcons from './SocialIcons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Intro = () => {
  useGSAP(()=>{
    gsap.from('.hello', {y:20, opacity: 0, duration: 0.5, delay: 0.5})
    gsap.from('.intro', {x:20, opacity: 0, duration: 0.5, delay: 1})
    gsap.from('.paragraph', {y:20, opacity: 0, duration: 0.5, delay: 1.5})
    gsap.from('.cout', {y:20, opacity: 0, duration: 0.5, delay: 2})
  })

  return (
    <div className='p-2 flex  w-full md:w-[80vw] rounded-lg flex-col justify-center mx-auto my-4'>
      <h1 className='hello text-lg opacity-60 p-1'>hi! , i am</h1>
      <h1 className='intro text-4xl p-1 '>Mohit Verma</h1>
      <h1 className='paragraph mt-4'> i&apos;m 19 y/o engineering student working with web dev and learning ml with interests in music production, history, anime and music.</h1>
      <h1 className='cout text-3xl md:text-6xl p-1 opacity-80 pt-10 pb-2 '>
  {`cout<<"I am a `}{''}
  <span className='inline-block '>
    <Typewriter
      words={['Coder', 'MERN stack developer', 'Student at IITR', 'Music Producer']}
      loop={0} // 0 means infinite
      cursor
      cursorStyle='_'
      typeSpeed={50}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
  {`"<<endl;`}
</h1>


      <SocialIcons />

      

    </div>

  )
}

export default Intro