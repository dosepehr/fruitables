import React from "react";
import Image from "next/image";
import Layout from "@/components/modules/Layout/Layout";

const Banner = () => {
  return (
    <div className="mt-10 bg-mainYellow py-10">
      <Layout>
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div>
            <p className="text-6xl font-extrabold text-white">
              Fresh Exotic Fruits
            </p>
            <p className="text-darkGray my-4 text-6xl font-normal">
              in Our Store
            </p>
            <p className="text-darkGray w-4/5">
              The generated Lorem Ipsum is therefore always free from repetition
              injected humour, or non-characteristic words etc.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/banner-1.png"
              width={1000}
              height={1000}
              alt="Banner"
              className="w-full"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Banner;
