import React from "react";
import ProductsSelector from "./components/ProductsSelector";
import Layout from "@/components/modules/Layout/Layout";
const Products = () => {
  return (
    <>
      <Layout>
        <div className="mt-10 flex items-center justify-between">
          <p className="text-4xl font-semibold text-[#45595b]">
            Our Organic Products
          </p>
          <ProductsSelector />
        </div>
      </Layout>
    </>
  );
};

export default Products;
