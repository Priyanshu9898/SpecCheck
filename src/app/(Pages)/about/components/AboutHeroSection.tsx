"use client";

// components/AboutHeroSection.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const AboutHeroSection = () => {
  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 items-start md:items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="md:col-start-1 md:row-start-1"
      >
        <Image
          src="/Images/about1.png"
          alt="First Image"
          width={250}
          height={250}
          className="transform rotate-0"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="flex flex-col items-center justify-center md:col-start-2 md:row-start-2 text-center"
      >
        <h1 className="text-6xl text-gray-800 font-bold">
          Get To{" "}
          <span className="inline-block rounded-lg bg-[#f24e1e] text-white ml-2 px-2">
            Know Us
          </span>
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Learn more about how SpecCheck got started, and meet the team that
          makes the magic happen!
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="md:col-start-3 md:row-start-3 self-end"
      >
        <Image
          src="/Images/about2.png"
          alt="Second Image"
          width={250}
          height={250}
          className="transform rotate-0"
        />
      </motion.div>
    </div>
  );
};

export default AboutHeroSection;
