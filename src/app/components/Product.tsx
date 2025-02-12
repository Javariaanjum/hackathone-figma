import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default async function Product() {
  const products: Product[] = await client.fetch(`*[_type == "product"][0..7]`); // 8 products fetch kiye hain

  return (
    <div className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-gray-800">Our Products</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="relative group bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative">
              <Image
                src={urlFor(product.productImage).url()}
                alt={product.tittle || "Product Image"}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                width={300}
                height={200}
              />
              {/* {product.discount && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount} OFF
                </div>
              )}
              {product.tag && (
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.tag}
                </div>
              )} */}
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.tittle}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xl font-bold text-gray-900">
                  ${product.price}
                </span>
                {/* {product.originalPrice && (
                  <span className="text-sm line-through text-gray-500">
                    ${product.originalPrice}
                  </span>
                )} */}
              </div>
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
              <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded mb-2">
                Add to cart
              </button>
              <div className="flex space-x-4 text-white text-sm">
                <button>Share</button>
                <button>Compare</button>
                <button>Like</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="text-[#B88E2F] font-bold py-2 px-6 border-4 border-solid border-[#B88E2F] bg-white w-[20%]">
          Show More
        </button>
      </div>
    </div>
  );
}
