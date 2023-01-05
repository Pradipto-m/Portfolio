import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";


const Card = ({ thumbnail, title, tech1, tech2, tech3, info }) => {
  return (
    <div className="flex flex-col justify-start items-center h-96 w-[29rem] rounded-2xl bg-[#00012f] mt-11">
      <img src={thumbnail} alt="" className="h-72 w-[29rem] rounded-2xl" />
      <motion.div
        className="flex flex-row justify-center items-center absolute backdrop-blur-md h-72 w-[29rem] rounded-2xl gap-8"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <FaGithub className="scale-[1.6] cursor-pointer hover:text-slate-300" />
        <button className="hover:underline text-lg">Demo</button>
      </motion.div>

      <h1 className="text-2xl font-semibold mt-1">{title}</h1>
      <div className="flex flex-row justify-center items-center gap-8 mt-2">
        <img src={tech1} alt="" className="h-8 w-8" />
        <img src={tech2} alt="" className="h-7 w-7" />
        <img src={tech3} alt="" className="h-6 w-6" />
      </div>
      <motion.div
        className="absolute mt-[18.6rem] w-[28rem] bg-[#00012f]"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <span>{info}</span>
      </motion.div>
    </div>
  );
};

export default Card;
