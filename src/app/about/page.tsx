'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SocialIcons from '@/components/SocialIcons'
import Image from 'next/image';
import React from 'react'
import profilePic from '../../../public/profilepic.jpeg'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const About = () => {
  useGSAP(()=>{
    gsap.from('.heading', {y:20, opacity: 0, duration: 0.5, delay: 1})
    gsap.from('.avatar', {scale:0, opacity: 0, duration: 0.5, delay: 1.5})
    gsap.from('.text-slide', {x:20, opacity: 0, duration: 0.5, delay: 2})
    gsap.from('.para', {x:20, opacity: 0, duration: 0.5, delay: 2.5})
    gsap.from('.github', { opacity: 0, duration: 0.5, delay: 3})
    gsap.from('.footer-about', { y:20 , opacity: 0, duration: 0.5, delay: 3.5})



  })
  return (
    <>
    <main className="flex min-h-screen flex-col items-center  p-12">
      <Navbar />
      <div className='flex flex-col flex-wrap items-center space-x-4 mt-20 '>
        <div>
            <h1 className='heading text-2xl underline  font-bold mb-4'>About Me</h1>
        </div>
        <div className='avatar'>
          <Image src={profilePic} width={200} height={200} className=' rounded-full m-4 hover:scale-105 transition duration-300' alt="" />
        </div>
        <div>
            <h1 className='text-slide text-3xl mb-4'>I am Mohit Verma, Sophomore at IITR.</h1>
        </div>
        <div>

            <p className='para'>attending college during the day and building projects in night</p>
        </div>
        <div>
            <SocialIcons/>
        </div>
        <div className='md:w-[50vw] justify-center mx-auto border mt-6 p-4 md:p-6 rounded-lg github'>
            <p className=' text-sm'><a
                href='https://github.com/mohitvermax'
                target='_blank'
                rel='noopener noreferrer'
                className=' hover:underline transition duration-300'
                >mohitvermax</a>/README.md
            </p>
            <ul className='flex flex-col gap-2 p-2 text-sm'>
                <li>👋 Hi, I&apos;m @mohitvermax</li>
                <li>👀 I&apos;m interested in Web Development, ML/DL.</li>
                <li>🌱 I&apos;m currently learning Nextjs.</li>
                <li>💞️ I&apos;m looking to collaborate on projects involving real-world problems and new technologies.</li>
                <li>📫 How to reach me : Email me at <a href='mailto:mohit_v@ch.iitr.ac.in' className=' hover:underline'>mohit_v@ch.iitr.ac.in</a></li>
            </ul>
        </div>
      </div>
      <div className='footer-about w-full'>
      <Footer/>

      </div>
    </main>
    
    </>
  )
}

export default About