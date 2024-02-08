import React from "react";
import Product from "./Product";

const ProductsList = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default ProductsList;
