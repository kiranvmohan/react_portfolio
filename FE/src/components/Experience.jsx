import React from 'react'

function Experience() {
  return (
    <div id='experience' className='flex min-h-screen w-full flex-col items-center gap-20 p-14 md:p-20 lg:p-36'>

      <h1 className='text-center text-5xl font-light'>Experience</h1>
      <div className='flex flex-wrap gap-0 md:flex-nowrap md:gap-10'>
        <div className='flex-1'>
          <div className='relative space-y-1 border-l-2 p-8 text-left'>
            <h3 className='text-xl font-semibold md:text-2xl'>Luminar Technolab, Kochi</h3>
            <p className='font-light text-lg text-gray-600'>MERN Stack Developer Intern</p>
            <p className='text-sm text-gray-500'>Nov 2024 – Jun 2025</p>
            <p className='text-sm text-gray-600'>
              Completed a hands-on development program building production-ready applications with MongoDB, Express.js, React and Node.js. Built 15+ responsive UI components with React and Tailwind CSS, implemented client-side routing and Redux state management, and worked with REST APIs, JWT authentication, and file uploads using Multer.
            </p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-blue-500'></span>
          </div>
        </div>

        <div className='flex-1'>
          <div className='relative space-y-1 border-l-2 p-8 text-left'>
            <h3 className='text-xl font-semibold md:text-2xl'>Bachelor of Science, Chemistry</h3>
            <p className='font-light text-lg text-gray-600'>University of Calicut, Kerala</p>
            <p className='text-sm text-gray-500'>Jun 2016 – Jun 2019</p>
            <p className='text-sm text-gray-600'>
              Completed a Bachelor's degree before transitioning into full-stack web development through an intensive MERN stack program.
            </p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-blue-500'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience