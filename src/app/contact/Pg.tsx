import { FaTrophy, FaShieldAlt, FaTruck, FaHeadset } from "react-icons/fa";

const Pg = () => {
  return (
    <div className="w-full bg-[#faf3ea] py-10 flex flex-col items-center">
      <div className="flex justify-between items-center w-[90%] max-w-[1334px]">
        {/* High Quality */}
        <div className="flex items-center gap-2.5">
          <div className="w-[60px] h-[60px] flex justify-center items-center bg-gray-200 rounded-full">
            <FaTrophy className="text-[#242424] text-3xl" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#242424] text-[25px] font-semibold leading-[37.5px]">High Quality</h3>
            <p className="text-[#898989] text-xl font-medium leading-[30px]">Crafted from top materials</p>
          </div>
        </div>

        {/* Warranty Protection */}
        <div className="flex items-center gap-2.5">
          <div className="w-[60px] h-[60px] flex justify-center items-center bg-gray-200 rounded-full">
            <FaShieldAlt className="text-[#242424] text-3xl" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#242424] text-[25px] font-semibold leading-[37.5px]">Warranty Protection</h3>
            <p className="text-[#898989] text-xl font-medium leading-[30px]">Over 2 years</p>
          </div>
        </div>

        {/* Free Shipping */}
        <div className="flex items-center gap-2.5">
          <div className="w-[60px] h-[60px] flex justify-center items-center bg-gray-200 rounded-full">
            <FaTruck className="text-[#242424] text-3xl" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#242424] text-[25px] font-semibold leading-[37.5px]">Free Shipping</h3>
            <p className="text-[#898989] text-xl font-medium leading-[30px]">Order over 150 $</p>
          </div>
        </div>

        {/* 24 / 7 Support */}
        <div className="flex items-center gap-2.5">
          <div className="w-[60px] h-[60px] flex justify-center items-center bg-gray-200 rounded-full">
            <FaHeadset className="text-[#242424] text-3xl" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#242424] text-[25px] font-semibold leading-[37.5px]">24 / 7 Support</h3>
            <p className="text-[#898989] text-xl font-medium leading-[30px]">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pg;