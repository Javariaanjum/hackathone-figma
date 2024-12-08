import Image from "next/image";
import Image1 from "../public/hero.png";
import Image2 from "../public/Featured Products.png";
import Image3 from "../public/Featured.png";
import Image4 from "../public/Products.png";
import Image5 from "../public/picture.png";
import Image6 from "../public/345246.png";
import Image7 from "../public/76589.png";
import Image8 from "../public/photo.png";

const products = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    discount: "-30%",
    image: Image1,
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: Image2,
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    discount: "-50%",
    image: Image3,
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
    image: Image4,
  },
  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    image: Image5,
  },
  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    tag: "New",
    image: Image6,
  },
  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    discount: "-50%",
    image: Image7,
  },
  {
    id: 8,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    tag: "New",
    image: Image8,
  },
];

export default function ProductGrid() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Our Products</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xl font-bold text-gray-900">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm line-through text-gray-500">
                    {product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Hover Actions */}
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

      {/* Show More Button */}
      <div className="text-center mt-8">
        <button className="bg-yellow-500 text-white font-bold py-2 px-6 rounded hover:bg-yellow-600 transition-colors">
          Show More
        </button>
      </div>
    </div>
  );
}














