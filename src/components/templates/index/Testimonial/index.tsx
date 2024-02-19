import Layout from "@/components/modules/Layout/Layout";
import React from "react";
import Slider from "react-slick";
import Testimonal from "./components/Testimonal";

const Testimonals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
    nextArrow: <></>,
    prevArrow: <></>,
  };
  return (
    <Layout>
      <div className="slider-container">
        <div className="my-10 text-center">
          <p className="text-2xl text-lightGreen">Our Testimonial</p>
          <p className="text-5xl font-semibold text-darkGray ">
            Our Client Saying!
          </p>
        </div>
        <Slider {...settings}>
          <Testimonal />
          <Testimonal />
          <Testimonal />
          <Testimonal />
        </Slider>
      </div>
    </Layout>
  );
};

export default Testimonals;
