import Image from 'next/image';
import Image1 from '../public/Image.png';
import Image2 from '../public/Rectangle.png';

const Peace = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto p-6">
        {/* Left Side - Images */}
        <div className="relative">
          <div className="relative w-full h-96">
            <Image 
              src={Image1} 
              alt="Interior 1" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
              layout="fill"
            />
          </div>
          <div className="relative w-full h-96 mt-6">
            <Image 
              src={Image2} 
              alt="Interior 2" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
              layout="fill"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 py-2 px-4 rounded shadow-md">
            {/* <h2 className="text-lg font-bold text-center">Minimalist Living</h2> */}
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">
            50+ Beautiful Rooms Inspiration
          </h1>
          <p className="text-lg text-gray-600">
            Our designers have created numerous beautiful room prototypes to inspire you.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded transition duration-200">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Peace;
