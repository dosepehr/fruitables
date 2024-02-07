import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        navigation={true}
        loop
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <Image
            src="/images/heroSlider/hero-img-1.png"
            width={2000}
            height={2000}
            alt="fruits"
            className="rounded-lg bg-mainYellow"
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <Image
            src="/images/heroSlider/hero-img-2.jpg"
            width={2000}
            height={2000}
            alt="vegetables"
            className="rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
