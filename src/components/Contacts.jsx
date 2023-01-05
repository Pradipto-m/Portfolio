import React from 'react'
import { motion } from 'framer-motion'
import spaceman from '../assets/spaceman.png'

const Contacts = () => {
  return (
    <div id='contact' className='flex flex-col lg:flex-row mx-6 lg:mx-28 mt-20 pt-16'>
      {/* left wrap */}
      <div className='flex flex-1 flex-col' >
        <motion.div 
          className='flex flex-row gap-3'
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 130 }
          }}
        >
          {/* head */}
          <h1 className='text-4xl font-head font-medium'>Contact</h1>
          <span className='text-4xl font-head font-medium text-[#ff6a6a]'>me</span>
        </motion.div>
        <motion.div 
          className='flex h-[0.35rem] bg-[#ff6f6f] rounded-md my-2'
          initial={{ width: 0 }}
          whileInView={{
            width: "135px",
            transition: { type: 'tween', duration: 0.6 }
          }}
        />
        {/* head */}

        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type:'tween', duration: 0.8 }}
        >
          <form action="" className='flex flex-col gap-4 mt-11 p-2 lg:p-10 rounded-3xl lg:bg-[#00011b] lg:shadow-neumorphCard'>
            <input type="text" name="username" placeholder="Name" className='rounded-xl lg:hover:rounded-none lg:hover:duration-500 p-[0.4rem] text-[#ff6f6f] font-semibold border-2 border-[#ff6f6f] bg-[#00011f]' />

            <input type="email" name="mailid" placeholder="Email" className='rounded-xl lg:hover:rounded-none lg:hover:duration-500 p-[0.4rem] text-[#ff6f6f] border-2 border-[#ff6f6f] bg-[#00011f]' />

            <textarea name="message" placeholder="Message" rows="5" className='rounded-2xl lg:hover:rounded-none lg:hover:duration-500 p-2 text-[#ff6f6f] border-2 border-[#ff6f6f] bg-[#00011f]' />

            <motion.button
            // type='submit'
            disabled="disabled"
            className='mt-1 font-semibold cursor-pointer btn'
            whileTap={{ scale: 0.8 }}
            >SEND</motion.button>
          </form>
        </motion.div>
      </div>
      {/* left wrap */}

      {/* right wrap */}
      <div className='flex flex-1'>
        <motion.img
        src={spaceman}
        alt=""
        className='scale-[0.4] -my-28 lg:-my-36 lg:ml-11'
        initial={{ scale: 0.4, rotate: 175 }}
        whileInView={{ scale: 0.4, rotate: 5 }}
        transition={{ type:'spring', stiffness: 130,  delay: 1.4 }}
        />
      </div>
    </div>
  )
}

export default Contacts