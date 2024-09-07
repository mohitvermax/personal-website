'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoArrowForwardSharp } from "react-icons/io5";


const projectsData = [
  { id: 1, title: 'Audio Seperator Project', description: 'Developed a C++ application using JUCE framework to generate real-time spectrograms and process audio with FFT techniques', image: '/fftproject.png' , github:'https://github.com/mohitvermax/AudioSeperator3000'},
  { id: 2, title: 'GoogleMeet Alternative', github: 'https://github.com/GmeetAlternative/GmeetAlternative',description: 'a team hackathon project designed to revolutionize online meetings by integrating advanced features such as AI-powered summarization, transcription and WebRTC ,Sockets', image: '/gmeet.png' },
  { id: 3, title: 'Chatting website', description: 'An online chatting website where users can chat with other users. implemented with mern stack', image: '/chatapp.png' , github:'https://github.com/mohitvermax/chat-app'},
  { id: 4, title: 'Cinequest',url:'https://cine-quest.netlify.app/',github:'https://github.com/mohitvermax/cinequest', description: 'CineQuest is a web application developed using ReactJS and Firebase, designed to provide users with a platform similar to IMDb.', image: '/cinequest.png' },
  { id: 5, title: 'My Portfolio website', description: 'My personal portfolio website developed using NextJS and TailwindCSS', image: '/portfolio.png' , github:'https://github.com/mohitvermax/personal-website'},
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(2);

  const loadMoreProjects = () => {
    setVisibleProjects(visibleProjects + 2); 
  };
  useGSAP(()=>{
    gsap.from('.projects-title', {y:20, opacity: 0, duration: 0.5, delay: 3.5})
    gsap.from('.projects',{y:20, opacity: 0, duration: 0.5, delay: 4})
    gsap.from('.projects-btn',{y:20, opacity: 0, duration: 0.5, delay: 4.5})

  })

  return (
    <div className='flex flex-col flex-wrap items-center space-x-4 mt-20 '>
        <div>
    <h1 className='projects-title text-3xl underline  font-bold mb-8'>My Projects</h1>
    </div>
    <div className='projects max-w-screen-lg mx-auto flex flex-wrap justify-center gap-12 sm:space-x-6 mt-6 '>
      {projectsData.slice(0, visibleProjects).map(project => (
        <div key={project.id} className='max-w-xs rounded overflow-hidden shadow-lg my-4 hover:scale-105 transition duration-300'>
        <div className='relative w-full h-48'> {/* Set a fixed height for the image container */}
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className='w-full h-full'
          />
        </div>
        <div className='px-6 py-4 flex flex-col'>
          <div className='font-bold text-xl mb-2 flex items-center justify-between'>
            {project.title}
            <div className='flex gap-2'>
              {project.github && (
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:scale-125 text-white p-1 rounded-full transition duration-300'
                >
                  <FaGithub size={20} />
                </a>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:scale-125 text-white p-1 rounded-full transition duration-300'
                >
                  <IoArrowForwardSharp size={20} />
                </a>
              )}
            </div>
          </div>
          <p className='text-base'>{project.description.slice(0, 70)}...</p>
        </div>
      </div>
      ))}
      </div>
      {visibleProjects < projectsData.length && (
        <div className='projects-btn'>
        <button onClick={loadMoreProjects} className=' bg-gray-950 transition duration-300 hover:bg-slate-100 hover:text-black text-white font-bold py-3 px-5 rounded mt-4'>
          Load More
        </button>
        </div>
      )}
      </div>
  );
};

export default Projects;
