import Image from "next/image";
import Image1 from "../public/Mask Group.png"; 
import Image2 from "../public/Image-living room.png"; 
import Image3 from "../public/bedroom.png"; 

export default function BrowseRange() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Browse The Range</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {/* Dining Card */}
        <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg">
          <Image
            src={Image1}
            alt="Dining"
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="text-center py-4">
            <h3 className="text-lg font-semibold text-gray-800">Dining</h3>
          </div>
        </div>

        {/* Living Card */}
        <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg">
          <Image
            src={Image2}
            alt="Living"
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="text-center py-4">
            <h3 className="text-lg font-semibold text-gray-800">Living</h3>
          </div>
        </div>

        {/* Bedroom Card */}
        <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg">
          <Image
            src={Image3}
            alt="Bedroom"
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="text-center py-4">
            <h3 className="text-lg font-semibold text-gray-800">Bedroom</h3>
          </div>
        </div>
      </div>
    </div>
  );
}







