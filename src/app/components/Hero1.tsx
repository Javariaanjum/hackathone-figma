import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default async function Hero1() {
  const products: Product[] = await client.fetch(`*[_type == "product"][0..2]`); // 3 products fetch

  return (  
    <div className="w-full h-screen relative">
      {/* Background Section */}
      <h1 className="text-4xl font-bold mb-4 text-center mt-10">Browse The Range</h1>
      <p className="text-lg text-[#666666] mb-8 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-10">
        {products.map((product) => (
          <div key={product._id} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <Image 
              src={urlFor(product.productImage).url()}  
              alt={product.tittle || "Product Image"} 
              className="w-full mb-4" 
              width={500} 
              height={500} 
            />
            <h2 className="text-xl text-[#333333] font-semibold mb-2 text-center">
              {product.tittle || "Product Name"}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
