'use client'
import Link from 'next/link'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import SocialIcons from './SocialIcons';
import SkillsSection from './Skills';

const Intro = () => {
  return (
    <div className='p-6 flex w-[80vw] rounded-lg flex-col justify-center mx-auto my-4'>
      <h1 className='text-lg opacity-60 p-1'>hi! , i am</h1>
      <h1 className='text-4xl p-1 '>Mohit Verma</h1>
      <h1 className='text-5xl md:text-7xl p-1 opacity-80 pt-10 pb-2 '>
  I am a{' '}
  <span className='inline-block'>
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
</h1>


      <SocialIcons />

      <SkillsSection />

    </div>

  )
}

export default Intro