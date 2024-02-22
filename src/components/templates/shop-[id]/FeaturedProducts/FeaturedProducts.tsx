import React from "react";
import Image from "next/image";

const FeaturedProducts = () => {
  return (
    <div className="flex flex-col gap-y-4 mt-4">
      <div className="flex gap-x-4">
        <Image
          className="h-24 w-24 rounded-[0.625rem]"
          width={1000}
          height={1000}
          alt=""
          src="/images/best-product-3.jpg"
        />
        <div className="flex flex-col justify-around">
          <p className="text-darkGray">Big Banana</p>
          <p className="text-darkGray font-semibold">2.99 $</p>
        </div>
      </div>

    </div>
  );
};

export default FeaturedProducts;
