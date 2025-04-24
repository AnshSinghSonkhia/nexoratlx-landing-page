"use client";

import { motion } from "motion/react";
import AvatarGroup from '@/components/AvatarGroup';
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
// import { BackgroundLines } from "@/components/ui/background-lines";
// import { HoverBorderGradient } from "../ui/hover-border-gradient";
// import { ButtonMoving } from "../ui/moving-border";

export function HeroSectionOne() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <Navbar />
      <Spotlight />
      <div className="px-4 py-10 md:py-20">
      
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-[#0A0A0A] md:text-4xl lg:text-7xl ">
          {"Shaping the Future, One Student at a Time"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          With Nexora TLX, students don’t just learn—they build, innovate, and lead. Dive into hands-on STEAM experiences powered by real-world tech, global mentors, and future-ready skills.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-60 transform rounded-lg bg-[#0A0A0A] px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-[#0A0A0A] dark:hover:bg-gray-200">
            Explore Programs
          </button>
          <button className="w-60 transform rounded-lg bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Testimonials
          </button>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className="relative z-10 mt-8 p-0"
        >   
            <AvatarGroup />
        </motion.div>
        <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, delay: 1.2 }}
  className="relative z-10 mt-20 p-0"
>
    
  <div className="w-full overflow-hidden rounded-md">
    <img
      src="/heroimage.png"
      alt="Nexora students building robots"
      className="aspect-[16/9] h-auto w-full object-cover"
      height={1000}
      width={1000}
    />
  </div>
</motion.div>
      </div>
    </div>
  );
}

const Navbar = () => {
    return (
      <nav className="flex w-full items-center justify-between px-4 py-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          {/* <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" /> */}
        <img
            src="/bglessLogo.png"
            alt="Nexora TLX Logo"
            className="h-10 object-contain"
        />
          <h1 className="text-base font-bold md:text-2xl">Nexora TLX</h1>
        </div>
  
        {/* Middle: Navigation Links */}
        <div className="hidden gap-8 md:flex">
          {["Courses", "Solutions", "Blog", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
  
        {/* Right: Button */}
        <button className="w-24 transform rounded-lg bg-[#0A0A0A] px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
          Contact us
        </button>

        {/* <ButtonMoving
        borderRadius="0.25rem"
        containerClassName="w-24 transform rounded-lg bg-[#0A0A0A] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        className="py-8"
      >
        Contact us
      </ButtonMoving> */}

        {/* <HoverBorderGradient
        containerClassName="w-24 transform rounded-full bg-[#0A0A0A]  font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        as="button"
        className=""
      >
        <span>Contact us</span>
      </HoverBorderGradient> */}
      </nav>
    );
  };
  
