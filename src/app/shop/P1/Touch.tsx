import {MdOutlineKeyboardArrowRight } from "react-icons/md";
 import Image from "next/image"
import Image1 from "../../../public/background.png";
import Image2 from "../public/Meubel House_Logos-05.png";
export default function Can() {
  return (
    <div className="relative w-[1440px] h-[316px]">
      {/* Background Image */}
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover blur-[6px]"
        src={Image1}
        alt="Image1"
      />

      {/* Contact Section */}
      <div className="absolute flex flex-col items-center justify-center w-full h-full">
        {/* Icon and Heading */}
        <div className="flex flex-col items-center">
          <Image
            className="w-[77px] h-[77px] mb-4"
            src={Image2}
            alt="Image 2"
          />
          <h1 className="text-5xl font-medium text-black font-['Poppins']">
          Product Comparison
          </h1>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center mt-4 space-x-2 text-base font-['Poppins']">
          <span className="font-medium text-black">Home</span>
          <MdOutlineKeyboardArrowRight className="text-black" size={18} />
          <span className="font-light text-black">Product Comparison</span>
        </div>
      </div>
    </div>
  );
}