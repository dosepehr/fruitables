import React from "react";
import Layout from "../Layout/Layout";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10 bg-[#45595b] py-4">
      <Layout>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="self-start" >
            <p className="text-[2.5rem] text-lightGreen">Fruitables</p>
            <p className="text-mainYellow">Fresh products</p>
          </div>
          <div className="relative w-full lg:w-1/2 my-4 lg:my-0">
            <input
              type="text"
              className="w-full rounded-full px-4 py-4"
              placeholder="Your Email"
            />
            <button className="absolute right-0 top-0 rounded-full bg-lightGreen px-4 py-4 font-semibold text-white">
              Subscribe Now
            </button>
          </div>
          <div className="flex items-center justify-center gap-x-2 self-end">
            <div className="rounded-full border border-mainYellow p-3 text-mainYellow">
              <FaTwitter />
            </div>
            <div className="rounded-full border border-mainYellow p-3 text-mainYellow">
              <FaFacebookF />
            </div>
            <div className="rounded-full border border-mainYellow p-3 text-mainYellow">
              <FaYoutube />
            </div>
            <div className="rounded-full border border-mainYellow p-3 text-mainYellow">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
