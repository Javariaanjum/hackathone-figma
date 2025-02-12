import Image from "next/image";
import React, { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { Product } from "@/types/products";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import  {addToCart} from "@/app/actions/actions"

export default function Can() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
    const fetchedProducts: Product[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

const  handleAddToCart = (e:React.MouseEvent, product:Product) => {
  e.preventDefault()
  addToCart(product)
}



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (  
        <div
          key={product._id}
          className=" border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
        >
          <Link href={`/product/${product.slug.current}`}>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.productName}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
              )}
            
                <h2 className="text-lg font-semibold mt-4">
                  {product.productName}
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  {product.price? `$${product.price}` : "Price not available"}
                </p>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:rounded-lg
                hover:scale-110 transition-transform duration-300 ease-in-out"
                
                onClick={(e) => handleAddToCart(e, product)}
                >
               Add To Cart
                </button>
             </Link>
                </div>
             ))}
    </div>

  );
};