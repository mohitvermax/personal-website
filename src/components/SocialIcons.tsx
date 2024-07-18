import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className='flex space-x-4 mt-10'>
      <a
        href='https://github.com/mohitvermax'
        target='_blank'
        rel='noopener noreferrer'
        className='bg-gray-950  hover:scale-125 text-white p-4 rounded-full hover:bg-gray-700 transition duration-300'
      >
        <FaGithub size={25} />
      </a>
      <a
        href='https://www.linkedin.com/in/mohit-verma2005/'
        target='_blank'
        rel='noopener noreferrer'
        className='bg-gray-950   hover:scale-125 text-white p-4 rounded-full hover:bg-blue-600 transition duration-300'
      >
        <FaLinkedin size={25} />
      </a>
      <a
        href='https://x.com/mohitvermaxx'
        target='_blank'
        rel='noopener noreferrer'
        className='bg-gray-950   hover:scale-125 text-white p-4 rounded-full hover:bg-blue-400 transition duration-300'
      >
        <FaTwitter size={25} />
      </a>
    </div>
  );
};

export default SocialIcons;
