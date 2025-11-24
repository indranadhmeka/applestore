import React from "react";

const MacBookAirM3Page = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">MacBook Air M3</h1>
      <p className="text-gray-700 mb-4 text-lg">₹1,29,900</p>

      <div className="flex flex-wrap gap-4 mb-6">
        <img src="/images/products/macbookairm3_1.jpg" alt="MacBook Air M3" className="w-60 rounded-xl shadow-md" />
        <img src="/images/products/macbookairm3_2.jpg" alt="MacBook Air M3" className="w-60 rounded-xl shadow-md" />
        <img src="/images/products/macbookairm3_3.jpg" alt="MacBook Air M3" className="w-60 rounded-xl shadow-md" />
      </div>

      <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>Apple M3 chip with 8-core CPU</li>
        <li>Up to 18 hours of battery life</li>
        <li>13.6-inch Liquid Retina Display</li>
        <li>Silent, fanless design</li>
      </ul>

      <p className="text-gray-600 max-w-3xl">
        The MacBook Air M3 is incredibly powerful and portable, built for both professionals and students. Experience performance that lasts all day.
      </p>
    </div>
  );
};

export default MacBookAirM3Page;
