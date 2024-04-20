"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMail, FiMessageCircle, FiPhone, FiUser } from "react-icons/fi";
import ReCAPTCHA from "react-google-recaptcha";
import SupportSection from "./SupportSection";

const ContactSection = () => {
  function onChange(value: any) {
    console.log("Captcha value:", value);
  }

  const sikeKey: string = process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_KEY || "";

  return (
    <>
      <div className="bg-[#6f56cc] text-white mx-auto px-0 md:px-16 py-20 lg:px-32 overflow-hidden flex flex-col items-center justify-center md:flex-row">
        <div className="flex-1 p-4 w-3/4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Contact{" "}
            <span className="inline-block rounded-lg bg-[#a6c03d] text-white ml-2 px-2">
              US
            </span>
          </h1>
          <p className="mb-4 text-[16px] md:text-[22px] mt-4">
            At SpecCheck, we&apos;re always eager to provide guidance, answer
            any questions, or offer insights related to our platform! Please
            don&apos;t hesitate to reach out, and our dedicated team will get
            back to you as soon as possible.
          </p>
          <hr className="h-1" />
          <h1 className="font-bold text-xl mt-10">Headquarters</h1>
          <div className="mb-4 mt-4">
            2261 Market Street, #5183
            <p>San Francisco, CA 94114</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Social Links</h3>
            <div className="flex mt-4 space-x-4">
              <Link
                href="https://linkedin.com/company/speccheck"
                target="_blank"
              >
                <Image
                  src="/Images/linkdein.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://twitter.com/SpecCheckRx" target="_blank">
                <Image
                  src="/Images/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://www.ycombinator.com/companies/speccheck"
                target="_blank"
              >
                <Image
                  src="/Images/Y_Combinator.png"
                  alt="Y_Combinator"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://www.ycombinator.com/companies/speccheck"
                target="_blank"
              >
                <Image src="/Images/cb.png" alt="cb" width={24} height={24} />
              </Link>

              <Link href="https://www.youtube.com/@SpecCheckRx" target="_blank">
                <Image
                  src="/Images/yt.svg"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 p-4 px-24">
          <div className="w-full  mx-auto bg-white rounded-lg shadow-md p-6">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center border px-4 py-3 border-black rounded-md">
                <FiUser
                  className="text-gray-400 mr-2"
                  style={{ color: "black", fill: "black" }}
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="flex-1  bg-transparent text-gray-700 placeholder-gray-400  focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex items-center border px-4 py-3 border-black rounded-md">
                <FiMail
                  className="text-gray-400 mr-2"
                  style={{ color: "white", fill: "black" }}
                />
                <input
                  type="email"
                  placeholder="Work Email"
                  required
                  className="flex-1 appearance-none bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
                />
              </div>
              <div className="flex items-center border px-4 py-3 border-black rounded-md">
                <FiPhone
                  className="text-gray-400 mr-2"
                  style={{ color: "black", fill: "black" }}
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  required
                  className="flex-1 appearance-none bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
                />
              </div>
              <div className="flex items-start border px-4 py-3 border-black rounded-md">
                <FiMessageCircle
                  className="text-gray-400 mt-1 mr-2"
                  style={{ color: "black", fill: "black" }}
                />
                <textarea
                  placeholder="Message"
                  required
                  className="flex-1 appearance-none bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
                  rows={5}
                />
              </div>
              <ReCAPTCHA sitekey={sikeKey} onChange={onChange} />
              <div className="text-[10px] text-gray-600 my-1">
                By clicking “Submit Now”, you agree to our{" "}
                <Link href="/terms" className="text-blue-500 underline">
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-500 underline">
                  Privacy Policy
                </Link>
                .
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#a6c03d] hover:bg-[#b2c761] text-white font-bold px-4 py-4"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <SupportSection />
    </>
  );
};

export default ContactSection;
