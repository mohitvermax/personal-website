'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  useGSAP(()=>{
    gsap.from('.connect-title', {y:20, opacity: 0, duration: 0.5, delay: 5})
    gsap.from('.connect-links',{y:20, opacity: 0, duration: 0.5, delay: 5.5})

  })
  return (
    <div className='flex flex-col items-center justify-center mt-16'>
      <h2 className='connect-title text-3xl underline font-bold mb-4'>Let&apos;s Connect</h2>
      <div className='flex connect-links space-x-4 mt-2 md:mt-6'>
        <a
          href='mailto:mohit_v@ch.iitr.ac.in'
          className='bg-gray-950 text-white p-2 md:p-4 rounded-full hover:bg-gray-700 transition duration-300'
          aria-label='Email'
        >
          <FaEnvelope size={20} />
        </a>
        <a
          href='https://x.com/mohitvermaxx'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gray-950 text-white p-2 md:p-4 rounded-full hover:bg-blue-400 transition duration-300'
          aria-label='Twitter'
        >
          <FaTwitter size={20} />
        </a>
        <a
          href='https://github.com/mohitvermax'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gray-950 text-white p-2 md:p-4 rounded-full hover:bg-gray-700 transition duration-300'
          aria-label='GitHub'
        >
          <FaGithub size={20} />
        </a>
        <a
          href='https://www.linkedin.com/in/mohit-verma2005/'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gray-950 text-white p-2 md:p-4 rounded-full hover:bg-blue-600 transition duration-300'
          aria-label='LinkedIn'
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
