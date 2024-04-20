import Features from "@/components/Home/Features";
import FeaturesByCustomerType from "@/components/Home/FeaturesByCustomerType";
import HeroSection from "@/components/Home/HeroSection";
import TrustedBy from "@/components/Home/TrustedBy";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <Features />
      <FeaturesByCustomerType />
    </>
  );
};

export default page;
