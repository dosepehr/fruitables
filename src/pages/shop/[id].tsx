import { useState } from "react";
import Breadcrumb from "@/components/modules/Breadcrumb/Breadcrumb";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "@/components/modules/Layout/Layout";
import Table from "@/components/templates/shop-[id]/Table/Table";
import ProductCounter from "@/components/templates/shop-[id]/ProductCounter/ProductCounter";
import AddToCartBtn from "@/components/templates/index/products/components/AddToCartBtn";
import FeaturedProducts from "@/components/templates/shop-[id]/FeaturedProducts/FeaturedProducts";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProduct } from "@/services";
import { productsType } from "@/types/products.type";
import { useAppStore } from "@/store/StoreProvider";
const Product = () => {
  const router = useRouter();
  const id: number = +router.query.id;
  const [count, setCount] = useState(0);
  const increaseCount: (prev: number) => void = (prev) => setCount(prev + 1);
  const decreaseCount: (prev: number) => void = (prev) => {
    if (prev >= 1) {
      setCount(prev - 1);
    }
  };
  const { addToCart } = useAppStore((state) => state);
  const handleAddToCart = (product: productsType) => {
    addToCart({ ...product }, count);
  };
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProduct(id),
  });
  const product: productsType = data?.data;
  return (
    <>
      <Breadcrumb href="" text={product?.name} />
      <Layout>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col gap-4 lg:w-2/3 lg:flex-row xl:w-3/4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 lg:flex-row">
                <div className="lg:w-1/2">
                  <div>
                    <Image
                      className="rounded-[0.625rem] border border-[#dee2e6]"
                      width={1000}
                      height={1000}
                      alt=""
                      src={`http://localhost:9000/images/${product?.img}`}
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <p className="mb-3 text-2xl font-bold text-darkGray">
                    {product?.name}
                  </p>
                  <p className="mb-3 text-lightGray">
                    Category: {product?.Category}
                  </p>
                  <p className="mb-3 text-2xl font-bold text-darkGray">
                    {product?.price}$
                  </p>
                  <p className="mb-3 text-lightGray">{product?.desc}</p>
                  <ProductCounter
                    count={count}
                    increaseCount={() => increaseCount(count)}
                    decreaseCount={() => decreaseCount(count)}
                  />
                  <div onClick={() => handleAddToCart(product)}>
                    <AddToCartBtn />
                  </div>
                </div>
              </div>
              <Table />
            </div>
          </div>
          <div className="xl:1/4 lg:w-1/3">
            <p className="mt-4 text-2xl text-darkGray lg:mt-0">
              Featured products
            </p>
            <FeaturedProducts />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Product;
