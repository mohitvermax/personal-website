import React from 'react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='p-4 mt-8 w-full flex justify-between items-center'>
      <div className='flex space-x-4'>
        <a
          href='https://x.com/mohitvermaxx'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-400 transition duration-300'
          aria-label='Twitter'
        >
          <FaTwitter size={20} />
        </a>
        <a
          href='https://www.linkedin.com/in/mohit-verma2005/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-500 transition duration-300'
          aria-label='LinkedIn'
        >
          <FaLinkedin size={20} />
        </a>
      </div>
      <div className='text-sm'>
        Made with <span className='text-red-500'>♥</span> by emvee
      </div>
    </footer>
  );
};

export default Footer;
