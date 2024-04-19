import { FeatureTabProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";

const FeatureTab: React.FC<FeatureTabProps> = ({
  title,
  description1,
  description2,
  header1,
  header2,
  imageUrl,
  linkUrl,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-x-10 my-8">
      <div className="w-full md:w-[42%] p-2 md:p-6 text-left">
        <h3 className="text-3xl md:text-5xl font-bold mb-4 leading-[-1]">
          {title}
        </h3>
        <div className="mt-10">
          <div className="flex flex-row items-center justify-start">
            <Image
              src="/Images/arrow.svg"
              alt="=>"
              width={25}
              height={25}
              className="mr-4"
            />
            <h3 className="text-2xl font-semibold">{header1}</h3>
          </div>
          <p className="text-md mt-4 leading-relaxed mb-4">{description1}</p>
          <hr className="my-4 h-1" />
          <div className="flex flex-row items-center justify-start">
            <Image
              src="/Images/arrow.svg"
              alt="=>"
              width={25}
              height={25}
              className="mr-4"
            />
            <h3 className="text-2xl font-semibold">{header2}</h3>
          </div>
          <p className="text-md mt-4  leading-relaxed mb-4">{description2}</p>
        </div>
        <Link
          href={linkUrl}
          className="flex items-center mt-4 text-black hover:text-blue-800 transition-colors group"
        >
          <span className="mr-2 text-black font-semibold group-hover:rotate-0">
            Learn More
          </span>
          <BsArrowRightCircleFill
            className="-rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-0"
            size={25}
          />
        </Link>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src={imageUrl}
          alt="Feature image"
          layout="responsive"
          width={1980}
          height={1200}
          priority
        />
      </div>
    </div>
  );
};

export default FeatureTab;
