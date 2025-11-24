import React from "react";

const MagSafeChargerPage = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">MagSafe Charger</h1>
      <p className="text-gray-700 mb-4 text-lg">₹4,500</p>

      <div className="flex flex-wrap gap-4 mb-6">
        <img src="/images/products/magsafe_1.jpg" alt="MagSafe Charger" className="w-60 rounded-xl shadow-md" />
        <img src="/images/products/magsafe_2.jpg" alt="MagSafe Charger" className="w-60 rounded-xl shadow-md" />
        <img src="/images/products/magsafe_3.jpg" alt="MagSafe Charger" className="w-60 rounded-xl shadow-md" />
      </div>

      <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>Fast wireless charging</li>
        <li>Perfect magnetic alignment</li>
        <li>Compatible with iPhone and AirPods</li>
        <li>USB-C connectivity</li>
      </ul>

      <p className="text-gray-600 max-w-3xl">
        MagSafe Charger provides effortless, fast wireless charging with perfect magnetic alignment every time.
      </p>
    </div>
  );
};

export default MagSafeChargerPage;
