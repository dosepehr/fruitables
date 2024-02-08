import React, { FC, useState } from "react";

type ProductSelectorButtonProps = {
  content: string;
};
const ProductSelectorButton: FC<ProductSelectorButtonProps> = ({ content }) => {
  const [category, setCategory] = useState<string>("Fruits");
  const active = content == category;
  const handleCategoryChange = (content: string) => {
    setCategory(content);
  };
  return (
    <button
      onClick={() => handleCategoryChange(content)}
      className={`rounded-full ${active ? "bg-mainYellow text-white" : "bg-[#f4f6f8] text-[#45595b]"} px-4 py-2 transition-all duration-300`}
    >
      {content}
    </button>
  );
};

export default ProductSelectorButton;
