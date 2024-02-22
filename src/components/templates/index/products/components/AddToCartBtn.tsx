import { CiShoppingBasket } from "react-icons/ci";

const AddToCartBtn = () => {
  return (
    <button className="group flex items-center justify-center space-x-2 rounded-full border border-mainYellow px-3 py-2 duration-300 hover:bg-mainYellow">
      <CiShoppingBasket className="text-2xl text-lightGreen" />
      <p className="font-semibold text-lightGreen duration-300 group-hover:text-white">
        Add to cart
      </p>
    </button>
  );
};

export default AddToCartBtn;
