import React from "react";

const AirpodsSupportPage = () => {
  return (
    <div className="p-10 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-semibold mb-4">AirPods Support</h1>
      <p className="mb-8 text-lg">
        Get help pairing, charging, or fixing sound issues with your AirPods.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Pair AirPods</h3>
          <p>Connect AirPods to iPhone, iPad, Mac, or other Bluetooth devices.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Charging Issues</h3>
          <p>Ensure your case and earbuds charge properly with original accessories.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Sound Problems</h3>
          <p>Fix low audio, static, or connection interruptions.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Service and Replacement</h3>
          <p>Get replacements or repair under AppleCare+ coverage.</p>
        </div>
      </div>
    </div>
  );
};

export default AirpodsSupportPage;
