import React from 'react';
import { motion } from 'framer-motion';
import { IoDocumentTextOutline } from 'react-icons/io5';
import about from '../assets/about.png';
import mobile from '../assets/mobile.png';
import component1 from '../assets/component1.png';
import component2 from '../assets/component2.png';

const About = () => {
  return (
    <div id='about' className='flex flex-col lg:flex-row mt-9 lg:mt-12 pt-2 mx-6 lg:mx-28'>
      <div className='flex flex-1 flex-col pt-10 lg:pt-36'>
      {/* left wrap */}
        <motion.div 
          className='flex flex-row -z-10'
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 130 }
          }}
          >
          {/* head */}
          <h1 className='text-4xl font-head font-medium pr-1'>About</h1>
          <h1 className='text-4xl font-head font-medium pl-1 text-[#ff6a6a]'>me</h1>
        </motion.div>
        <motion.div 
          className='flex h-[0.35rem] bg-[#ff6f6f] rounded-md my-2'
          initial={{ width: 0 }}
          whileInView={{
            width: "110px",
            transition: { type: 'tween', duration: 0.6 }
          }}
        />

        <motion.span
          className='flex mt-6 text-gray-300'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: 'tween', duration: 0.6 }
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, amet. Sequi perferendis totam ducimus sed facere quis at deserunt? Officiis provident, possimus perferendis vel veniam dolorem voluptatum repellendus beatae reiciendis?
          <br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, quod nobis dolorum architecto placeat eveniet praesentium expedita non quaerat autem.
        </motion.span>
        
        {/* <a href='/myResume.pdf' download={true} > */}
          <motion.button
            className='CvBtn relative flex flex-row h-10 w-36 mt-8'
            whileTap={{ scale: 0.7 }}
          >
            <IoDocumentTextOutline className='scale-150 m-3' />
            <span className='font-semibold lg:text-[#ff6f6f] lg:hover:text-white lg:hover:duration-300 p-2'>My Resume</span>
          </motion.button>
        {/* </a> */}
      </div>
      {/* left wrap */}

      {/* right wrap for large screens */}
      <div className='hidden lg:flex lg:flex-1 lg:mt-8 lg:-z-10'>
        <motion.img
          src={about}
          alt=""
          className='relative left-8'
          initial={{ scale: 0.5 }}
          whileInView={{
            scale: 0.75,
            transition: { type: 'spring', stiffness: 200 }
          }}
        />
        <motion.img
          src={component1}
          alt=""
          className='absolute scale-[0.4] ml-72 mt-14'
          animate={{ scale: [0.4,0.4], x: [0,-20] }}
          transition={{ yoyo: Infinity }}
        />
        <motion.img
          src={component2}
          alt=""
          className='absolute scale-[0.14] -ml-60 mt-[5.8rem]'
          animate={{ scale: [0.14,0.14], x: [-15,5] }}
          transition={{ yoyo: Infinity }}
        />
      </div>

      {/* right wrap for small screens */}
      <div>
        <motion.img
          src={mobile}
          alt=""
          className='lg:hidden flex flex-1 relative -z-10 mt-5'
          initial={{ scale: 0.7 }}
          whileInView={{
            scale: 1,
            transition: { type: 'spring', stiffness: 250 }
          }}
        />
      </div>
    </div>
  )
}

export default About