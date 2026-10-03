import React from 'react'

function Project() {
  const projects = [
    {
      title: 'ElloraLives',
      stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Bootstrap'],
      description:
        'A full-stack community management platform for apartment communities. Features JWT-based authentication with role-based access, REST APIs for announcements and member management, and a responsive React frontend. Deployed frontend on Netlify, backend on Railway.',
      liveLink: 'https://ellorafe.netlify.app',
      githubLink: 'https://github.com/kiranvmohan/projectEllora',
    },
    {
      title: 'ProjectFair',
      stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Multer', 'JWT'],
      description:
        'A project showcase platform where users create accounts, upload project details and images, and display their work. Includes secure JWT authentication, Multer-based file uploads with validation, and MongoDB schemas modeling user-project relationships.',
      liveLink: 'https://fairfront.netlify.app',
      githubLink: 'https://github.com/kiranvmohan/projectfair',
    },
    {
      title: 'e-Cart',
      stack: ['React', 'Node.js', 'Express'],
      description:
        'An e-commerce application with product listings, cart, and checkout flow. Built cart state management and order summary logic on the frontend, backed by a Node/Express API.',
      liveLink: 'https://ekartee.netlify.app',
      githubLink: 'https://github.com/kiranvmohan/e-cart',
    },
    {
      title: 'Media Player Web App',
      stack: ['React', 'CSS3'],
      description:
        'A web app to stream audio and video and organize them into a personal library, with custom playback controls built in React.',
      liveLink: 'https://mediaaudioplayer.netlify.app',
      githubLink: 'https://github.com/kiranvmohan/media-player',
    },
  ]

  return (
    <section id='project' className='min-h-screen w-full flex flex-col items-center justify-center py-20 px-6 sm:px-10 lg:px-16 xl:px-24'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl sm:text-5xl font-light tracking-tight text-gray-900'>
          Featured <span className='text-blue-600 font-normal'>Projects</span>
        </h2>
        <div className='w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full'></div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg'
          >
            <div>
              <h3 className='text-2xl font-bold text-gray-900'>{project.title}</h3>

              {/* Tech Stack Badges */}
              <div className='flex flex-wrap gap-1.5 mt-3 mb-4'>
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className='rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 border border-blue-100'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className='text-sm leading-relaxed text-gray-600'>
                {project.description}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className='flex items-center gap-4 pt-6 mt-6 border-t border-gray-100'>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800'
                >
                  Live Demo
                  <span className='ml-1 text-xs'>↗</span>
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900'
                >
                  GitHub
                  <span className='ml-1 text-xs'>↗</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project