import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
const Box = () => {
  return (
    <div className="navbar w-full h-[100px] relative ">
      {/* Background */}
      <div className="navbar-bg w-full h-full absolute top-0 left-0 bg-[#f9f1e7]" />

      {/* Navigation Items */}
      <div className="navigation-item flex items-center absolute left-[312px] top-[31px]">
        <div className="line w-[37px] h-0 border-t-2 border-[#9f9f9f] rotate-90"></div>
        <span className="item-text ml-2 text-black text-base font-normal font-['Poppins']">
          Asgaard Sofa
        </span>
      </div>

      {/* Breadcrumb: Home */}
      <div className="breadcrumb flex items-center absolute left-[99px] top-[38px]">
        <span className="breadcrumb-text text-[#9f9f9f] text-base font-normal font-['Poppins']">
          Home
        </span>
        <div className="arrow-icon w-5 h-5 flex justify-center items-center ml-2 rotate-90">
          <  IoIosArrowForward className="w-4 h-4" />
        </div>
      </div>

      {/* Breadcrumb: Shop */}
      <div className="breadcrumb flex items-center absolute left-[205px] top-[38px]">
        <span className="breadcrumb-text text-[#9f9f9f] text-base font-normal font-['Poppins']">
          Shop
        </span>
        <div className="arrow-icon w-5 h-5 flex justify-center items-center ml-2 rotate-90">
          <  IoIosArrowForward className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Box;
