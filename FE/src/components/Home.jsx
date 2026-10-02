import React from 'react'

import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'


function Home() {
  return (
    <div id='home' className=' flex min-h-screen w-full items-center justify-center '>
      <div className='flex flex-col items-center justify-center gap-8 p-5 text-center'>
        <div className='flex items-center justify-center'>
            <img src="/dp.jpg" className=' h-[100px] w-[100px] rounded-full object-cover p-0 sm:h-[350px] sm:w-[400px] object-center '/>

        </div>


      

        <div className='space-y-1 sm:space-y-3'>
          <h1 className='bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-xl font-semibold text-transparent md:text-5xl lg:text-6xl'>Kiran V M</h1>
          <h3 className='bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl'>Web Developer</h3>
          <p className=' max-w-[500px] text-sm text-gray-600 font-semibold '>  Full-stack developer specializing in the MERN stack. I build responsive, production-ready web applications — from UI design to REST APIs to deployment — and I'm always excited to pick up new tools and solve problems end-to-end.</p>
        </div>
        <div className='flex gap-3'>
         <a href='https://github.com/kiranvmohan' target='_blank' rel='noopener noreferrer'> <BiLogoGithub className=' h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-blue-600 text-white transition-all duration-200 p-2 hover:scale-110 hover:border-blue-600 hover:bg-white hover:text-blue-600 md:w-12 md:h-12'/></a>
              <a href='https://linkedin.com/in/kiranmohandas' target='_blank' rel='noopener noreferrer'>   <BiLogoLinkedin className=' h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-blue-600 text-white transition-all duration-200 p-2 hover:scale-110 hover:border-blue-600 hover:bg-white hover:text-blue-600 md:w-12 md:h-12'/></a>   
                          
        
        </div>
    
      </div>
    </div>
  )
}

export default Home