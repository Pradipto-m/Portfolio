import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import Card from './Card';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./projects.css";

import project1 from "../../assets/about04.png";
import project2 from "../../assets/about01.png";
import project3 from "../../assets/musicapp.png";
import project4 from "../../assets/ecommerce.png";
import react from "../../assets/react.svg";
import flutter from "../../assets/flutter.svg";
import kotlin from "../../assets/kotlin.svg";

const Projects = () => {
  return (
    <div id="projects" className="hidden lg:flex lg:flex-col mx-28 mt-16 pt-16">
      {/* head */}
      <motion.div
        className="flex flex-row -z-10"
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
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card
            thumbnail={project1}
            title={'Project Title'}
            tech1={react}
            tech2={flutter}
            tech3={kotlin}
            info={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cor rupti temporibus veritatis consectetur dolores ipsa similique tenetur ab placeat voluptates doloribus.'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            thumbnail={project2}
            title={'Project Title'}
            tech1={react}
            tech2={flutter}
            tech3={kotlin}
            info={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cor rupti temporibus veritatis consectetur dolores ipsa similique tenetur ab placeat voluptates doloribus.'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            thumbnail={project3}
            title={'Project Title'}
            tech1={react}
            tech2={flutter}
            tech3={kotlin}
            info={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cor rupti temporibus veritatis consectetur dolores ipsa similique tenetur ab placeat voluptates doloribus.'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            thumbnail={project4}
            title={'Project Title'}
            tech1={react}
            tech2={flutter}
            tech3={kotlin}
            info={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cor rupti temporibus veritatis consectetur dolores ipsa similique tenetur ab placeat voluptates doloribus.'}
          />
        </SwiperSlide>
      </Swiper>
      {/* carousel */}
    </div>
  );
};

export default Projects;
