import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const Experience = () => {
  return (
    <motion.div
    className="flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-32 mt-16 pt-16"
    initial={{ opacity: 0, x: -25 }}
    whileInView={{ opacity: 1, x: 0, transition:{ type: 'tween', duration: 0.8 } }}
    >
      <div class="circular">
        <div class="inner"></div>
        <div class="outer"></div>
        <div className="flex flex-col absolute items-center info">
          <h1 className="font-head text-3xl font-bold">XYZ</h1>
          <span className="text-sm mt-1">Hackathon</span>
          <span className="text-sm">Winner</span>
        </div>
        <div class="circle">
          <div class="bar left">
            <div class="progress"></div>
          </div>
          <div class="bar right">
            <div class="progress"></div>
          </div>
        </div>
      </div>

      <div class="circular">
        <div class="inner"></div>
        <div class="outer"></div>
        <div className="flex flex-col absolute items-center info">
          <h1 className="font-head text-4xl font-bold">2</h1>
          <span className="text-sm mt-1">Years of</span>
          <span className="text-sm">Experience</span>
        </div>
        <div class="circle">
          <div class="bar left">
            <div class="progress"></div>
          </div>
          <div class="bar right">
            <div class="progress"></div>
          </div>
        </div>
      </div>

      <div class="circular">
        <div class="inner"></div>
        <div class="outer"></div>

        <div className="flex flex-col absolute items-center info">
          <h1 className="font-head text-4xl font-bold">10</h1>
          <span className="text-sm mt-1">Projects</span>
          <span className="text-sm">Completed</span>
        </div>

        <div class="circle">
          <div class="bar left">
            <div class="progress"></div>
          </div>
          <div class="bar right">
            <div class="progress"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
