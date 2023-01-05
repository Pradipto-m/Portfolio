import { React, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";
import Logo from "../assets/prologo.png";

const variants = {
  open: { opacity: 1, x: 0 },
  close: { opacity: 0, x: "-100%" },
}

const Navbar = () => {

  const [opened, setOpened] = useState(false);
  const handleClick = () => setOpened(!opened);

  return (
    <div className="fixed w-full h-12 lg:h-14 px-4 lg:px-24 flex flex-row items-center justify-between backdrop-blur-md z-50">
      {/* left wrap */}
      <div className="flex h-11 lg:h-[3.4rem]">
        <img src={Logo} alt="" />
        <p className="relative top-1 lg:top-2 lg:font-extrabold">.</p>
      </div>

      {/* right menu */}
      <div className="lg:flex">

        <motion.ul 
          className="hidden lg:flex lg:flex-1 lg:cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'tween', duration: 0.6 }}
          >
          <motion.li 
            className="px-5 hover:text-[#ff6a6a]"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
            >
            <Link to="home" smooth={true} duration={500} >
              Home
            </Link>
          </motion.li>
          <motion.li 
            className="px-5 hover:text-[#ff6a6a]"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
            >
            <Link to="about" smooth={true} duration={500} >
              About
            </Link>
          </motion.li>
          <motion.li 
            className="px-5 hover:text-[#ff6a6a]"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
            >
            <Link to="skills" smooth={true} duration={500} >
              Skills
            </Link>
          </motion.li>
          <motion.li 
            className="px-5 hover:text-[#ff6a6a]"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
            >
            <Link to="projects" smooth={true} duration={500} >
              Projects
            </Link>
          </motion.li>
          <motion.li 
            className="px-5 mr-8 text-[#ff6a6a] hover:font-semibold"
            whileHover={{ 
              scale: 1.08,
              transition: { yoyo: Infinity }
            }}
            >
            <Link to="contact" smooth={true} duration={500} >
              Hire me
            </Link>
          </motion.li>
          <a href="https://www.linkedin.com/in/pradipto-mondal">
            <IoLogoLinkedin className="scale-150 ml-8 mx-5 hover:fill-[#ff6f6f] hover:scale-[1.65] hover:duration-500" />
          </a>
          <a href="https://www.github.com/Pradipto-m">
            <IoLogoGithub className="scale-150 mx-5 hover:fill-[#ff6f6f] hover:scale-[1.65] hover:duration-500" />
          </a>
          <a href="mailto:prostyles.096@gmail.com">
            <IoMail className="scale-150 mx-5 hover:fill-[#ff6f6f] hover:scale-[1.65] hover:duration-500" />
          </a>
        </motion.ul>

        {/* mobile menu */}
        <div onClick={handleClick} className="flex flex-1 pr-1 lg:hidden">
          { !opened ? <HiMenuAlt4 className="fill-[#ff6f6f] scale-150"/> : <HiX className="fill-[#ff6f6f] scale-150"/> }
        </div>
        <motion.nav
          animate={opened ? "open" : "close"}
          variants={variants}
        >
          <ul className={ !opened ? 'hidden' : 'absolute w-screen h-screen flex flex-col justify-center items-center -right-2 top-2 bg-[rgba(0,1,31,0.92)] z-[999]' } >
            <li className="text-3xl pb-6 -mt-14">
              <Link onClick={handleClick} to="home" smooth={true} duration={600} >
                Home
              </Link>
            </li>
            <li className="text-3xl py-6">
              <Link onClick={handleClick} to="about" smooth={true} duration={600} >
                About
              </Link>
            </li>
            <li className="text-3xl py-6">
              <Link onClick={handleClick} to="skills" smooth={true} duration={600} >
                Skills
              </Link>
            </li>
            <li className="text-3xl py-6">
              <Link onClick={handleClick} to="mobileproject" smooth={true} duration={600} >
                Projects
              </Link>
            </li>
            <li className="text-3xl py-6">
              <Link onClick={handleClick} to="contact" smooth={true} duration={600} >
                Contact me
              </Link>
            </li>
            <ul className="flex flex-row mt-8">
              <li className="flex scale-[2.5] mx-7">
                <a href="https://www.linkedin.com/in/pradipto-mondal">
                  <IoLogoLinkedin className="fill-[#ff6f6f]" />
                </a>
              </li>
              <li className="flex scale-[2.5] mx-6">
                <a href="https://www.github.com/Pradipto-m">
                  <IoLogoGithub className="fill-[#ff6f6f]" />
                </a>
              </li>
              <li className="flex scale-[2.5] mx-7">
                <a href="mailto:prostyles.096@gmail.com">
                  <IoMail className="fill-[#ff6f6f]" />
                </a>
              </li>
            </ul>
          </ul>
        </motion.nav>
        {/* right menu */}
      </div>
    </div>
  );
};

export default Navbar;
