import React from "react";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
const Testimonal = () => {
  return (
    <div className="px-4">
      <div className="bg-[#f4f6f8] p-6 rounded-lg">
        <p className="text-lightGray mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
          laborum incidunt. Provident nesciunt officia vero doloribus et? Aut,
          omnis molestias?
        </p>
        <div className="flex items-center justify-between border-t border-mainYellow pt-2">
          <div className="flex items-center justify-center">
            <div className="mr-4 mt-4 h-24 w-24 rounded-lg">
              <Image
                src="/images/testimonial-1.jpg"
                width={1000}
                height={1000}
                alt="fruits"
                className="rounded-lg bg-mainYellow"
              />
            </div>
            <div className="flex flex-col items-start justify-between">
              <p className="text-2xl text-darkGray">Client Name</p>
              <p className="text-lightGray">Profession</p>
            </div>
          </div>
          <FaQuoteRight className="text-4xl text-mainYellow" />
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
