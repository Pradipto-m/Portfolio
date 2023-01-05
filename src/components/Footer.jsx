import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/prologo.png";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#000134] lg:bg-[#00012e]">
      <div className="flex flex-row flex-1 items-start">
        <img src={logo} alt="" className="hidden lg:flex scale-[0.32] -ml-24 -mr-48 -my-14" />
        <p className="hidden lg:flex text-3xl mt-10 mr-12">.</p>
        <motion.div whileHover={{ translateY: -6, transition: { yoyo: Infinity } }}>
          <a href="https://www.github.com/Pradipto-m">
            <FaGithub className="hidden lg:flex scale-[1.7] mr-5 mt-14 cursor-pointer hover:text-[#ff6f6f]" />
          </a>
        </motion.div>
        <motion.div whileHover={{ translateY: -6, transition: { yoyo: Infinity } }}>
          <a href="https://www.linkedin.com/in/pradipto-mondal">
            <FaLinkedinIn className="hidden lg:flex scale-[1.7] ml-5 mt-14 cursor-pointer hover:text-[#ff6f6f]" />
          </a>
        </motion.div>
      </div>

      <div className="flex flex-col flex-1 items-center lg:items-end py-3 lg:py-0 lg:mr-28 lg:mt-10">
        <span className="text-xs lg:text-base">&copy; 2022 All Rights Reserved</span>
        <span className="flex flex-row gap-1 text-sm lg:text-lg">
          Developed by
          <p className="text-[#ff6f6f] text-sm lg:text-lg font-semibold lg:hover:animate-color-rotate">Pradipto Mondal</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
