import Banner from "@/components/templates/index/Banner";
import HeroSection from "@/components/templates/index/HeroSection";
import Testimonals from "@/components/templates/index/Testimonial";
import Products from "@/components/templates/index/products";
import Services from "@/components/templates/index/services";
import React from "react";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <Products />
      <Banner />
      <Testimonals />
    </>
  );
};

export default Home;
