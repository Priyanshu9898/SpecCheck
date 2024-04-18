"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/Images/logoImg.png"
              alt="Logo"
              width={200}
              height={50}
              className=" object-cover"
            />
          </Link>
        </div>

        {/* Links Section */}
        <div
          className={`md:flex space-x-4 items-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link href="/home" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
        </div>

        {/* Auth Buttons */}
        <div
          className={`md:flex space-x-4 items-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link href="/register">
            <button className=" px-4 py-2 rounded-full tracking-widest text-[#6f56cc] bg-transparent hover:bg-[#6f56cc] border-[3px] border-[#6f56cc] hover:text-white dark:text-neutral-200 transition duration-200">
              Sign up
            </button>
          </Link>
          <Link href={"/login"}>
            <button className=" px-4 py-2 rounded-full tracking-widest text-white bg-transparent bg-[#6f56cc] hover:bg-[#5d48a9] hover:border-[#5d48a9] border-[3px] border-[#6f56cc] hover:text-white dark:text-neutral-200 transition duration-200">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
