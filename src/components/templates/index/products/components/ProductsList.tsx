import React from "react";
import Product from "./Product";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services";
import { productsType } from "@/types/products.type";

const ProductsList = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });
  const products = data?.data;

  return (
    <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products?.map((product: productsType) => (
        <div key={product.id} className="flex h-full flex-col">
          <Product {...product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
