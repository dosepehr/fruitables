import { FC, PropsWithChildren } from "react";
import { FaCarSide } from "react-icons/fa";
type ServiceBoxProps = {
  title: string;
  desc: string;
};
const ServiceBox: FC<PropsWithChildren<ServiceBoxProps>> = ({
  title,
  desc,
  children,
}) => {
  return (
    <>
      <div className="rounded-lg bg-[#f4f6f8] py-4">
        <div className="relative mx-auto w-fit rounded-full bg-mainYellow p-5 text-7xl text-white">
          {children}
          <div className="absolute -bottom-2 right-1/2 h-7 w-7 translate-x-1/2 rotate-45 bg-mainYellow"></div>
        </div>
        <div className="mt-8 text-center">
          <p className="mb-2 text-xl font-semibold text-[#45595b]">{title}</p>
          <p className="text-[#747D88]">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceBox;
