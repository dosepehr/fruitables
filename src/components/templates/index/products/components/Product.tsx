import React from "react";
import Image from "next/image";
import AddToCartBtn from "./AddToCartBtn";
const Product = () => {
  return (
    <div className="rounded-lg border border-mainYellow bg-white pb-4">
      <div className="overflow-hidden rounded-t-lg">
        <Image
          src="/images/fruite-item-2.jpg"
          className="rounded-t-lg duration-700 hover:scale-150"
          width={1000}
          height={1000}
          alt=""
        />
      </div>
      <div className="mx-auto w-[90%] text-center">
        <div>
          <p className="my-2 text-xl font-semibold text-darkGray">Grapes</p>
          <p className="my-2 text-lightGray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, hic.
          </p>
        </div>
        <div className="flex items-center justify-around">
          <p className="text-xl font-semibold text-darkGray">$4.99 / Kg</p>
          <AddToCartBtn />
        </div>
      </div>
    </div>
  );
};

export default Product;
