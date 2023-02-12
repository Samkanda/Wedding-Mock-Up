import React from 'react';
import styles from "./about.scss";

const About = () => {
  return (
    <div class="About-Container pt-10 sm:pt-24 ">
    <div class="About-Box w-7/12 p-12 border-2">
        <h2 class="sm:mb-4 self-end box-title py-1 rounded-md font-bold">ABOUT US</h2>
        <h1 className='sm:hidden text-primary text-5xl'>Interior design that matters</h1>
        <h1 className=' hidden sm:flex text-primary text-5xl sm:text-6xl md:text-7xl max-w-max'>Interior design</h1>
        <h1 className=' aa  hidden sm:flex text-primary text-5xl sm:text-6xl md:text-7xl max-w-max'>that matters</h1>
        <div className='subtitle col1 self-end'>
            <h3 className=' text-2xl sm:text-3xl  font-bold text-primary'>10k +</h3>
            <h4>Customers </h4>
        </div>
        <div className='subtitle col2 self-end'>
            <h3 className=' text-2xl sm:text-3xl font-bold text-primary'>5 +</h3>
            <h4>Years of experience</h4>
        </div>
        <div className='picBox1 '>
            <img className=' object-cover h-52 sm:h-80' src="https://images.unsplash.com/photo-1600096194735-ec70b8463112?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"/>
        </div>
        <div class="picBox2 ">
            <img className=' object-cover h-52 sm:h-80' src="https://images.unsplash.com/photo-1574871786514-46e1680ea587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
        </div>
    </div>
    </div>
  )
}

export default About