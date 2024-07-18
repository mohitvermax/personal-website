import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-16'>
      <h2 className='text-3xl underline font-bold mb-4'>Let's Connect</h2>
      <div className='flex space-x-4 mt-8'>
        <a
          href='mailto:mohit_v@ch.iitr.ac.in'
          className='bg-gray-950 text-white p-4 rounded-full hover:bg-gray-700 transition duration-300'
          aria-label='Email'
        >
          <FaEnvelope size={25} />
        </a>
        <a
          href='https://x.com/mohitvermaxx'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gray-950 text-white p-4 rounded-full hover:bg-blue-400 transition duration-300'
          aria-label='Twitter'
        >
          <FaTwitter size={25} />
        </a>
        <a
          href='https://github.com/mohitvermax'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gray-950 text-white p-4 rounded-full hover:bg-gray-700 transition duration-300'
          aria-label='GitHub'
        >
          <FaGithub size={25} />
        </a>
        <a
          href='https://www.linkedin.com/in/mohit-verma2005/'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gray-950 text-white p-4 rounded-full hover:bg-blue-600 transition duration-300'
          aria-label='LinkedIn'
        >
          <FaLinkedin size={25} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
