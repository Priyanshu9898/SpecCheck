// components/CustomCard.tsx
import { CustomCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  imageUrl,
  linkUrl,
}) => {
  return (
    <div className="relative rounded-[12px] border-[#050038] h-auto max-w-[360px] mx-auto mt-10 bg-[#a6c03d]">
      <div className="p-4 text-left border-2 px-[50px] py-[40px] rounded-[12px] border-[#050038] bg-white transition duration-300 transform hover:-translate-x-3 hover:-translate-y-3">
        <Image
          src={imageUrl}
          width={100}
          height={100}
          alt="Doctor"
          className="w-24 h-24 mb-4"
        />
        <h3 className="text-lg font-semibold text-left text-[32px]">{title}</h3>
        <p className="text-sm text-gray-600 text-left mb-4 mt-4">
          {description}
        </p>
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
    </div>
  );
};

export default CustomCard;
