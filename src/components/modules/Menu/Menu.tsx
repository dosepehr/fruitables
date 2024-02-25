import { CiShoppingBasket, CiSearch, CiUser } from "react-icons/ci";
import Layout from "../Layout/Layout";
import Link from "next/link";
const Menu = () => {
  return (
    <Layout classname="mx-auto">
      <div className="flex items-center justify-between py-4">
        <div>
          <p className="font-ralewayBold text-4xl font-extrabold text-lightGreen">
            Fruitables
          </p>
        </div>
        <div className="hidden items-center space-x-6 justify-self-center xl:flex">
          <Link
            href="/"
            className="text-[#0000008C] duration-300 hover:text-lightGreen"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-[#0000008C] duration-300 hover:text-lightGreen"
          >
            Shop
          </Link>
          <Link
            href="/cart"
            className="hover:text-lightGree text-[#0000008C] duration-300 "
          >
            Cart
          </Link>
          <a
            href="#"
            className="hover:text-lightGree text-[#0000008C] duration-300 "
          >
            Contact
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <div>
            <CiSearch className="text-4xl text-lightGreen" />
          </div>
          <div>
            <CiShoppingBasket className="text-4xl text-lightGreen" />
          </div>
          <div>
            <CiUser className="text-4xl text-lightGreen" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
