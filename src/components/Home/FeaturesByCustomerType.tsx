"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

import { tabs } from "@/constants";
import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image";
import CustomCard from "./CustomCard";

const FeaturesByCustomerType = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="container mx-auto px-4 md:px-16 py-20 lg:px-32 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Ensures animation runs once when component comes into view
      variants={containerVariants}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <motion.h1
          variants={childVariants}
          className="text-4xl rounded-full md:text-[60px] font-bold text-gray-800 mb-4 leading-tight md:leading-snug"
        >
          <span className="inline-block rounded-lg bg-[#a6c03d] text-white ml-2 px-2">
            Features
          </span>
          By Customer Type
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={childVariants}
        >
          <CustomCard
            title="Doctors"
            description="SpecCheck's easy-to-use dashboard allows doctors to seamlessly submit orders, send patient notifications, make payments, view order statuses, and more. All on our free, easy-to-use platform."
            imageUrl="/Images/doctor.png"
            linkUrl="/"
          />
          <CustomCard
            title="Optical Labs"
            description="Easily receive accurate orders, process payments, improve customer service productivity, and reduce your operational costs. Join our growing network of labs and see why our customers love SpecCheck."
            imageUrl="/Images/lens.png"
            linkUrl="/"
          />
          <CustomCard
            title="Enterprise"
            description="Interested in a custom technology solution, payments platform, or integration? Let SpecCheck's team of optical experts and software engineers design a custom solution for your business."
            imageUrl="/Images/rocket.png"
            linkUrl="/"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturesByCustomerType;
