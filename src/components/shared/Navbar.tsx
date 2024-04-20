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
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (currPage: string) => pathname === currPage;

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
          <Link
            href="/"
            className={`hover-link ${isActive("/") ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover-link ${isActive("/about") ? "active" : ""}`}
          >
            About
          </Link>
          {/* <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link> */}
          <Link
            href="/contact"
            className={`hover-link ${isActive("/contact") ? "active" : ""}`}
          >
            Contact
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
          <Link href="/login">
            <button className=" px-4 py-2 rounded-full tracking-widest text-white bg-[#6f56cc] hover:bg-[#5d48a9] hover:border-[#5d48a9] border-[3px] border-[#6f56cc] hover:text-white dark:text-neutral-200 transition duration-200">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
