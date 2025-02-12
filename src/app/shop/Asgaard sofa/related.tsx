import Image from "next/image"
import P1 from "../../public/image 1.png"
import P2 from "../../public/image 2.png"
import P3 from "../../public/image 3.png"
import P4 from "../../public/image 4.png"
export default function Related(){
    return(
<div className="Group19 w-[1440px] h-[879px] relative mt-[800px]">
  <div className="Rectangle6 w-[1440px] h-[777px] left-0 top-[102px] absolute bg-white" />
  
  {/* Related Products Title */}
  <div className="RelatedProducts left-[539px]  absolute text-black text-4xl font-medium font-['Poppins']">Related Products</div>

  <div className="Frame8 h-[446px] left-[52px] top-[54px] absolute justify-start items-center gap-8 inline-flex">
    <div className="FeaturedProducts w-[285px] h-[446px] relative">
      <div className="Bg w-[285px] h-[145px] left-0 top-[301px] absolute bg-[#f4f5f7]" />
      <div className="Description w-[249px] h-[99px] left-[16px] top-[317px] absolute">
        <div className="Frame6 h-[30px] left-0 top-[69px] absolute justify-start items-center gap-4 inline-flex">
          <div className="FixPrice text-[#3a3a3a] text-xl font-semibold font-['Poppins'] leading-[30px]">Rp 2.500.000</div>
          <div className="FixPrice text-[#b0b0b0] text-base font-normal font-['Poppins'] line-through leading-normal">Rp 3.500.000</div>
        </div>
        <div className="ProductName w-[138px] h-[61px] left-0 top-0 absolute">
          <div className="ProductName left-0 top-0 absolute text-[#3a3a3a] text-2xl font-semibold font-['Poppins'] leading-[28.80px]">Syltherine</div>
          <div className="SortDescription left-0 top-[37px] absolute text-[#898989] text-base font-medium font-['Poppins'] leading-normal">Stylish cafe chair</div>
        </div>
      </div>
      <div className="Images w-[285px] h-[301px] left-0 top-0 absolute">
        <Image className="Image1 w-[285px] h-[301px] left-0 top-0 absolute"src={P1} alt="P 1" />
      </div>
      <div className="Label w-12 h-12 left-[213px] top-[24px] absolute">
        <div className="Discount w-12 h-12 left-0 top-0 absolute">
          <div className="Ellipse3 w-12 h-12 left-0 top-0 absolute bg-[#e97171] rounded-full" />
          <div className="30 left-[5px] top-[12px] absolute text-white text-base font-medium font-['Poppins'] leading-normal">-30%</div>
        </div>
      </div>
    </div>

    <div className="FeaturedProducts w-[285px] h-[446px] relative">
      <div className="Bg w-[285px] h-[145px] left-0 top-[301px] absolute bg-[#f4f5f7]" />
      <div className="Description w-[138px] left-[16px] top-[317px] absolute">
        <div className="Frame6 h-[30px] left-0 top-[69px] absolute justify-start items-center gap-4 inline-flex">
          <div className="FixPrice text-[#3a3a3a] text-xl font-semibold font-['Poppins'] leading-[30px]">Rp 2.500.000</div>
        </div>
        <div className="ProductName w-[138px] h-[61px] left-0 top-0 absolute">
          <div className="ProductName left-0 top-0 absolute text-[#3a3a3a] text-2xl font-semibold font-['Poppins'] leading-[28.80px]">Leviosa</div>
          <div className="SortDescription left-0 top-[37px] absolute text-[#898989] text-base font-medium font-['Poppins'] leading-normal">Stylish cafe chair</div>
        </div>
      </div>
      <div className="Images w-[285px] h-[301px] left-0 top-0 absolute">
        <Image className="Image2 w-[285px] h-[301px] left-0 top-0 absolute"src={P2} alt="P 2"  />

      </div>
    </div>

    <div className="FeaturedProducts w-[285px] h-[446px] relative">
      <div className="Bg w-[285px] h-[145px] left-0 top-[301px] absolute bg-[#f4f5f7]" />
      <div className="Description w-[254px] h-[99px] left-[16px] top-[317px] absolute">
        <div className="Frame6 h-[30px] left-0 top-[69px] absolute justify-start items-center gap-4 inline-flex">
          <div className="FixPrice text-[#3a3a3a] text-xl font-semibold font-['Poppins'] leading-[30px]">Rp 7.000.000</div>
          <div className="FixPrice text-[#b0b0b0] text-base font-normal font-['Poppins'] line-through leading-normal">Rp 14.000.000</div>
        </div>
        <div className="ProductName w-[121px] h-[61px] left-0 top-0 absolute">
          <div className="ProductName left-0 top-0 absolute text-[#3a3a3a] text-2xl font-semibold font-['Poppins'] leading-[28.80px]">Lolito</div>
          <div className="SortDescription left-0 top-[37px] absolute text-[#898989] text-base font-medium font-['Poppins'] leading-normal">Luxury big sofa</div>
        </div>
      </div>
      <div className="Images w-[285px] h-[301px] left-0 top-0 absolute">
        <Image className="Image3 w-[285px] h-[301px] left-0 top-0 absolute" src={P3} alt="P 3"    />
      </div>
      <div className="Label w-12 h-12 left-[213px] top-[24px] absolute">
        <div className="Discount w-12 h-12 left-0 top-0 absolute">
          <div className="Ellipse3 w-12 h-12 left-0 top-0 absolute bg-[#e97171] rounded-full" />
          <div className="50 left-[5px] top-[12px] absolute text-white text-base font-medium font-['Poppins'] leading-normal">-50%</div>
        </div>
      </div>
    </div>

    <div className="FeaturedProducts w-[285px] h-[446px] relative">
      <div className="Bg w-[285px] h-[145px] left-0 top-[301px] absolute bg-[#f4f5f7]" />
      <div className="Description w-56 left-[16px] top-[317px] absolute">
        <div className="Frame6 h-[30px] left-0 top-[69px] absolute justify-start items-center gap-4 inline-flex">
          <div className="FixPrice text-[#3a3a3a] text-xl font-semibold font-['Poppins'] leading-[30px]">Rp 500.000</div>
        </div>
        <div className="ProductName w-56 h-[61px] left-0 top-0 absolute">
          <div className="ProductName left-0 top-0 absolute text-[#3a3a3a] text-2xl font-semibold font-['Poppins'] leading-[28.80px]">Respira</div>
          <div className="SortDescription left-0 top-[37px] absolute text-[#898989] text-base font-medium font-['Poppins'] leading-normal">Outdoor bar table and stool</div>
        </div>
      </div>
      <div className="Images w-[285px] h-[301px] left-0 top-0 absolute">
        <Image className="Image4 w-[285px] h-[301px] left-0 top-0 absolute" src={P4} alt="P 4"   />
      </div>
      <div className="Label w-12 h-12 left-[213px] top-[24px] absolute">
        <div className="New w-12 h-12 left-0 top-0 absolute">
          <div className="Ellipse3 w-12 h-12 left-0 top-0 absolute bg-[#2ec1ac] rounded-full" />
          <div className="New left-[8px] top-[12px] absolute text-white text-base font-medium font-['Poppins'] leading-normal">New</div>
        </div>
      </div>
    </div>
  </div>

  <div className="ShowMore w-[245px] h-12 left-[550px] top-[544px] absolute">
    <div className="Rectangle27 w-[245px] h-12 left-0 top-0 absolute bg-white border border-[#b88e2f]" />
    <div className="ShowMore left-[82px] top-[12px] absolute text-[#b88e2f] text-base font-semibold font-['Poppins'] leading-normal">Show More</div>
  </div>
</div>


  






    )
}




   
        

    
