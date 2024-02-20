import React from "react";
import ShortLink from "./ShortLink";
import useFooterLinks from "@/hooks/useFooterLinks";
const ShortLinks = () => {
  const footerLinks = useFooterLinks();
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <p className="mb-2 text-2xl font-semibold text-[#f4f6f8]">
          Why People Like us!
        </p>
        <p className="leading-9 text-[#ffffff80]">
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the like Aldus PageMaker including of Lorem Ipsum.
        </p>
      </div>
      {footerLinks.map((box, index) => (
        <div key={index}>
          <p className="mb-2 text-2xl font-semibold text-[#f4f6f8]">
            {box.title}
          </p>
          <div className="flex flex-col items-start">
            {box.links.map((link) => (
              <ShortLink key={link.id} text={link.text} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShortLinks;
