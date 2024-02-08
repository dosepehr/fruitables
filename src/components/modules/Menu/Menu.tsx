import { CiShoppingBasket, CiSearch, CiUser } from "react-icons/ci";
import Layout from "../Layout/Layout";
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
          <a
            href="#"
            className="text-[#0000008C] duration-300 hover:text-lightGreen"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#0000008C] duration-300 hover:text-lightGreen"
          >
            Shop
          </a>
          <a
            href="#"
            className="hover:text-lightGree text-[#0000008C] duration-300 "
          >
            Cart
          </a>
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
