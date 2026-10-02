import React, { useState } from 'react'

function Contact() {

  const [data, setData] = useState({ name: '', surname: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {

    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://react-portfolio-lhiz.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),

      })

      if (!res.ok) throw new Error()
      setStatus('success')
      setData({ name: '', surname: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }

  }
  return (
    <div id='contact' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8'>
      <h1 className='text-center text-6xl font-light text-blue-600'>Get in Touch</h1>

      <form className=' flex w-full max-w-md flex-col gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-xl'>
        <div className='flex flex-col gap-4'>
          <input type='text' name='name' placeholder='Your name' value={setData.name} onChange={handleChange} className='rounded-lg border-2 border-blue-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500' />
          <input type='text' name='surname' placeholder='Your surname' value={setData.surname} onChange={handleChange} className='rounded-lg border-2 border-blue-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500' />
          <input type='email' name='email' placeholder='Your email' value={setData.email} onChange={handleChange} className='rounded-lg border-2 border-blue-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500' />


        </div>
        <textarea name='message' placeholder='Your Message' value={setData.message} onChange={handleChange} className='h-32   w-full resize-none rounded-lg border-2 border-blue-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500' ></textarea>
        <button type='submit' disabled={status == 'sending'} className='rounded-lg h-10 border-2 border-blue-400 bg-blue-500 font-semibold text-white transition-all duration-200 hover:bg-blue-600 '>{status === 'sending' ? 'sending...' : 'send Message'}</button>
        {status === 'success' && <p className='text-center text-green-600'>Message sent successfully!</p>}
        {status === 'error' && <p className='text-center text-red-600'>Something went wrong. Try again.</p>}
      </form>

    </div>
  )
}

export default Contact