import React, { FC } from "react";

type ShortLinkProps = {
  text: string;
};

const ShortLink: FC<ShortLinkProps> = ({ text }) => {
  return (
    <span className="leading-9 text-[#ffffff80] duration-500 hover:text-mainYellow">
      {text}
    </span>
  );
};

export default ShortLink;
