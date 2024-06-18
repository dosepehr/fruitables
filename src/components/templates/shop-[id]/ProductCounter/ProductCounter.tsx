import { FC } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

type ProductCounterProps = {
  count: number;
  decreaseCount: () => void;
  increaseCount: () => void;
};

const ProductCounter: FC<ProductCounterProps> = ({
  count,
  increaseCount,
  decreaseCount,
}) => {
  return (
    <div className="mb-4 flex items-center gap-4">
      <button
        className="rounded-full bg-[#f4f6f8] p-2 text-lightGray"
        onClick={decreaseCount}
      >
        <FaMinus />
      </button>
      <p className="text-lg text-lightGray">{count}</p>
      <button
        className="rounded-full bg-[#f4f6f8] p-2 text-lightGray"
        onClick={increaseCount}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default ProductCounter;
