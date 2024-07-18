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
      <Link href={"/"} className='text-3xl font-bold'>emvee.</Link>

      <div className='block md:hidden'>
        <button onClick={toggleNavbar} className='text-gray-600 focus:outline-none'>
          <FiMenu size={24} />
        </button>
      </div>

      <ul className={`md:flex ${isOpen ? 'flex flex-col  gap-5 absolute top-3 right-3  p-2 bg-black bg-opacity-40' : 'hidden'} md:items-center md:gap-20 mt-4 md:mt-0 `}>
        <li className='font-bold text-xl'><Link href={"/"}>{`</Home>`}</Link></li>
        <li className='font-bold text-xl'><Link href={"/about"}>{`</About>`}</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
