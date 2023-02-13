import React from 'react'
import './contact.scss'

const Contact = () => {
  return (
    <div className=' Contact-container py-11 bg-[#EDDFD4] w-full flex justify-center items-center text-center'>
        <div className='Contact-box w-5/6 lg:w-3/6  xl:w-2/6'>
        <h1 className='Contact-title mt-6 text-4xl sm:text-7xl text-primary'>
            Are you ready to plan a special day
        </h1>
        <h2 className='Contact-description mt-6 text-lg sm:text-2xl text-secondary font-sans'>
            We will take care of everything for your from event planning and coronation to design and production
        </h2>
        <button className='  font-sans w-52 p-6 mt-6 bg-[#982628] text-white text-2xl rounded-2xl'>
            Let's talk
        </button>
        </div>
    </div>
  )
}

export default Contact