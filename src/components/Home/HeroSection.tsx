"use client";

// components/HeroSection.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const HeroSection = () => {
  const rotateVariants = {
    animate: {
      rotateZ: [0, 10, -10, 0],
      transition: { repeat: Infinity, duration: 5, ease: "linear" },
    },
  };

  return (
    <div className="container mx-auto px-4 md:px-16 py-20 lg:px-40 overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center">
        {/* <div className="overflow-hidden w-full absolute justify-between block">
          <motion.div className="left-50 top-52 flex justify-between w-full overflow-hidden">
            <motion.img
              src="/Images/img1.png"
              alt="Cloud Computing"
              variants={rotateVariants}
              animate="animate"
              className="w-14 h-14"
            />
          </motion.div>
          <motion.div className="  top-52 flex justify-between w-full overflow-hidden">
            <motion.img
              src="/Images/img4.png"
              alt="Optometry"
              variants={rotateVariants}
              animate="animate"
              className="w-14 h-14"
            />
          </motion.div>
        </div> */}

        <motion.h1
          initial={{ opacity: 0, y: 50 }} // Animation from the bottom to top
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl rounded-full md:text-[60px] font-bold text-gray-800 mb-4 leading-tight md:leading-snug"
        >
          <span className="inline-block rounded-lg bg-[#6f56cc] text-white px-2 ">
            Innovative Software
          </span>{" "}
          For The Optical Industry
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-lg md:text-xl max-w-3xl"
        >
          Revolutionizing the way doctors, optical labs, and their technology
          partners work together and do business.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8"
        >
          <a
            href="#learnmore"
            className="bg-[#6f56cc] rounded-full hover:bg-purple-700 text-white font-bold py-2 px-2 inline-flex items-center"
          >
            <div className="rounded-full bg-white px-2 py-2">
              <Image
                src="/Images/learnMore.png"
                alt="Learn More"
                width={24}
                height={24}
              />
            </div>
            <span className="ml-2 px-4">Learn More</span>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-3 w-full flex flex-row justify-center items-center"
        >
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg md:text-xl max-w-3xl text-[#757575] w-full flex flex-row justify-center items-center"
            href="https://www.speccheckrx.com/blog/y-combinator-launch"
          >
            Backed By
            <Image
              src="/Images/Ycombinator.png"
              width={20}
              height={20}
              alt="Ycombinator"
              className="mx-2"
            />
            Combinator
            <BsArrowRight className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
