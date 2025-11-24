import React from "react";

const AppleCarePage = () => {
  return (
    <div className="p-10 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-semibold mb-4">AppleCare+</h1>
      <p className="text-lg mb-6">
        AppleCare+ gives you extended warranty, accidental damage coverage, and
        priority support for all your devices.
      </p>

      <img
        src="/images/support/applecare-products.png"
        alt="AppleCare"
        className="w-full rounded-2xl shadow mb-10"
      />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-2">Coverage</h3>
          <p>
            Protect against accidental damage, battery issues, and hardware
            defects.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-2">Service Fees</h3>
          <p>
            Screen damage: ₹2500, other accidental damage: ₹8900, battery:
            free replacement if below 80%.
          </p>
        </div>
      </div>

      <div className="text-center mt-10">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700">
          Get Coverage
        </button>
      </div>
    </div>
  );
};

export default AppleCarePage;
