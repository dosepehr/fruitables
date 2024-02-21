import Link from "next/link";
import { FC } from "react";

type BreadcrumbProps = {
  href: string;
  text: string;
};
const Breadcrumb: FC<BreadcrumbProps> = ({ text, href }) => {
  return (
    <div className=" breadcrumbBg my-10 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-6">
      <h1 className="text-[2.5rem] font-extrabold text-white">Shop</h1>
      <div className="mt-4 flex items-center justify-center gap-x-1">
        <Link className="text-lightGreen" href="/">
          Home
        </Link>
        <p className="text-[#6c757d]">/</p>
        <Link className="text-white" href={href}>
          {text}
        </Link>
      </div>
    </div>
  );
};

export default Breadcrumb;
