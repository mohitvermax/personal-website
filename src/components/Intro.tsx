'use client'

import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import SocialIcons from './SocialIcons';


const Intro = () => {
  return (
    <div className='p-2 flex  w-full md:w-[80vw] rounded-lg flex-col justify-center mx-auto my-4'>
      <h1 className='text-lg opacity-60 p-1'>hi! , i am</h1>
      <h1 className='text-4xl p-1 '>Mohit Verma</h1>
      <h1 className='mt-4'> i'm 19 y/o engineering student working with web dev and learning ml with interests in music production, history, anime and music.</h1>
      <h1 className='text-3xl md:text-6xl p-1 opacity-80 pt-10 pb-2 '>
  {`cout<<"I am a `}{''}
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
  {`"<<endl;`}
</h1>


      <SocialIcons />

      

    </div>

  )
}

export default Intro