import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import BackgroundImage from "../public/background.png";

export default function Border(){
    return(
        <div className="relative w-full h-[316px]">
  {/* <!-- Background Image with Blur Effect --> */}
  <Image
    className="w-full h-full absolute inset-0 "
    src={BackgroundImage}
    alt="Background Image" 
  />

  {/* <!-- Shop Title --> */}
  <div className="absolute text-black text-6xl font-medium font-['Poppins'] inset-x-0 top-[121px] text-center">
    Shop
  </div>

  {/* <!-- Breadcrumb Section --> */}
  <div className="absolute flex items-center justify-center inset-x-0 top-[195px] space-x-2 text-base font-['Poppins']">
    <span className="text-black font-medium">Home</span>
    <IoIosArrowForward className="text-black font-light"/>
    <span className="text-black font-light">Shop</span>
  </div>
</div>
    )
}

