import React from "react";

const AppleTV4KPage = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">Apple TV 4K</h1>
      <p className="text-gray-700 mb-4 text-lg">₹18,900</p>

      <div className="flex flex-wrap gap-4 mb-6">
        <img src="/images/products/appletv4k_1.jpg" alt="Apple TV 4K" className="w-60 rounded-xl shadow-md" />
        <img src="/images/products/appletv4k_2.jpg" alt="Apple TV 4K" className="w-60 rounded-xl shadow-md" />
        <img src="/images/products/appletv4k_3.jpg" alt="Apple TV 4K" className="w-60 rounded-xl shadow-md" />
      </div>

      <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>4K Dolby Vision & HDR10+</li>
        <li>A15 Bionic chip</li>
        <li>Wi-Fi and Ethernet models</li>
        <li>Seamless integration with Apple devices</li>
      </ul>

      <p className="text-gray-600 max-w-3xl">
        Apple TV 4K brings the best of TV together with your favorite Apple services for a truly cinematic experience.
      </p>
    </div>
  );
};

export default AppleTV4KPage;
