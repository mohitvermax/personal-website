'use client'
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'; 
import Link from 'next/link'; 
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
  useGSAP(()=>{
    gsap.from('.navbar', {y:20, opacity: 0, duration: 0.5, delay: 0})
  })
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar flex relative z-20 w-full items-center justify-between pb-8 border-b border-gray-500'>
      <Link href={"/"} className='text-3xl font-bold'>emvee.</Link>

      <div className='block md:hidden'>
        <button onClick={toggleNavbar} className='text-gray-600 focus:outline-none'>
          <FiMenu size={24} />
        </button>
      </div>

      <ul className={`md:flex ${isOpen ? 'flex flex-col w-full items-center gap-5 absolute top-6 right-0 z-10 p-4  bg-gray-200 dark:bg-black bg-opacity-90 border border-gray-300  rounded-bl-lg shadow-lg' : 'hidden'} md:items-center md:gap-10 mt-4 md:mt-0 md:bg-transparent md:shadow-none md:border-none md:relative md:flex-row md:w-auto`}>
    <li className={`font-bold text-xl text-black dark:text-white ${isOpen ? 'rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out' : ''}`}>
        <Link href={"/"}>{`</Home>`}</Link>
    </li>
    <li className={`font-bold text-xl text-black dark:text-white ${isOpen ? 'rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out' : ''}`}>
        <Link href={"/about"}>{`</About>`}</Link>
    </li>
</ul>


    </div>
  );
};

export default Navbar;
