export default function Touch(){
return(
        <div className="Group162 w-[1440px] h-[1144px] relative">
  {/* Background */}
  <div className="Rectangle50 w-full h-full absolute bg-white" />

  {/* Header Section */}
  <div className="GetInTouchWithUs absolute left-1/2 top-[98px] transform -translate-x-1/2 text-black text-5xl font-semibold font-['Poppins']">
    Get In Touch With Us
  </div>
  <div className="ForMoreInformation w-[644px] absolute left-1/2 top-[159px] transform -translate-x-1/2 text-center text-[#9f9f9f] text-base font-normal font-['Poppins']">
    For more information about our product & services, please feel free to drop us an email. Our staff will always be there to help you out. Do not hesitate!
  </div>

  {/* Main Content */}
  <div className="Group161 w-[1058px] h-[923px] absolute left-1/2 top-[221px] transform -translate-x-1/2 flex">
    {/* Contact Info Section */}
    <div className="Group155 w-[393px] h-[537px] bg-white shadow-md p-8">
      <div className="Address text-black text-2xl font-medium font-['Poppins'] mb-4">Address</div>
      <p className="text-black text-base font-normal font-['Poppins']">
        236 5th SE Avenue, New York, NY 10000, United States
      </p>

      <div className="Phone text-black text-2xl font-medium font-['Poppins'] mt-8 mb-4">Phone</div>
      <p className="text-black text-base font-normal font-['Poppins']">
        Mobile: +(84) 546-6789<br />
        Hotline: +(84) 456-6789
      </p>

      <div className="WorkingTime text-black text-2xl font-medium font-['Poppins'] mt-8 mb-4">Working Time</div>
      <p className="text-black text-base font-normal font-['Poppins']">
        Monday-Friday: 9:00 - 22:00<br />
        Saturday-Sunday: 9:00 - 21:00
      </p>
    </div>

    {/* Form Section */}
    <div className="Group160 w-[635px] h-full bg-white shadow-md p-8">
      <form className="flex flex-col gap-6">
        {/* Name Field */}
        <div>
          <label className="block text-black text-base font-medium font-['Poppins'] mb-2">
          Your name
          </label>
          <input 
            type="text" 
            className="w-full h-[50px] border border-[#9f9f9f] rounded-[10px] px-4 text-black"
            placeholder="Your Name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-black text-base font-medium font-['Poppins'] mb-2">
            Email Address
          </label>
          <input 
            type="email" 
            className="w-full h-[50px] border border-[#9f9f9f] rounded-[10px] px-4 text-black"
            placeholder="Abc@def.com"
          />
        </div>

        {/* Subject Field */}
        <div>
          <label className="block text-black text-base font-medium font-['Poppins'] mb-2">
            Subject
          </label>
          <input 
            type="text" 
            className="w-full h-[50px] border border-[#9f9f9f] rounded-[10px] px-4 text-black"
            placeholder="This is optional"
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-black text-base font-medium font-['Poppins'] mb-2">
            Message
          </label>
          <textarea 
            className="w-full h-[120px] border border-[#9f9f9f] rounded-[10px] px-4 py-2 text-black"
            placeholder="Hi! I’d like to ask about..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-[237px] h-[55px] bg-[#b88e2f] text-white text-base font-medium rounded-[5px] mx-auto"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>


        
    )
}