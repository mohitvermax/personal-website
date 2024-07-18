'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialIcons = () => {
  const links = useRef(null);
  useGSAP(()=>{
    gsap.from(links.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      delay: 2.5,
      stagger: 1
    });
  })
  return (
    <div className='links flex space-x-4 mt-10' ref={links}>
      <a
        href='https://github.com/mohitvermax'
        target='_blank'
        rel='noopener noreferrer'
        className=' bg-gray-950  hover:scale-125 text-white p-3 md:p-4 rounded-full hover:bg-gray-700 transition duration-300'
      >
        <FaGithub size={25} />
      </a>
      <a
        href='https://www.linkedin.com/in/mohit-verma2005/'
        target='_blank'
        rel='noopener noreferrer'
        className=' bg-gray-950   hover:scale-125 text-white p-3 md:p-4 rounded-full hover:bg-blue-600 transition duration-300'
      >
        <FaLinkedin size={25} />
      </a>
      <a
        href='https://x.com/mohitvermaxx'
        target='_blank'
        rel='noopener noreferrer'
        className=' bg-gray-950   hover:scale-125 text-white p-3 md:p-4 rounded-full hover:bg-blue-400 transition duration-300'
      >
        <FaTwitter size={25} />
      </a>
    </div>
  );
};

export default SocialIcons;
