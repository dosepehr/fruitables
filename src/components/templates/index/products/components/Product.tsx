import React from "react";
import Image from "next/image";
import { CiShoppingBasket } from "react-icons/ci";
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
          <p className="text-darkGray my-2 text-xl font-semibold">Grapes</p>
          <p className="text-lightGray my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, hic.
          </p>
        </div>
        <div className="flex items-center justify-around">
          <p className="text-darkGray text-xl font-semibold">$4.99 / Kg</p>
          <button className="group flex items-center justify-center space-x-2 rounded-full border border-mainYellow px-3 py-2 duration-300 hover:bg-mainYellow">
            <CiShoppingBasket className="text-2xl text-lightGreen" />
            <p className="text-lightGreen duration-300 group-hover:text-white font-semibold">
              Add to cart
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
