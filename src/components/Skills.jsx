import React from 'react';
import { motion } from 'framer-motion';
import android from '../assets/android.svg'
import kotlin from '../assets/kotlin.svg'
import flutter from '../assets/flutter.svg'
import react from '../assets/react.svg'

const Skills = () => {
  return (
    <div id='skills' className='flex flex-col lg:flex-row mx-6 lg:mx-28 mt-8 pt-16'>
      {/* left wrap */}
      <div className='flex flex-1 flex-col'>
        <motion.div 
          className='flex flex-row gap-1 -z-10'
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 130 }
          }}
          >
          {/* head */}
          <h1 className='text-4xl font-head font-medium'>My Tech</h1>
          <h1 className='text-4xl font-head font-medium text-[#ff6a6a]'>Stack</h1>
        </motion.div>
        <motion.div 
          className='flex h-[0.35rem] bg-[#ff6f6f] rounded-md my-2'
          initial={{ width: 0 }}
          whileInView={{
            width: "135px",
            transition: { type: 'tween', duration: 0.6 }
          }}
        />

        {/* skills track */}
        <div className='flex flex-col mt-10'>
          <div className='absolute h-3 w-3 rounded-md mt-1 bg-red-400'/>
          <div className='absolute h-3 w-3 rounded-md mt-[10.8rem] lg:mt-32 bg-red-400'/>
          <div className='absolute h-3 w-3 rounded-md mt-[21.4rem] lg:mt-64 bg-red-400'/>

          {/* small screen animation */}
          <motion.div
            className='lg:hidden absolute w-1 ml-1 mt-1 rounded-lg bg-red-400'
            initial={{ height: "0rem" }}
            whileInView={{ height: "22rem" }}
            transition={{ type:'tween', duration: 1.9 }}
          />
          {/* large screen animation */}
          <motion.div
            className='hidden lg:flex lg:absolute lg:w-1 lg:ml-1 lg:mt-1 lg:rounded-lg lg:bg-red-400'
            initial={{ height: "0rem" }}
            whileInView={{ height: "16.6rem" }}
            transition={{ type:'tween', duration: 2 }}
          />

          <motion.span className='flex flex-row gap-2 ml-6' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <p className='font-bold text-[#ff6f6f]'>Kotlin:</p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus delectus neque officiis molestias alias assumenda, sequi, dolore minus labore.
          </motion.span>
          <motion.span className='flex flex-row gap-2 ml-6 mt-[3.3rem]' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }}>
            <p className='font-bold text-[#ff6f6f]'>Flutter:</p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus delectus neque officiis molestias alias assumenda, sequi, dolore minus labore.
          </motion.span>
          <motion.span className='flex flex-row gap-2 ml-6 mt-[3.3rem]' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5 }}>
            <p className='font-bold text-[#ff6f6f]'>React:</p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus delectus neque officiis molestias alias assumenda, sequi, dolore minus labore.
          </motion.span>
        </div>
      </div>
      {/* left wrap */}

      {/* right wrap */}
      <div className='hidden lg:flex lg:flex-1 items-center justify-center'>
        <motion.div
        className='relative h-72 w-72 ml-24 mt-16 rounded-full bg-[#000121] shadow-neumorphCircle'
        initial={{ rotate: 125 }}
        whileInView={{ rotate: 360 }}
        transition={{ type:'tween', duration: 4 }}
        >
          <img src={android} alt="" className='absolute scale-75 -mt-24' />
          <img src={kotlin} alt="" className='absolute scale-[0.3] ml-36 mt-2' />
          <img src={flutter} alt="" className='absolute scale-[0.3] -ml-28 -mt-3' />
          <img src={react} alt="" className='absolute scale-[0.4] mt-36 ml-6' />
        </motion.div>
      </div>
      {/* right wrap */}

      {/* right wrap for mobile screens */}
      <div className='lg:hidden flex flex-1 items-center justify-center'>
        <motion.div
        className='relative h-60 w-60 mt-24 rounded-full bg-[#00012a] shadow-circleMobile'
        initial={{ rotate: 225 }}
        whileInView={{ rotate: 360 }}
        transition={{ type:'tween', duration: 3 }}
        >
          <img src={android} alt="" className='absolute scale-[0.7] -mt-16' />
          <img src={kotlin} alt="" className='absolute scale-[0.25] ml-24 mt-1' />
          <img src={flutter} alt="" className='absolute scale-[0.25] -ml-24 -mt-5' />
          <img src={react} alt="" className='absolute scale-[0.34] mt-24 ml-1' />
        </motion.div>
      </div>
      {/* right wrap for mobile screens */}
    </div>
  )
}

export default Skills