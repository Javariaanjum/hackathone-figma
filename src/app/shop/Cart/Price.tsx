import Image from "next/image"
import Image1 from "../../public/Group 95.png";

export default function Price(){  
return(  
<div className="relative w-full max-w-[1440px] h-[525px] bg-white mx-auto">
  {/* Content Container */}
  <div className="absolute top-[72px] left-[100px] w-[1240px] h-[390px] flex">
    {/* Product Section */}
    <div className="flex-grow">
      <div className="bg-[#f9f1e7] p-4 rounded-md">
        {/* Table Header */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <span className="text-black font-medium text-base font-['Poppins']">Product</span>
          <span className="text-black font-medium text-base font-['Poppins']">Price</span>
          <span className="text-black font-medium text-base font-['Poppins']">Quantity</span>
          <span className="text-black font-medium text-base font-['Poppins']">Subtotal</span>
        </div>

        {/* Product Row */}
        <div className="flex items-center mt-4">
          {/* Product Image */}
          <div className="w-[105px] h-[105px] bg-[#b88e2f]/20 rounded-[10px] flex items-center justify-center overflow-hidden">
            <Image
              src={Image1}
              alt="Image 1"
              className="w-[105px] h-[90px] object-cover rounded-[10px]"
            />
          </div>

          {/* Product Info */}
          <div className="ml-4 flex-grow">
            <p className="text-[#9f9f9f] text-base font-normal font-['Poppins']">Asgaard sofa</p>
          </div>

          {/* Product Price */}
          <p className="w-[100px] text-center text-black text-base font-normal font-['Poppins']">
            Rs. 250,000.00
          </p>

          {/* Quantity */}
          <div className="w-8 h-8 flex items-center justify-center border border-[#9f9f9f] rounded-[5px] ml-6">
            <span className="text-black text-base font-normal font-['Poppins']">1</span>
          </div>

          {/* Subtotal */}
          <p className="w-[100px] text-right text-black text-base font-normal font-['Poppins']">
            Rs. 250,000.00
          </p>
        </div>
      </div>
    </div>

    {/* Cart Totals Section */}
    <div className="w-[393px] ml-6 bg-[#f9f1e7] rounded-md p-6">
      <h2 className="text-black text-[32px] font-semibold font-['Poppins'] mb-6">Cart Totals</h2>

      <div className="flex justify-between text-base font-medium font-['Poppins']">
        <span>Subtotal</span>
        <span className="text-[#9f9f9f]">Rs. 250,000.00</span>
      </div>

      <div className="flex justify-between items-center text-xl font-medium font-['Poppins'] mt-4">
        <span>Total</span>
        <span className="text-[#b88e2f]">Rs. 250,000.00</span>
      </div>

      <button className="w-full mt-8 bg-transparent border border-black rounded-[15px] py-3 text-xl font-normal font-['Poppins'] hover:bg-black hover:text-white transition">
        Check Out
      </button>
    </div>
  </div>
</div>
)
}
