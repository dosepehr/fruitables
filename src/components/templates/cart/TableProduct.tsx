import { useState, FC } from "react";
import Image from "next/image";
import ProductCounter from "../shop-[id]/ProductCounter/ProductCounter";
import { FaTimes } from "react-icons/fa";
import { productsType } from "@/types/products.type";

const TableProduct: FC<productsType> = ({
  img,
  name,
  price,
  count: initialProductCount,
}) => {
  const [count, setCount] = useState(initialProductCount || 0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <tr className="border-t border-lightGray">
      <td className="py-4">
        <Image
          className="h-24 w-24 rounded-[0.625rem]"
          width={1000}
          height={1000}
          alt=""
          src={`http://localhost:9000/images/${img}`}
        />
      </td>
      <td>
        <p className="text-lightGray">{name}</p>
      </td>
      <td>
        <p className="text-lightGray">{price} $</p>
      </td>
      <td>
        <ProductCounter
          count={count}
          increaseCount={increaseCount}
          decreaseCount={decreaseCount}
        />
      </td>
      <td>
        <p className="text-lightGray">{(count * price).toFixed(2)} $</p>
      </td>
      <td>
        <button className="rounded-full bg-[#f4f6f8] p-2 text-red-500">
          <FaTimes />
        </button>
      </td>
    </tr>
  );
};

export default TableProduct;
