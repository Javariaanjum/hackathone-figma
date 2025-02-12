import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default async function Hero() {
  const products:Product[] = await client.fetch(`*[_type == "product"]`);

  return (  
    <div className="w-full h-screen relative">
      {/* Background Section */}
      {products.map((product) => (
        <Image
          key={product._id}
          src={urlFor(product.productImage).url()}
          alt={product.tittle || "Product Image"}
          className="absolute inset-0 w-full h-full object-cover"
          fill
          priority
        />
      ))}
      Content Section 
      <div className="absolute inset-0 flex items-center justify-end pr-20 mr-24 mt-28">
        <div className="bg-white w-[500px] p-8 rounded-lg shadow-lg">
          <span className="block text-sm font-semibold text-black tracking-wider uppercase mb-2">
            New Arrival
          </span>
          <h1 className="text-6xl font-bold text-[#b88e2f] leading-tight mb-4">
             Discover Our New Collection
          </h1>
          <p className="text-black mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#b88e2f] text-white py-3 px-8 rounded-md text-lg font-bold uppercase hover:bg-[#9a761e]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
   }








 
 