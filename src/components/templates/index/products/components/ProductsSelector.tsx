import { useState } from "react";

const ProductsSelector = () => {
  const buttons: { id: number; content: string }[] = [
    {
      id: 1,
      content: "All Products",
    },
    {
      id: 2,
      content: "Vegetables",
    },
    {
      id: 3,
      content: "Fruits",
    },
    {
      id: 4,
      content: "Bread",
    },
    {
      id: 5,
      content: "Meat",
    },
  ];
  const [category, setCategory] = useState<string>("All Products");

  return (
    <div className="flex items-center justify-between space-x-4">
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => setCategory(button.content)}
          className={`rounded-full px-4 py-2 transition-all duration-300 ${button.content == category ? "bg-mainYellow text-white" : "bg-[#f4f6f8] text-darkGray"}`}
        >
          {button.content}
        </button>
      ))}
    </div>
  );
};

export default ProductsSelector;
