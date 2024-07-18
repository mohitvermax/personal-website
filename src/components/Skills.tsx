'use client'
import React, { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaGit ,FaPython} from 'react-icons/fa';
import { SiMongodb, SiTypescript ,SiVite,SiFirebase,SiSocketdotio,SiTailwindcss ,SiExpress} from 'react-icons/si';
import { TbBrandCpp } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const SkillsSection = () => {
  
  useGSAP(()=>{
    gsap.from('.skills', {y:20, opacity: 0, duration: 0.5, delay: 3})
    
  })
  
  return (
  <div className='skills flex flex-col items-center mt-10'>
    <h1 className='text-3xl underline  font-bold'>My Skills</h1>
    <div className='icons max-w-screen-lg mx-auto flex flex-wrap justify-center gap-5 sm:space-x-6 mt-8'>
      <SkillIcon Icon={FaHtml5} />
      <SkillIcon Icon={FaCss3Alt} />
      <SkillIcon Icon={FaJsSquare} />
      <SkillIcon Icon={SiTypescript} />
      <SkillIcon Icon={FaReact} />
      <SkillIcon Icon={FaNodeJs} />
      <SkillIcon Icon={SiMongodb} />
      <SkillIcon Icon={FaDatabase} />
      <SkillIcon Icon={SiVite} />
      <SkillIcon Icon={TbBrandCpp} />
      <SkillIcon Icon={RiNextjsFill} />
      <SkillIcon Icon={SiFirebase} />
      <SkillIcon Icon={FaPython} />
      <SkillIcon Icon={SiSocketdotio} />
      <SkillIcon Icon={SiTailwindcss} />
        <SkillIcon Icon={SiExpress} />
      <SkillIcon Icon={FaGit} />
    </div>
    </div>
  );
};

const SkillIcon = ({ Icon }: any) => {
  
  return (
    <div className=' p-4 transition-transform duration-300 transform hover:scale-110' >
      <Icon className='' size={50} />
    </div>
  );
};

export default SkillsSection;
