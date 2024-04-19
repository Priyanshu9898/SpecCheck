"use client";

import { motion } from "framer-motion";
import React, { ReactNode, useState, useTransition } from "react";
interface Tab {
  id: number;
  title: string;
  content: ReactNode;
}
const Features = () => {
  const tabs: Tab[] = [
    {
      id: 0,
      title: "All-In-One Dashboard",
      content: <p>Content for Dashboard</p>,
    },
    { id: 1, title: "Lab Pay", content: <p>Content for Lab Pay</p> },
    { id: 2, title: "Order Entry", content: <p>Content for Order Entry</p> },
    { id: 3, title: "Lab Live Chat", content: <p>Content for Live Chat</p> },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [isPending, startTransition] = useTransition();

  const changeTab = (id: number) => {
    startTransition(() => {
      setActiveTab(id);
    });
  };

  return (
    <div className="container mx-auto px-4 md:px-16 py-20 lg:px-40 overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl rounded-full md:text-[60px] font-bold text-gray-800 mb-4 leading-tight md:leading-snug"
        >
          Our
          <span className="inline-block rounded-lg bg-[#f24e1e] text-white ml-2 px-2 ">
            Features
          </span>{" "}
        </motion.h1>

        <div className="bg-white border-2 w-full md:w-3/4 mt-10 border-[#727272] shadow-[3px_3px_0px_0_rgba(114,114,114,1)]  rounded-[30px] md:rounded-full px-2 py-1 mb-[80px]">
          <div
            className={`flex flex-wrap ${
              tabs.length > 3 ? "flex-col" : "flex-row"
            } md:flex-row space-x-0 md:space-x-0`}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex-1 py-4 text-sm text-[16px] font-semibold text-center rounded-full 
                       ${
                         tab.id === activeTab
                           ? "bg-[#f24e1e] text-white"
                           : "bg-white text-gray-800"
                       }`}
                onClick={() => changeTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4">
          {isPending ? (
            <p>Loading...</p>
          ) : (
            tabs.find((tab) => tab.id === activeTab)?.content
          )}
        </div>
      </div>
    </div>
  );
};

export default Features;
