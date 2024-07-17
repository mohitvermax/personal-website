'use client'
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'; 
import Link from 'next/link'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex relative w-full items-center justify-between pb-8 border-b border-gray-500'>
      <h1 className='text-2xl font-bold'>emvee.</h1>

      <div className='block md:hidden'>
        <button onClick={toggleNavbar} className='text-gray-600 focus:outline-none'>
          <FiMenu size={24} />
        </button>
      </div>

      <ul className={`md:flex ${isOpen ? 'flex flex-col  gap-2 absolute top-3 right-3 p-2 bg-black bg-opacity-40' : 'hidden'} md:items-center md:gap-20 mt-4 md:mt-0 `}>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/about"}>About</Link></li>
        <li><Link href={"/contact"}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
