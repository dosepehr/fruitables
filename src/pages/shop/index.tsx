import React from "react";
import Breadcrumb from "@/components/modules/Breadcrumb/Breadcrumb";
import Product from "@/components/templates/index/products/components/Product";
import Layout from "@/components/modules/Layout/Layout";
import Image from "next/image";

const index = () => {
  return (
    <>
      <Breadcrumb />
      <Layout>
        <div className="flex flex-col justify-center lg:flex-row lg:space-x-5">
          <div className="lg:w-1/4">
            <p className="text-[2.5rem] font-semibold text-darkGray">
              Fresh fruits shop
            </p>
            <div>
              <Image
                className="mt-4 rounded-lg my-4"
                src="/images/banner-fruits.jpg"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default index;
