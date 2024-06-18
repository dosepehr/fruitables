import React, { FC } from "react";
import Image from "next/image";
import AddToCartBtn from "./AddToCartBtn";
import { productsType } from "@/types/products.type";
import Link from "next/link";

const Product: FC<productsType> = ({ img, desc, name, price, id }) => {
  return (
    <Link href={`/shop/${id}`}>
      <div className="flex h-full flex-col rounded-lg border border-mainYellow bg-white pb-4">
        <div className="h-48 overflow-hidden rounded-t-lg">
          <Image
            src={`http://localhost:9000/images/${img}`}
            className="h-full w-full rounded-t-lg object-cover duration-700 hover:scale-150"
            width={1000}
            height={1000}
            alt={name}
          />
        </div>
        <div className="mx-auto flex w-[90%] flex-1 flex-col justify-between text-center">
          <div>
            <p className="my-2 text-xl font-semibold text-darkGray">{name}</p>
            <p className="my-2 text-lightGray">{desc.substr(0, 100)}</p>
          </div>
          <div className="mt-4 flex items-center justify-around">
            <p className="text-xl font-semibold text-darkGray">
              $ {price} / Kg
            </p>
            <AddToCartBtn />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
