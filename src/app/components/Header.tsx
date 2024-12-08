import Image from 'next/image';
import Logo from  "../public/Meubel House_Logos-05.png";
import Link from 'next/link';
import { FaHeart, FaCartPlus, FaSearch, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/" className='flex text-2xl font-bold'>
          <Image src={Logo} alt="Furniro " className="w-10 h-8 font-bold mr-2 " />Furniro
        </Link>
        <nav className="hidden md:flex space-x-20">
          <Link href="/" className="text-[#000000] font-bold">
            Home
          </Link>
          <Link href="/shop" className="text-[#000000] font-bold">
            Shop
          </Link>
          <Link href="/blog" className="text-[#000000]  font-bold">
            Blog
          </Link>
          <Link href="/contact" className="text-[#000000] font-bold">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
        <FaUserCircle className="text-[#000000] cursor-pointer"/>
          <FaSearch className="text-[#000000] cursor-pointer "/>
          <FaHeart className="text-[#000000] cursor-pointer" />
          <FaCartPlus className="text-[#000000] cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;













































