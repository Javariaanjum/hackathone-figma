import { BsViewList } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
const Show = () => {
  return (
    <div className="w-full h-[100px] relative bg-[#f9f1e7] flex items-center justify-between px-8">
      {/* Filter Section */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          < HiAdjustmentsHorizontal className="h-5 w-5 ml-16 text-black" />
          <span className="ml-2   text-black text-xl font-['Poppins']">Filter</span>
         
        </div>
        <div className="flex items-center space-x-4 ">   
          <div className="w-7 h-7  border rounded-md"></div>
      
        </div>
      </div>
      {/* Results Section */}
      <div className="flex items-center space-x-4">
      <HiViewGrid  className="h-5 w-5 text-black" />
      <BsViewList  className="h-5 w-5 text-black" />
        <div className="w-px h-7 bg-gray-400"></div> 
        <span className="text-black text-base font-['Poppins']">
        Showing 1–16 of 32 results
        
        </span>
      </div>

      {/* Show and Sort By Section */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center">
          <span className="text-black text-xl font-['Poppins']">Show</span>
          <div className="w-[55px] h-[55px] ml-4 bg-white flex items-center justify-center border rounded-md">
            <span className="text-[#9f9f9f] text-xl font-['Poppins']">16</span>
          </div>
        </div>
        <div className="flex items-center">         
          <span className="text-black text-xl font-['Poppins']">Short by</span>
          <div className="w-[188px] h-[55px] ml-4 bg-white flex items-center justify-center border rounded-md">
            <span className="text-[#9f9f9f] text-xl font-['Poppins']">Default</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
