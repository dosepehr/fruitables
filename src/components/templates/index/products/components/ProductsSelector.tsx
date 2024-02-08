import { useState } from "react";
import ProductSelectorButton from "./ProductSelectorButton";

const ProductsSelector = () => {
  return (
    <div className="flex items-center justify-between space-x-4">
      <ProductSelectorButton content="All Products" />
      <ProductSelectorButton content="Vegetables" />
      <ProductSelectorButton content="Fruits" />
      <ProductSelectorButton content="Bread" />
      <ProductSelectorButton content="Meat" />
    </div>
  );
};

export default ProductsSelector;
