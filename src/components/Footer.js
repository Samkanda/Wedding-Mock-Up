import React from 'react'

const Footer = () => {
  return (
    <div className=' footer-Container flex justify-center w-full h-auto sm:h-96 p-4'>
        <div className='flex flex-col justify-center w-full items-center ' >
            <div className='flex flex-col sm:flex-row justify-center w-full items-center'>
                <div className='flex flex-col text-center justify-center m-6 p-6 md:m-10 md:p-10 w-5/6 sm:w-3/6 lg:w-96 h-40 border-2 border-[#bca37c2f]'>
                    <h1 className='font-fontMain text-2xl sm:text-3xl pb-2'>Contact us</h1>
                    <h2 className=' text-md sm:text-lg'>Canada, Ontario</h2>
                    <h2 className='text-md sm:text-lg'>(1)6479234353</h2>
                </div>
                <div className=' flex flex-col text-center justify-center m-6 p-6 md:m-10 md:p-10 w-5/6 sm:w-3/6  lg:w-96 h-40 border-2 border-[#bca37c2f]'>
                    <h1 className='font-fontMain text-2xl sm:text-3xl pb-2'>Working hours</h1>
                    <h2 className='text-mdsm:text-lg'>Monday-Friday: 08:00 - 05:00</h2>
                    <h2 className=' text-md sm:text-lg'>Saturday-Sunday: 10:00 - 02:00</h2>
                </div>
            </div>
            <div className='flex justify-center mb-4 text-center'>
                <h3>Copyright by Navpreet (Sam) Kanda - Powered by React</h3>
            </div>
            <div className='flex justify-around w-full sm:w-96'>
                <h3>Navpreet Kanda</h3>
                <h3>License</h3>
                <h3>Changelog</h3>
            </div>
        </div>

    </div>
  )
}

export default Footer