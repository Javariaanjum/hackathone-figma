export default function Total(){
    return(  
<div className="w-full max-w-[1440px] mx-auto bg-white relative">
  <div className="flex flex-wrap justify-between gap-6 p-8">
    {/* Billing Details Section */}
    <div className="w-full lg:w-[48%] bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-4xl font-semibold text-black mb-6">Billing details</h2>

      {/* Input Fields */}
      <div className="space-y-6">
        {/* First Name and Last Name */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-base font-medium text-black mb-2">First Name</label>
            <input
              type="text"
              className="w-full h-12 px-4 border border-gray-400 rounded-lg"
              placeholder="Enter your first name"
            />
          </div>
          <div className="flex-1">
            <label className="block text-base font-medium text-black mb-2">Last Name</label>
            <input
              type="text"
              className="w-full h-12 px-4 border border-gray-400 rounded-lg"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-base font-medium text-black mb-2">
            Company Name (Optional)
          </label>
          <input
            type="text"
            className="w-full h-12 px-4 border border-gray-400 rounded-lg"
            placeholder="Enter company name"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-base font-medium text-black mb-2">Street Address</label>
          <input
            type="text"
            className="w-full h-12 px-4 border border-gray-400 rounded-lg"
            placeholder="Enter street address"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-base font-medium text-black mb-2">Country / Region</label>
          <select className="w-full h-12 px-4 border border-gray-400 rounded-lg">
            <option>Sri Lanka</option>
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block text-base font-medium text-black mb-2">Town / City</label>
          <input
            type="text"
            className="w-full h-12 px-4 border border-gray-400 rounded-lg"
            placeholder="Enter city"
          />
        </div>

        {/* Province */}
        <div>
          <label className="block text-base font-medium text-black mb-2">Province</label>
          <select className="w-full h-12 px-4 border border-gray-400 rounded-lg">
            <option>Western Province</option>
          </select>
        </div>

        {/* ZIP Code */}
        <div>
          <label className="block text-base font-medium text-black mb-2">ZIP Code</label>
          <input
            type="text"
            className="w-full h-12 px-4 border border-gray-400 rounded-lg"
            placeholder="Enter ZIP code"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-base font-medium text-black mb-2">Phone</label>
          <input
            type="tel"
            className="w-full h-12 px-4 border border-gray-400 rounded-lg"
            placeholder="Enter phone number"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-base font-medium text-black mb-2">Email Address</label>
          <input
            type="email"
            className="w-full h-12 px-4 border border-gray-400 rounded-lg"
            placeholder="Enter email address"
          />
        </div>

        {/* Additional Info */}
        <div>
          <textarea
            className="w-full h-32 p-4 border border-gray-400 rounded-lg"
            placeholder="Additional information"
          ></textarea>
        </div>
      </div>
    </div>

    {/* Order Summary Section */}
    <div className="w-full lg:w-[48%] bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-medium text-black mb-6">Your Order</h2>

      {/* Order Items */}
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-base font-normal text-gray-800">Asgaard sofa</span>
          <span className="text-lg font-semibold text-black">Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-base font-normal text-gray-800">Subtotal</span>
          <span className="text-lg font-semibold text-black">Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-base font-normal text-gray-800">Total</span>
          <span className="text-xl font-bold text-[#b88e2f]">Rs. 250,000.00</span>
        </div>
      </div>

      {/* Payment Options */}
      <div className="mt-6">
        <div className="flex items-center gap-3 mb-3">
          <input type="radio" name="payment" className="w-4 h-4" />
          <span className="text-base font-medium text-black">Direct Bank Transfer</span>

        </div>
        <div className="flex items-center gap-3 mb-3">
          <input type="radio" name="payment" className="w-4 h-4" />
          <span className="text-base font-medium text-black">Cash on Delivery</span>
          <h1>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</h1>
        </div>
      </div>

      {/* Place Order Button */}
      <button className="w-full h-12 mt-6 bg-black text-white text-xl font-medium rounded-lg">
        Place Order
      </button>
    </div>
  </div>
</div>


    )
}