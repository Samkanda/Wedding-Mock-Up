import React, { useState } from 'react'
import './hero.scss'
import Icon from '../img/icon.png'

const Nav = () => {
    const [show, setShow] = useState(false);
  return (
<nav className="">
  <div className="mx-auto px-4 sm:px-6 lg:px-28">
    <div className="relative flex h-24 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        <button type="button" onClick ={() => setShow(!show)} class="inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>

          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <div className=" sm:hidden ml-4 flex flex-shrink-0 items-center text-black">
          <img className="block h-8 w-auto lg:block mr-2" src={Icon} alt="Your Company"/>
          <h3 className=' self-end font-bold'>Fantastical</h3>
        </div>
        </button>
         {/* <!-- Button --> */}
      </div>
      <div className="flex flex-1 items-center justify-between  ">
        <div className="hidden sm:block">
          <div className="flex space-x-4 text-md font-medium">
            <a href="#" className="text-primary hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">About</a>
            <a href="#" className="text-primary hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Weddings</a>
            <a href="#" className="text-primary hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Events</a>
            <a href="#" className="text-primary hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Contact</a>
            <div className="relative ml-3">
          </div>
        </div>
      </div>
      <div className=" self-baseline flex flex-shrink-0 items-center ">
          <img className="block h-8 w-auto lg:block mr-2" src={Icon} alt="Your Company"/>
          <h3 className=' self-end font-bold'>Fantastical</h3>
        </div>
        <button type="button" class=" text-third hover:bg-third hover:text-white  right-0 sm:justify-end border-2 p-2 pl-4 pr-4 rounded border-third text-lg" >
            <h1 className=" bg-transparent  font-bold">Let's talk</h1>
        </button>
    </div>  
    </div>
  </div>

  {/* <!-- Mobile menu, show/hide based on menu state. --> */}
  <div className="sm:hidden" id="mobile-menu">
    <div className={`space-y-1 px-2 pt-2 pb-3 ${!show ? "hidden" : ""}`}>
      <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>
      <a href="#" className="text-primary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
      <a href="#" className="text-primary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Weddings</a>
      <a href="#" className="text-primary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Events</a>
      <a href="#" className="text-primary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>

    </div>
  </div>
  
</nav>
  )
}

export default Nav