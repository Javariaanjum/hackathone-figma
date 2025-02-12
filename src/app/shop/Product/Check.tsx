import Image from "next/image"
import Image1 from "/public/background.png";
import Image2 from "../public/Meubel House_Logos-05.png";
export default function Can(){
    return(
        <div className="relative w-full max-w-[1440px] h-[316px] mx-auto">
  {/* Background Image */}
  <Image
    className="w-full h-full absolute top-0 left-0 blur-[6px] object-cover"
    src={Image1}
    alt="Image 1"
  />

  {/* Cart Section */}
  <div className="absolute flex flex-col items-center justify-center w-[106px] h-[133px] left-1/2 top-[61px] transform -translate-x-1/2">
    <Image
      className="w-[77px] h-[77px] mb-2"
      src={Image2}
      alt="Image 2"
    />
    <div className="text-black text-5xl font-medium font-['Poppins']">CheckOut</div>
  </div>

  {/* Breadcrumb Section */}
  <div className="absolute flex items-center gap-2 left-1/2 top-[195px] transform -translate-x-1/2">
    <div className="text-black text-base font-medium font-['Poppins']">Home</div>
    <div className="w-5 h-5 border-l border-black rotate-90"></div>
    <div className="text-black text-base font-light font-['Poppins']">CheckOut</div>
  </div>
</div>

    )
}