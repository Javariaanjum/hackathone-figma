import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Sanity se images fetch karne ka function
async function getImages() {
  try {
    const images = await client.fetch(`*[_type == "product"][0..8]{ productImage }`);
    return images;
  } catch (error) {
    console.error("Sanity Fetch Error:", error);
    return [];
  }
}

export default async function Shop() {
  const images = await getImages(); // Fetching images from Sanity

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-xl font-semibold text-gray-600">Share your setup with</p>
        <h1 className="text-5xl font-bold text-gray-800">#FuniroFurniture</h1>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={urlFor(image.productImage).width(400).height(400).url()}
                alt={`Product Image ${index + 1}`}
                width={400}
                height={400}
                className="object-cover rounded-lg"
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-4">No images found.</p>
        )}
      </div>
    </div>
  );
}
