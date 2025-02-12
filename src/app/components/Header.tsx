import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import Image from "next/image";

import Link from "next/link";

function Header() {
  return (
    <div className="w-full h-[100px] bg-white shadow-md flex items-center justify-between px-6">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Image className="w-[50px] h-auto" src="/Meubel House_Logos-05.png" alt="Logo" width={50} height={50}/>
        <span className="text-black text-[34px] font-bold font-montserrat">Furniro</span>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-10">
        <Link href="/" className="text-black text-base font-medium font-poppins hover:text-gray-500">
          Home
        </Link>
        <Link href="/shop" className="text-black text-base font-medium font-poppins hover:text-gray-500">
          Shop
        </Link>
        <Link href="/blog" className="text-black text-base font-medium font-poppins hover:text-gray-500">
          Blog
        </Link>
        <Link href="/contact" className="text-black text-base font-medium font-poppins hover:text-gray-500">
          Contact
        </Link>
      </div>

      {/* Icons */}
      <div className="flex gap-5">
        <BiUserCircle className="w-6 h-6 text-black cursor-pointer hover:text-gray-500" />
        <FiSearch className="w-6 h-6 text-black cursor-pointer hover:text-gray-500" />
        <FaRegHeart className="w-6 h-6 text-black cursor-pointer hover:text-gray-500" />
        <AiOutlineShoppingCart className="w-6 h-6 text-black cursor-pointer hover:text-gray-500" />
      </div>
    </div>
  );
}

export default Header;



