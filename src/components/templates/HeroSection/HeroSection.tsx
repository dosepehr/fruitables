import React from "react";
import SearchBox from "./components/SearchBox";
import HeroSlider from "./components/HeroSlider";

const HeroSection = () => {
  return (
    <div className="bg-[url('/images/hero-img.jpg')] bg-cover bg-center bg-no-repeat py-12">
      <div className="myContainer flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-7/12 pr-12">
          <h2 className="text-2xl font-medium text-mainYellow">
            100% Organic Foods
          </h2>
          <h1 className="text-[4rem] font-black text-lightGreen">
            Organic Veggies & Fruits Foods
          </h1>
          <SearchBox />
              </div>
              <div className="w-full md:w-5/12">
                  <HeroSlider/>
              </div>
      </div>
    </div>
  );
};

export default HeroSection;
