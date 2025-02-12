import Image from "next/image";
import Picture1 from "../../public/Group 107.png"
import Picture2 from "../../public/Mask group 123.png"





export default function Description(){  
return(  
<div className="Group110 w-full max-w-[1497.5px] h-auto relative mx-auto">
  {/* Rectangle Background */}
  <div className="Rectangle49 w-full h-[744px] bg-white absolute left-0 top-0" />
  
  {/* Top Border Line */}
  <div className="Line8 w-full h-[1px] border border-[#d9d9d9] absolute top-0 left-0"></div>
  
  {/* Header Section (Description, Additional Info, Reviews) */}
  <div className="Group105 w-[649px] h-9 absolute left-[50%] transform -translate-x-[50%] top-[60px] flex justify-between items-center">
    <div className="Description text-black text-2xl font-medium font-['Poppins']">Description</div>
    <div className="AdditionalInformation text-[#9f9f9f] text-2xl font-normal font-['Poppins']">Additional Information</div>
    <div className="Reviews5 text-[#9f9f9f] text-2xl font-normal font-['Poppins']">Reviews [5]</div>
  </div>
  
  {/* Product Details Section */}
  <div className="Group108 w-full max-w-[1026px] h-[174px] absolute left-[50%] transform -translate-x-[50%] top-[121px]">
    <div className="EmbodyingTheRawWaywardSpiritOfRockNRollTheKilburnPortableActiveStereoSpeakerTakesTheUnmistakableLookAndSoundOfMarshallUnplugsTheChordsAndTakesTheShowOnTheRoad w-full h-12 text-justify text-[#9f9f9f] text-base font-normal font-['Poppins']">
      Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
    </div>
    <div className="WeighingInUnder7PoundsTheKilburnIsALightweightPieceOfVintageStyledEngineeringSettingTheBarAsOneOfTheLoudestSpeakersInItsClass w-full h-24 text-justify text-[#9f9f9f] text-base font-normal font-['Poppins'] mt-4">
    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
    </div>
  </div>
  
  {/* Image Section */}
  <div className="Group109 w-full max-w-[1239px] h-[348px] absolute left-[50%] transform -translate-x-[50%] top-[331px] flex justify-between space-x-8">
    {/* Image 1 */}
    <div className="Group107 w-[605px] h-[348px] bg-[#f9f1e7] rounded-[10px] relative">
      <div className="MaskGroup w-full h-full absolute bg-[#d9d9d9] rounded-[10px]">
        <Image className="product-image w-full h-full object-cover rounded-[10px]" src={Picture1} alt="Picture 1" />
      </div>
    </div>
    
    {/* Image 2 */}
    <div className="Group106 w-[605px] h-[348px] bg-[#f9f1e7] rounded-[10px] relative">
      <div className="MaskGroup w-full h-full absolute  bg-[#d9d9d9]  rounded-[10px]">
        <Image className="product-image w-full h-full object-cover rounded-[10px]" src={Picture2} alt="Picture 2" />
      </div>
    </div>
  </div>
  
  {/* Bottom Border Line */}
  <div className="Line9 w-full h-[1px] border border-[#d9d9d9] absolute bottom-0 left-0"></div>
</div>

)
}


