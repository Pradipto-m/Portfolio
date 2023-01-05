import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";
import { FaGithub } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./projects.css";

import project1 from "../../assets/about04.png";
import project2 from "../../assets/about01.png";
import project3 from "../../assets/musicapp.png";
import project4 from "../../assets/ecommerce.png";

const Mobile = () => {
  return (
    <div id="mobileproject" className="lg:hidden flex flex-col mt-16 ml-6 pt-28">
      {/* head */}
      <motion.div
        className="flex flex-row"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 130 },
        }}
      >
        <h1 className="text-4xl font-head font-medium pr-1">My</h1>
        <h1 className="text-4xl font-head font-medium pl-1 text-[#ff6a6a]">
          Works
        </h1>
      </motion.div>
      <motion.div
        className="flex h-[0.35rem] bg-[#ff6f6f] rounded-md my-2"
        initial={{ width: 0 }}
        whileInView={{
          width: "57px",
          transition: { type: "tween", duration: 0.6 },
        }}
      />
      {/* head */}

      {/* carousel */}
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: false,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col justify-start items-center h-80 w-80 rounded-lg bg-[#000131]">
            <motion.img
              src={project1}
              alt=""
              className="h-[17.5rem] w-80 rounded-lg"
              initial={{ zIndex: 100, opacity: 1 }}
              whileTap={{ zIndex: -100, opacity: 0 }}
            />
            <h1 className="font-semibold text-lg">Project Title</h1>
            <div className="flex flex-col absolute justify-start items-center h-[17rem] w-80 bg-[rgba(0,0,31)] rounded-lg gap-8 pt-8">
              <FaGithub className="scale-[2]" />
              <span className="text-lg px-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo dolorum dignissimos sunt cupiditate expedita, id
                voluptatum, voluptate officiis voluptates blanditiis alias.
              </span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-start items-center h-80 w-80 rounded-lg bg-[#000131]">
            <motion.img
              src={project2}
              alt=""
              className="h-[17.5rem] w-80 rounded-lg"
              initial={{ zIndex: 100, opacity: 1 }}
              whileTap={{ zIndex: -100, opacity: 0 }}
            />
            <h1 className="font-semibold text-lg">Project Title</h1>
            <div className="flex flex-col absolute justify-start items-center h-[17rem] w-80 bg-[rgba(0,0,31)] rounded-lg gap-8 pt-8">
              <FaGithub className="scale-[2]" />
              <span className="text-lg px-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo dolorum dignissimos sunt cupiditate expedita, id
                voluptatum, voluptate officiis voluptates blanditiis alias.
              </span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-start items-center h-80 w-80 rounded-lg bg-[#000131]">
            <motion.img
              src={project3}
              alt=""
              className="h-[17.5rem] w-80 rounded-lg"
              initial={{ zIndex: 100, opacity: 1 }}
              whileTap={{ zIndex: -100, opacity: 0 }}
            />
            <h1 className="font-semibold text-lg">Project Title</h1>
            <div className="flex flex-col absolute justify-start items-center h-[17rem] w-80 bg-[rgba(0,0,31)] rounded-lg gap-8 pt-8">
              <FaGithub className="scale-[2]" />
              <span className="text-lg px-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo dolorum dignissimos sunt cupiditate expedita, id
                voluptatum, voluptate officiis voluptates blanditiis alias.
              </span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-start items-center h-80 w-80 rounded-lg bg-[#000131]">
            <motion.img
              src={project4}
              alt=""
              className="h-[17.5rem] w-80 rounded-lg"
              initial={{ zIndex: 100, opacity: 1 }}
              whileTap={{ zIndex: -100, opacity: 0 }}
            />
            <h1 className="font-semibold text-lg">Project Title</h1>
            <div className="flex flex-col absolute justify-start items-center h-[17rem] w-80 bg-[rgba(0,0,31)] rounded-lg gap-8 pt-8">
              <FaGithub className="scale-[2]" />
              <span className="text-lg px-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo dolorum dignissimos sunt cupiditate expedita, id
                voluptatum, voluptate officiis voluptates blanditiis alias.
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* carousel */}
    </div>
  );
};

export default Mobile;
