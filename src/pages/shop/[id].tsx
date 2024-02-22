import { useState } from "react";
import Breadcrumb from "@/components/modules/Breadcrumb/Breadcrumb";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "@/components/modules/Layout/Layout";
import Table from "@/components/templates/shop-[id]/Table/Table";
import ProductCounter from "@/components/templates/shop-[id]/ProductCounter/ProductCounter";
import AddToCartBtn from "@/components/templates/index/products/components/AddToCartBtn";

const Product = () => {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const increaseCount: void = (prev: number) => setCount(prev + 1);
  const decreaseCount: void = (prev: number) => {
    if (prev >= 1) {
      setCount(prev - 1);
    }
  };

  return (
    <>
      <Breadcrumb href="" text="" />
      <Layout>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col gap-4 lg:w-2/3 lg:flex-row">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 lg:flex-row">
                <div className="lg:w-1/2">
                  <div>
                    <Image
                      className="rounded-[0.625rem] border border-[#dee2e6]"
                      width={1000}
                      height={1000}
                      alt=""
                      src="/images/best-product-1.jpg"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <p className="mb-3 text-2xl font-bold text-darkGray">
                    Brocoli
                  </p>
                  <p className="mb-3 text-lightGray">Category: Vegetables</p>
                  <p className="mb-3 text-2xl font-bold text-darkGray">3.35$</p>
                  <p className="mb-3 text-lightGray">
                    The generated Lorem Ipsum is therefore always free from
                    repetition injected humour, or non-characteristic words etc.
                    Susp endisse ultricies nisi vel quam suscipit. Sabertooth
                    peacock flounder; chain pickerel hatchetfish, pencilfish
                    snailfish
                  </p>
                  <ProductCounter
                    count={count}
                    increaseCount={() => increaseCount(count)}
                    decreaseCount={() => decreaseCount(count)}
                  />
                  <div onClick={() => console.log(count)}>
                    <AddToCartBtn />
                  </div>
                </div>
              </div>
              <Table />
            </div>
          </div>
          <div className="bg-yellow-100 lg:w-1/3">g</div>
        </div>
      </Layout>
    </>
  );
};

export default Product;
