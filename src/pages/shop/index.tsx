import React from "react";
import Breadcrumb from "@/components/modules/Breadcrumb/Breadcrumb";
import Product from "@/components/templates/index/products/components/Product";
import Layout from "@/components/modules/Layout/Layout";

const index = () => {
  return (
    <>
      <Breadcrumb />
      <Layout>
        <div className="flex justify-center">
          <div className="w-1/3">
            <p className="text-[2.5rem] font-semibold text-darkGray">
              Fresh fruits shop
            </p>
            <div></div>
          </div>
          <div className="w-2/3">
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
