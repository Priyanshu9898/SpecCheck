"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";

const supportItems = [
  {
    id: 1,
    title: "Support Articles",
    description: "View More",
    icon: "/Images/box.svg",
    href: "https://support.speccheckrx.com/en/",
    backgroundColor: "bg-purple-500",
  },
  {
    id: 2,
    title: "Video Walkthroughs",
    description: "View More",
    icon: "/Images/starr.svg",
    href: "https://www.youtube.com/@SpecCheckRx",
    backgroundColor: "bg-green-500",
  },
  {
    id: 3,
    title: "Blog Posts",
    description: "View More",
    icon: "/Images/square.svg",
    href: "/blog",
    backgroundColor: "bg-red-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const SupportSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h3
          className="text-5xl font-bold my-2 mt-20"
          variants={itemVariants}
        >
          Get Support
        </motion.h3>
        <motion.p variants={itemVariants}>
          We&apos;re here to help you. Explore the articles and resources below,
          or use the form above to contact us directly.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
          {supportItems.map((item) => (
            <motion.a
              key={item.id}
              href={item.href}
              className={`${item.backgroundColor} rounded-xl p-4 px-10 shadow-lg flex flex-col items-start justify-center`}
              variants={itemVariants}
            >
              <div className="flex flex-row items-center w-full justify-between">
                <div className="mt-4 text-4xl text-white font-bold">
                  {item.title}
                </div>
                <div>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={32}
                    height={32}
                  />
                </div>
              </div>
              <Link
                href={""}
                className="flex items-left mt-32 text-white hover:text-blue-800 transition-colors group"
              >
                <span className="mr-2 text-white font-semibold group-hover:rotate-0">
                  Learn More
                </span>
                <BsArrowRightCircleFill
                  className="-rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-0"
                  size={25}
                />
              </Link>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SupportSection;
