import React from 'react';
import { motion } from "framer-motion";
import header from '../assets/header.png';

const Header = () => {
  return (
    <div id='home' className='flex flex-col lg:flex-row lg:mx-28'>
        {/* left intro */}
        <motion.div 
          className='flex flex-1 flex-col ml-6 lg:ml-0 lg:items-start mt-32 lg:mt-52'
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'tween', duration: 1.1 }}
          >
            <h1 className='text-3xl lg:text-[2.5rem] font-semibold text-[#ff6f6f]'>Hi, I am</h1>
            <h1 className='hidden lg:flex font-name text-[3.5rem] py-3'>Pradipto Mondal.</h1>
            {/* for mobile screens */}
            <h1 className='lg:hidden font-name text-[3.3rem] -mb-1 pt-4'>Pradipto</h1>
            <h1 className='lg:hidden font-name text-[3.3rem] -mt-1 pb-4'>Mondal.</h1>

            <ul className='typing h-8 lg:h-9 w-72 lg:w-80'>
              <li className='relative'><span className='relative text-2xl lg:text-[2rem] text-gray-300'>Android Developer</span></li>
              <li className='relative mt-2'><span className='relative text-2xl lg:text-[2rem] text-gray-300'>Java | Kotlin | Flutter</span></li>
            </ul>
        </motion.div>
        
        {/* right header wrap */}
        <motion.div 
          className='flex flex-1'
          initial={{ scale: 0.65, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'tween', duration: 1.1 }}
          >
          <img src={header} alt="" className='scale-75 lg:scale-[0.85] relative top-7 lg:top-24 lg:left-12' />
        </motion.div>
    </div>
  )
}

export default Header