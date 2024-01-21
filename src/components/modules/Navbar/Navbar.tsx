import { IoMail, IoLocationSharp } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="myContainer mx-auto hidden lg:block">
      <div className="flex items-center justify-between rounded-bl-[100px] rounded-br-[230px] rounded-tl-[230px] rounded-tr-[100px] bg-lightGreen p-3 px-6">
        <div className="flex space-x-4">
          <div className="flex items-center">
            <IoLocationSharp className="text-mainYellow" />
            <p className="ml-2 font-ralewayLight text-white">
              123 Street, New York
            </p>
          </div>
          <div className="flex items-center">
            <IoMail className="text-mainYellow" />
            <p className="ml-2 font-ralewayLight text-white">
              fruitable@gmail.com
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 font-ralewayLight text-sm text-white">
          <p>Privacy Policy</p>
          <p>/</p>
          <p>Terms of Use</p>
          <p>/</p>
          <p>Sales and Refunds</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
