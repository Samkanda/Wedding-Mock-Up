import React from 'react'
import Wedding1 from "../img/decoration.jpg";
import Wedding2 from "../img/wedding1.jpg";
import Wedding3 from "../img/wedding4.jpeg";


const Main = () => {
  return (
    <div class="Hero-Container pt-10 sm:pt-24 ">
        <div class=" mx-auto px-6 sm:pl-6 lg:pl-28 box  Hero-Left">
            <div  class=" text-7xl sm:text-8xl xl:text-9xl text-primary row-1"  >
                <h1>Hi There</h1>
                <h1>This is</h1>
                <h1>- Sanches</h1>
                <h1>Liza</h1>
            </div>
            <div class=" text-secondary text-2xl row-2" >
                <h1>Floral Designer, Wedding Planner, and Event 
                    Enthusiast who creates memorable moments for special occasions
                </h1>
            </div>
            <div class=" text-yellow-900 " className='row-3'>
                <button class="bg-third px-12 font-sans text-white text-2xl p-6  rounded-xl">Get in touch</button>
            </div>
        </div>
        <div class=" sm:hidden box Hero-Right">
            <img className='img1' src={Wedding1} alt="dd" />
            <img className='img2' src={Wedding2} alt="dd" />
            <img className='img3 sm:hidden xl:block' src={Wedding3} alt="dd" />
        </div>
    </div>
  )
}

export default Main