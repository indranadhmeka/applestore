import React from "react";

const AirPodsPro2Page = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">AirPods Pro 2</h1>
      <p className="text-gray-700 mb-4 text-lg">₹24,900</p>

      <div className="flex flex-wrap gap-4 mb-6">
        <img src="/images/products/airpodspro2_1.jpg" alt="AirPods Pro 2" className="w-60 rounded-xl shadow-md" />
        <img src="/images/products/airpodspro2_2.jpg" alt="AirPods Pro 2" className="w-60 rounded-xl shadow-md" />
        <img src="/images/products/airpodspro2_3.jpg" alt="AirPods Pro 2" className="w-60 rounded-xl shadow-md" />
      </div>

      <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>Active Noise Cancellation & Transparency Mode</li>
        <li>H2 chip for immersive sound</li>
        <li>MagSafe Charging Case with U1 chip</li>
        <li>Personalized Spatial Audio</li>
      </ul>

      <p className="text-gray-600 max-w-3xl">
        AirPods Pro 2 deliver an unmatched listening experience with rich, immersive sound, adaptive transparency, and next-level noise cancellation.
      </p>
    </div>
  );
};

export default AirPodsPro2Page;
