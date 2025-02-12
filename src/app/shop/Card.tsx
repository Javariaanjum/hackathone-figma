// "use client"
// import Image from "next/image";
// import Image1 from "../public/image 1.png";
// import Image2 from "../public/image 2.png";
// import Image3 from "../public/image 3.png";
// import Image4 from "../public/image 4.png" ;
// import Image5 from  "../public/image 1.png";
// import Image6 from  "../public/image 2.png";
// import Image7 from  "../public/image 3.png";
// import Image8 from  "../public/image 4.png";
// import Image9 from   "../public/image 1.png";
// import Image10 from  "../public/image 2.png";
// import Image11 from  "../public/image 3.png";
// import Image12 from  "../public/image 4.png";
// import Image13 from   "../public/image 1.png";
// import Image14 from   "../public/image 2.png";
// import Image15 from  "../public/image 3.png";
// import Image16 from  "../public/image 4.png";
// import { useEffect, useState } from 'react';
// import { allProducts } from '@/sanity/lib/queries';
// import {client} from "@/sanity/lib/client";
// import { Product } from '@/types/products';

// const products = [
//     {
//         id: 1,
//         name: "Syltherine",
//         description: "Stylish cafe chair",
//         price: "Rp 2.500.000",
//         originalPrice: "Rp 3.500.000",
//         discount: "-30%",
//         image: Image1,
//     },
//     {
//         id: 2,
//         name: "Leviosa",
//         description: "Stylish cafe chair",
//         price: "Rp 2.500.000",
//         image: Image2,
//     },
//     {
//         id: 3,
//         name: "Lolito",
//         description: "Luxury big sofa",
//         price: "Rp 7.000.000",
//         originalPrice: "Rp 14.000.000",
//         discount: "-50%",
//         image: Image3,
//     },
//     {
//         id: 4,
//         name: "Respira",
//         description: "Outdoor bar table and stool",
//         price: "Rp 500.000",
//         tag: "New",
//         image: Image4,
//     },
//     {
//         id: 5,
//         name: "Syltherine",
//         description: "Stylish cafe chair",
//         price: "Rp 2.500.000",
//         originalPrice: "Rp 3.500.000",
//         discount: "-30%",
//         image: Image5,
//     },
//     {
//         id: 6,
//         name: "Leviosa",
//         description: "Stylish cafe chair",
//         price: "Rp 2.500.000",
//         image: Image6,
//     },
//     {
//         id: 7,
//         name: "Lolito",
//         description: "Luxury big sofa",
//         price: "Rp 7.000.000",
//         originalPrice: "Rp 14.000.000",
//         discount: "-50%",
//         image: Image7,
//     },
//     {
//         id: 8,
//         name: "Respira",
//         description: "Outdoor bar table and stool",
//         price: "Rp 500.000",
//         tag: "New",
//         image: Image8,
//     },
//     {
//         id: 9,
//         name: "Syltherine",
//         description: "Stylish cafe chair",
//         price: "Rp 2.500.000",
//         originalPrice: "Rp 3.500.000",
//         discount: "-30%",
//         image: Image9,
//     },
//     {
//         id: 10,
//         name: "Leviosa",
//         description: "Stylish cafe chair",
//         price: "Rp 2.500.000",
//         image: Image10,
//     },
//     {
//         id: 11,
//         name: "Lolito",
//         description: "Luxury big sofa",
//         price: "Rp 7.000.000",
//         originalPrice: "Rp 14.000.000",
//         discount: "-50%",
//         image: Image11,
//     },
//     {
//         id: 12,
//         name: "Respira",
//         description: "Outdoor bar table and stool",
//         price: "Rp 500.000",
//         tag: "New",
//         image: Image12,
//     },
//     {
//         id: 13,
//         name: "Syltherine",
//         description: "Stylish cafe chair",
//         price: "Rp 2.500.000",
//         originalPrice: "Rp 3.500.000",
//         discount: "-30%",
//         image: Image13,
//     },
//     {
//         id: 14,
//         name: "Leviosa",
//         description: "Stylish cafe chair",
//         price: "Rp 2.500.000",
//         image: Image14,
//     },
//     {
//         id: 15,
//         name: "Lolito",
//         description: "Luxury big sofa",
//         price: "Rp 7.000.000",
//         originalPrice: "Rp 14.000.000",
//         discount: "-50%",
//         image: Image15,
//     },
//     {
//         id: 16,
//         name: "Respira",
//         description: "Outdoor bar table and stool",
//         price: "Rp 500.000",
//         tag: "New",
//         image: Image16,
//     },
// ];

// export default function Cards() {

// const [product, setProdcut] = useState<Product[]>([])

// useEffect( () => {

//     async function fetchproduct(){
//         const fetchedProduct :Product[] = await client.fetch(allProducts)
//         setProdcut(fetchedProduct)
//     }
//     fetchproduct()
// },[])




//     return (  
//             {products.map((product) => (
//                 <div
//                     key={product.id}
//                     className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
//                 >
//             {product.image && (
//                         <Image
//                             src={urlfor(product.image).url()}
//                             alt={product.productName}
//                             className="w-full h-48 object-cover rounded-md"
//                         />
//            ) }
            
//                         {/* Discount/Tag */}
//                         {product.discount && (
//                             <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
//                                 {product.discount}
//                             </div>
//                         )}
//                         {product.tag && (
//                             <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
//                                 {product.tag}
//                             </div>
//                         )}
//                     </div>
//                     {/* Product Info */}
//                     <div className="p-4">
//                         <h3 className="text-lg font-semibold text-gray-800">
//                             {product.name}
//                         </h3>
//                         <p className="text-sm text-gray-600">{product.description}</p>
//                         <div className="flex items-center justify-between mt-2">
//                             <span className="text-xl font-bold text-gray-900">
//                                 {product.price}
//                             </span>
//                             {product.originalPrice && (
//                                 <span className="text-sm line-through text-gray-500">
//                                     {product.originalPrice}
//                                 </span>
//                             )}
//                         </div>
//                     </div>
//                     </div>
                             
                    
//             <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
//             <div className="bg-yellow-500 text-white font-bold py-2 px-4 rounded mb-2"
//               >
//                 Add to cart
//               </div>

          
//                         <div className="flex space-x-4 text-white text-sm">
//                             <button>Share</button>
//                             <button>Compare</button>
//                             <button>Like</button>
//                         </div>
//                     </div>
            
//             ))}

  
        
//             <div className="flex items-center justify-center space-x-4 ml-[600px]">
//                 <button className="bg-[#B88E2F] text-white rounded-md px-4 py-2 mt-9">1</button>
//                 <button className="bg-gray-200 text-gray-700 rounded-md px-4 py-2 mt-9">2</button>
//                 <button className="bg-gray-200 text-gray-700 rounded-md px-4 py-2 mt-9">3</button>
//                 <button className="bg-gray-200 text-gray-700 rounded-md px-4 py-2 mt-9">Next</button>
//             </div>
// </div>
//     );
// }













import Image from "next/image";
import Image1 from "../public/image 1.png";
import Image2 from "../public/image 2.png";
import Image3 from "../public/image 3.png";
import Image4 from "../public/image 4.png";
import Image5 from "../public/image 1.png";
import Image6 from "../public/image 2.png";
import Image7 from "../public/image 3.png";
import Image8 from "../public/image 4.png";
import Image9 from "../public/image 1.png";
import Image10 from "../public/image 2.png";
import Image11 from "../public/image 3.png";
import Image12 from "../public/image 4.png";
import Image13 from "../public/image 1.png";
import Image14 from "../public/image 2.png";
import Image15 from "../public/image 3.png";
import Image16 from "../public/image 4.png";

const products = [
    { id: 1, name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000", originalPrice: "Rp 3.500.000", discount: "-30%", image: Image1 },
    { id: 2, name: "Leviosa", description: "Stylish cafe chair", price: "Rp 2.500.000", image: Image2 },
    { id: 3, name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000", originalPrice: "Rp 14.000.000", discount: "-50%", image: Image3 },
    { id: 4, name: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000", tag: "New", image: Image4 },
    { id: 5, name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000", originalPrice: "Rp 3.500.000", discount: "-30%", image: Image5 },
    { id: 6, name: "Leviosa", description: "Stylish cafe chair", price: "Rp 2.500.000", image: Image6 },
    { id: 7, name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000", originalPrice: "Rp 14.000.000", discount: "-50%", image: Image7 },
    { id: 8, name: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000", tag: "New", image: Image8 },
    { id: 9, name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000", originalPrice: "Rp 3.500.000", discount: "-30%", image: Image9 },
    { id: 10, name: "Leviosa", description: "Stylish cafe chair", price: "Rp 2.500.000", image: Image10 },
    { id: 11, name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000", originalPrice: "Rp 14.000.000", discount: "-50%", image: Image11 },
    { id: 12, name: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000", tag: "New", image: Image12 },
    { id: 13, name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000", originalPrice: "Rp 3.500.000", discount: "-30%", image: Image13 },
    { id: 14, name: "Leviosa", description: "Stylish cafe chair", price: "Rp 2.500.000", image: Image14 },
    { id: 15, name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000", originalPrice: "Rp 14.000.000", discount: "-50%", image: Image15 },
    { id: 16, name: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000", tag: "New", image: Image16 },
];

export default function Cards() {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="relative border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
                        {/* Product Image */}
                        <Image
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-md"
                        />

                        {/* Discount/Tag */}
                        {product.discount && (
                            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                {product.discount}
                            </div>
                        )}
                        {product.tag && (
                            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                {product.tag}
                            </div>
                        )}

                        {/* Product Info */}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                            <p className="text-sm text-gray-600">{product.description}</p>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-xl font-bold text-gray-900">{product.price}</span>
                                {product.originalPrice && (
                                    <span className="text-sm line-through text-gray-500">{product.originalPrice}</span>
                                )}
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
                            <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded mb-2">
                                Add to Cart
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

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-4 ml-[600px] mt-20 mr-[600px]">
                <button className="bg-[#B88E2F] text-white rounded-md px-4 py-2">1</button>
                <button className="bg-gray-200 text-gray-700 rounded-md px-4 py-2">2</button>
                <button className="bg-gray-200 text-gray-700 rounded-md px-4 py-2">3</button>
                <button className="bg-gray-200 text-gray-700 rounded-md px-4 py-2">Next</button>
            </div>
        </div>
    );
}








