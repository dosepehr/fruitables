import React from "react";
import SearchBox from "./components/SearchBox";
import HeroSlider from "./components/HeroSlider";
import Layout from "@/components/modules/Layout/Layout";

const HeroSection = () => {
  return (
    <div className="bg-[url('/images/hero-img.jpg')] bg-cover bg-center bg-no-repeat py-12">
      <Layout classname="flex flex-col items-center justify-between md:flex-row">
        <div className="w-full pr-12 md:w-7/12">
          <h2 className="text-2xl font-medium text-mainYellow">
            100% Organic Foods
          </h2>
          <h1 className="text-[4rem] font-black text-lightGreen">
            Organic Veggies & Fruits Foods
          </h1>
          <SearchBox />
        </div>
        <div className="mt-4 w-full px-6 md:mt-0 md:w-5/12">
          <HeroSlider />
        </div>
      </Layout>
    </div>
  );
};

export default HeroSection;
