"use client";

import { motion } from "framer-motion";
import React, { ReactNode, useState } from "react";
import FeatureTab from "./FeatureTab";

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
      content: (
        <FeatureTab
          title="Everything opticians need, in one place."
          header1="Order Management"
          header2="Lab Communication"
          description1="View all glasses orders and live statuses with your lab partners in one place. Send your lab partners orders with our easy-to-use order creation tool."
          description2="SpecCheck's full suite of products are optimized across all devices. Access our dashboard from anywhere with an internet connection, with no downloads or installs required."
          imageUrl="/Images/feature-image.png"
          linkUrl="/live-chat"
        />
      ),
    },
    {
      id: 1,
      title: "Lab Pay",
      content: (
        <FeatureTab
          title="Automatic billing."
          header1="Online Billing Portal"
          header2="Fully Integrated Solution"
          description1="Facilitate easy and secure payments between eye care professionals and their lab partners. Digitally access all historical lab statements, individual job invoices, and more."
          description2="SpecCheck's billing product is fully integrated with the lab's LMS, saving your finance team valuable time by automatically posting and reconciling accounts receivable."
          imageUrl="/Images/labPay.png"
          linkUrl="/live-chat"
        />
      ),
    },
    {
      id: 2,
      title: "Order Entry",
      content: (
        <FeatureTab
          title="Fast and accurate order entry."
          header1="Easy-to-use Platform"
          header2="Lowest Redo Rate"
          description1="Our platform is thoughtfully crafted to cater to both seasoned and novice opticians. Every feature ensures a smooth and efficient user experience."
          description2="We take pride in our industry-leading data accuracy! Our platform has the lowest redo rate of any order entry platform."
          imageUrl="/Images/orderEntry.png"
          linkUrl="/live-chat"
        />
      ),
    },
    {
      id: 3,
      title: "Lab Live Chat",
      content: (
        <FeatureTab
          title="Immediate lab live chat support."
          header1="Reduces Call Volume"
          header2="Seamlessly Integrated"
          description1="Experience real-time support with our Live Chat! Opticians can now swiftly connect with lab customer service agents, eliminating tedious hold times on calls. Resolve issues faster and enjoy chat history that's stored forever."
          description2="Lab Live Chat is built into every page of SpecCheck's platform, making it easy for opticians to get fast support from anywhere."
          imageUrl="/Images/chat.png"
          linkUrl="/live-chat"
        />
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const changeTab = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div className="container mx-auto px-4 md:px-16 py-20 lg:px-32 overflow-hidden">
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
          </span>
        </motion.h1>

        <div className="bg-white border-2 w-full md:w-3/4 mt-8 border-[#727272] shadow-[3px_3px_0px_0_rgba(114,114,114,1)] rounded-[30px] md:rounded-full px-2 py-1 mb-[40px]">
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
        <div className="mt-0">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
};

export default Features;
