import Image from "next/image";
import React from "react";

const TrustedBy = () => {
  const logos = [
    {
      src: "/Images/TrustedBy/c1.jpg",
      alt: "Company 1",
    },
    {
      src: "/Images/TrustedBy/c2.png",
      alt: "Company 2",
    },
    {
      src: "/Images/TrustedBy/c3.png",
      alt: "Company 3",
    },
    {
      src: "/Images/TrustedBy/c4.svg",
      alt: "Company 4",
    },
    {
      src: "/Images/TrustedBy/c5.png",
      alt: "Company 5",
    },
  ];

  return (
    <div className="py-12 bg-white text-center">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Trusted By</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 px-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex w-[300px] justify-center items-center hover:opacity-75 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                objectFit="contain"
                className="max-w-full aspect-[5/3] max-h-[100px] object-contain align-middle border-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
