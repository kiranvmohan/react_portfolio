import React from 'react'

function Project() {

  const projects = [
    {
      title: 'ElloraLives',
      stack: 'MongoDB,Express,React,Node.js,Bootstrap',
      description: 'A fullstack community management platform for apartment communities.Features JWT-based authentication with role-based access,REST APIs for announcements and member management,and a responsive React frontend.Deployed frontend on netlify,backend on Railway ',
      liveLink: 'https://ellorafe.netlify.app',
      githubLink: 'https://github.com/kiranvmohan/projectEllora',

    },
    {
    title: 'ProjectFair',
    stack: 'MongoDB, Express, React, Node.js, Multer, JWT',
    description: 'A project showcase platform where users create accounts, upload project details and images, and display their work. Includes secure JWT authentication, Multer-based file uploads with validation, and MongoDB schemas modeling user-project relationships.',
    liveLink: 'https://fairfront.netlify.app',
    githubLink: 'https://github.com/kiranvmohan/projectfair',

    },
     {
    title: 'e-Cart',
    stack: 'React, Node.js, Express',
    description: 'An e-commerce application with product listings, cart, and checkout flow. Built cart state management and order summary logic on the frontend, backed by a Node/Express API.',
    liveLink: 'https://ekartee.netlify.app',
    githubLink: 'https://github.com/kiranvmohan/e-cart',
  },
  {
    title: 'Media Player Web App',
    stack: 'React',
    description: 'A web app to stream audio and video and organize them into a personal library, with custom playback controls built in React.',
    liveLink: 'https://mediaaudioplayer.netlify.app',
    githubLink: 'https://github.com/kiranvmohan/media-player',
  },
  ]



  return (
    <div id='project' className='min-h-screen w-full flex flex-col items-center justify-center gap-20
     p-10 md:p-16 xl:px-32'>
      <h1 className='text-center text-5xl font-light'> Projects</h1>

     <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 px-8 py-10 border-blue-500 rounded-lg hover:bg-blue-50'
          >
            <h1 className='text-3xl font-semibold'>{project.title}</h1>
            <h3 className='text-sm text-gray-700'>{project.stack}</h3>
            <p className='text-sm text-gray-600 line-clamp-4'>{project.description}</p>

            <div className='flex gap-4 pt-2'>
              {project.liveLink && (
                
                <a  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm font-medium text-blue-600 hover:underline'
                >
                  Live Demo →
                </a>
              )}
              {project.githubLink && (
                
                <a  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm font-medium text-gray-700 hover:underline'
                >
                  GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project