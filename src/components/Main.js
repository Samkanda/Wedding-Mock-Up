import React from 'react'
import Wedding1 from "../img/decoration.jpg";
import Wedding2 from "../img/wedding1.jpg";
import Wedding3 from "../img/wedding4.jpeg";
import {motion} from "framer-motion"

const Main = () => {
  return (
    <div className="Hero-Container pt-10 sm:pt-20 ">
        <div className=" mx-auto px-6 sm:pl-6 lg:pl-28 box  Hero-Left">
            <motion.div
            className="text-7xl sm:text-8xl xl:text-9xl text-primary row-1 w-max"
            initial={{ y: 100, x: 50, opacity: 0, scale: 0 }}
            animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "tween" }}
            > 
                <h1>Hi There</h1>
                <h1>This is</h1>
                <h1>- Sanches</h1>
                <h1>Liza</h1>
            </motion.div>
            <motion.div className="text-secondary text-2xl row-2"
            initial={{ y: 100, x: 50, opacity: 0, scale: 0 }}
            animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, type: "tween" }} >
                <h1>Floral Designer, Wedding Planner, and Event 
                    Enthusiast who creates memorable moments for special occasions
                </h1>
            </motion.div>
            <div className=" text-yellow-900 row-3" >
                <motion.button href="#"
                    className="bg-third px-12 font-sans text-white text-2xl p-6  rounded-xl sm:w-80"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8, type: "tween" }}
                    > 
                    Get in touch
                    </motion.button>
            </div>
        </div>
        <div className=" sm:hidden box Hero-Right">
            <motion.img className='img1' src={Wedding1} 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, type: "tween" }}
            alt="wedding photo" />
            <motion.img className='img2' src={Wedding2}  
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6, type: "tween" }}
            alt="wedding photo" />
            <motion.img className='img3 sm:hidden xl:block' src={Wedding3} 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1.4, type: "tween" }}
            alt="wedding photo" />
        </div>
    </div>
  )
}

export default Main