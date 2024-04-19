"use client";

import { motion } from "framer-motion";
import React, { ReactNode, useState } from "react";
import FeatureTab from "./FeatureTab";
import { tabs } from "@/constants";

const Features = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const changeTab = (id: number) => {
    setActiveTab(id);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="container mx-auto px-4 md:px-16 py-20 lg:px-32 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{}}
      variants={containerVariants}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <motion.h1
          variants={containerVariants}
          className="text-4xl rounded-full md:text-[60px] font-bold text-gray-800 mb-4 leading-tight md:leading-snug"
        >
          Our
          <span className="inline-block rounded-lg bg-[#f24e1e] text-white ml-2 px-2">
            Features
          </span>
        </motion.h1>

        <motion.div
          variants={containerVariants}
          className="bg-white border-2 w-full md:w-3/4 mt-8 border-[#727272] shadow-[3px_3px_0px_0_rgba(114,114,114,1)] rounded-[30px] md:rounded-full px-2 py-1 mb-[40px]"
        >
          <div
            className={`flex flex-wrap ${
              tabs.length > 3 ? "flex-col" : "flex-row"
            } md:flex-row space-x-0 md:space-x-0`}
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                variants={containerVariants}
                whileInView="visible"
                viewport={{ once: true }}
                className={`flex-1 py-4 text-sm text-[16px] font-semibold text-center rounded-full 
                           ${
                             tab.id === activeTab
                               ? "bg-[#f24e1e] text-white"
                               : "bg-white text-gray-800"
                           }`}
                onClick={() => changeTab(tab.id)}
              >
                {tab.title}
              </motion.button>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Features;
