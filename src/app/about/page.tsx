import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SocialIcons from '@/components/SocialIcons'
import React from 'react'
export const metadata = {
    title: "emvee.",
    description: "Mohit Verma's personal website",
  };

const page = () => {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center  p-12">
      <Navbar />
      <div className='flex flex-col flex-wrap items-center space-x-4 mt-20 '>
        <div>
            <h1 className='text-2xl underline  font-bold mb-4'>About Me</h1>
        </div>
        <div>
          <img src="profilepic.png" className='rounded-full h-40 w-40 m-4 hover:scale-105 transition duration-300' alt="" />
        </div>
        <div>
            <h1 className='text-3xl mb-4'>I am Mohit Verma, Sophomore at IITR.</h1>
        </div>
        <div>

            <p>attending college during the day and building projects in night</p>
        </div>
        <div>
            <SocialIcons/>
        </div>
        <div className='md:w-[50vw] justify-center mx-auto border mt-6 p-4 md:p-6 rounded-lg'>
            <p className='text-gray-100 text-sm'><a
                href='https://github.com/mohitvermax'
                target='_blank'
                rel='noopener noreferrer'
                className=' hover:underline transition duration-300'
                >mohitvermax</a>/README.md
            </p>
            <ul className='flex flex-col gap-2 p-2 text-sm'>
                <li>👋 Hi, I’m @mohitvermax</li>
                <li>👀 I’m interested in Web Development, ML/DL.</li>
                <li>🌱 I’m currently learning Nextjs.</li>
                <li>💞️ I’m looking to collaborate on projects involving real-world problems and new technologies.</li>
                <li>📫 How to reach me : Email me at <a href='mailto:mohit_v@ch.iitr.ac.in' className=' hover:underline'>mohit_v@ch.iitr.ac.in</a></li>
            </ul>
        </div>
      </div>
      <Footer/>
    </main>
    
    </>
  )
}

export default page