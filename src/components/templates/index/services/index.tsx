import Layout from "@/components/modules/Layout/Layout";
import ServiceBox from "./components/ServiceBox";
import { FaCarSide } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
import { IoShieldHalfOutline } from "react-icons/io5";
const Services = () => {
  return (
    <>
      <Layout>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ServiceBox title="Free Shipping" desc="Free on order over $300">
            <FaCarSide />
          </ServiceBox>
          <ServiceBox title="Security Payment" desc="100% security payment">
            <IoShieldHalfOutline />
          </ServiceBox>
          <ServiceBox title="30 Day Return" desc="30 day money guarantee">
            <BiTransfer />
          </ServiceBox>
          <ServiceBox title="24/7 Support" desc="Support every time fast">
            <IoIosCall />
          </ServiceBox>
        </div>
      </Layout>
    </>
  );
};

export default Services;
