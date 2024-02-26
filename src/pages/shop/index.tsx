import React from "react";
import Breadcrumb from "@/components/modules/Breadcrumb/Breadcrumb";
import Product from "@/components/templates/index/products/components/Product";
import Layout from "@/components/modules/Layout/Layout";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services";
import { productsType } from "@/types/products.type";

const index = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });
  const products = data?.data;
  return (
    <>
      <Breadcrumb text="shop" href="/shop" />
      <Layout>
        <div className="flex flex-col justify-center lg:flex-row lg:space-x-5">
          <div className="lg:w-1/4">
            <p className="text-[2.5rem] font-semibold text-darkGray">
              Fresh fruits shop
            </p>
            <div>
              <Image
                className="my-4 mt-4 rounded-lg"
                src="/images/banner-fruits.jpg"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {products?.map((product: productsType) => (
                <Product key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default index;
