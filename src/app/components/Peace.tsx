import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Sanity se images fetch karne ka function
async function getImages() {
  const images = await client.fetch(`*[_type == "product"][3..8]{ productImage }`);
  return images;
}

export default async function Peace() {
  const images = await getImages(); // Fetching images from Sanity

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-0 h-screen">
        {/* Left Section */}
        <div className="bg-[#FCF8F3] flex items-center justify-center">
          <div className="px-12 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-6">
              50+ Beautiful rooms inspiration
            </h1>
            <p className="text-lg text-gray-600 w-[368px] mt-6">
              Our designer already made a lot of beautiful prototypes of rooms that inspire you.
            </p>
            <button className="mt-6 bg-[#B88E2F] hover:bg-yellow-600 text-white font-bold py-3 px-5 rounded-md">
              Explore More
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex gap-6">
            {/* First Image (Sanity se fetched) */}
            {images.length > 0 && (
              <div className="w-[393px] h-[582px] relative">
                <Image
                  src={urlFor(images[0].productImage).url()}
                  alt="Sanity Image 1"
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                  width={393}
                  height={582}
                />
              </div>
            )}

            {/* Second Image (Sanity se fetched) */}
            {images.length > 1 && (
              <div className="w-[372px] h-[486px] relative">
                <Image
                  src={urlFor(images[1].productImage).url()}
                  alt="Sanity Image 2"
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                  width={372}
                  height={486}
                />
              </div>
            )}
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center space-x-4 mt-6">
            <div className="w-6 h-6 rounded-full border-2 border-yellow-500 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            </div>
            <div className="w-6 h-6 rounded-full border-2 bg-gray-300 border-gray-300"></div>
            <div className="w-6 h-6 rounded-full border-2 bg-gray-300 border-gray-300"></div>
            <div className="w-6 h-6 rounded-full border-2 bg-gray-300 border-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
