import React from "react";

const SearchBox = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-3/4 rounded-full border-2 border-mainYellow px-6 py-4"
        placeholder="Search"
      />
      <button className="absolute right-1/4 top-0 rounded-full border-2 border-mainYellow bg-red-500 px-6 py-4 text-white">
        Submit Now
      </button>
    </div>


    
  );
};



export default SearchBox;
