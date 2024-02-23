import { useState } from "react";
import Image from "next/image";
import ProductCounter from "../shop-[id]/ProductCounter/ProductCounter";
import { FaTimes } from "react-icons/fa";
const TableProduct = () => {
  const [count, setCount] = useState(0);

  const increaseCount: void = (prev: number) => setCount(prev + 1);
  const decreaseCount: void = (prev: number) => {
    if (prev >= 1) {
      setCount(prev - 1);
    }
  };
  return (
    <>
      <tr className="border-t border-lightGray">
        <td className="py-4" >
          <Image
            className="h-24 w-24 rounded-[0.625rem]"
            width={1000}
            height={1000}
            alt=""
            src="/images/best-product-1.jpg"
          />
        </td>
        <td>
          <p className="text-lightGray">Big Banana</p>
        </td>
        <td>
          <p className="text-lightGray">2.99 $</p>
        </td>
        <td>
          <ProductCounter
            count={count}
            increaseCount={() => increaseCount(count)}
            decreaseCount={() => decreaseCount(count)}
          />
        </td>
        <td>
          <p className="text-lightGray">2.99 $</p>
        </td>
        <td>
          <button className="rounded-full bg-[#f4f6f8] p-2 text-red-500">
            <FaTimes />
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableProduct;
