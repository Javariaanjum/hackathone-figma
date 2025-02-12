import Image from "next/image";
import P1 from "../../../../public/Group 95.png"
import P2 from "../../../../public/Mask group 1.png"

export default function Cart() {
    return (
      <div className="relative w-[350px] h-auto bg-white p-4 shadow-md rounded-lg">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-black font-['Poppins'] mb-4">
          Shopping Cart
        </h1>
        <hr className="border border-[#d9d9d9] mb-4" />
  
        {/* Cart Item 1 */}
        <div className="flex items-center mb-6">
          <div className="relative w-[105px] h-[105px] bg-[#b88e2f]/20 rounded-[10px]">
            <Image
              className="absolute w-[105px] h-[105px] object-cover rounded-[10px]"
              src={P1}
              alt="P 1"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-base font-normal text-black font-['Poppins']">
              Asgaard Sofa
            </h2>
            <div className="flex items-center space-x-2 text-sm text-black font-['Poppins']">
              <span>1</span>
              <span>X</span>
              <span className="text-[#b88e2f] font-medium">Rs. 250,000.00</span>
            </div>
          </div>
        </div>
  
        {/* Cart Item 2 */}
        <div className="flex items-center mb-6">
          <div className="relative w-[105px] h-[105px] bg-[#b88e2f]/20 rounded-[10px]">
            <Image
              className="absolute w-[105px] h-[105px] object-cover rounded-[10px]"
              src={P2}
              alt="P 2"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-base font-normal text-black font-['Poppins']">
              Casaliving Wood
            </h2>
            <div className="flex items-center space-x-2 text-sm text-black font-['Poppins']">
              <span>1</span>
              <span>X</span>
              <span className="text-[#b88e2f] font-medium">Rs. 270,000.00</span>
            </div>
          </div>
        </div>
  
        {/* Subtotal */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-base font-normal text-black font-['Poppins']">
            Subtotal
          </span>
          <span className="text-base font-medium text-black font-['Poppins']">
            Rs. 520,000.00
          </span>
        </div>
  
        {/* Buttons */}
        <div className="flex justify-between space-x-2">
          <button className="h-[30px] px-[30px] py-1.5 rounded-[50px] border border-black text-xs text-black font-['Poppins']">
            Cart
          </button>
          <button className="h-[30px] px-[30px] py-1.5 rounded-[50px] border border-black text-xs text-black font-['Poppins']">
            Checkout
          </button>
          <button className="h-[30px] px-[30px] py-1.5 rounded-[50px] border border-black text-xs text-black font-['Poppins']">
            Comparison
          </button>
        </div>
      </div>
    );
  }
  