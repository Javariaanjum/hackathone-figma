import Image from "next/image";
import backgroundImg from "../public/scandinavian-interior-mockup-wall-decal-background 1.png"; // Replace with your image path

export default function CustomCard() {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImg}
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Card */}
      <div className="bg-white w-[70%] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] shadow-lg rounded-xl p-8 mt-[100px]  ml-[280px]">
        <p className="text-[#111111] text-sm font-bold uppercase ">
          New Arrival
        </p
        <h1 className="" text-3xl md:text-4xl  font-bold mt-2 mb-4 leading-snug">
          Discover Our New Collection
        </h1>
        <p className="text-[#C7A650] text-base mb-6 font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-[#C7A650] text-white py-3 px-9 shadow-md text-sm uppercase font-semibold hover:bg-[#b89144]">
          Buy Now
        </button>
      </div>
    </div>
  );
}



