import React from "react";

const HomePodMiniPage = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">HomePod mini</h1>
      <p className="text-gray-700 mb-4 text-lg">₹10,900</p>

      <div className="flex flex-wrap gap-4 mb-6">
        <img src="/images/products/homepodmini_1.jpg" alt="HomePod mini" className="w-60 rounded-xl shadow-md" />
        <img src="/images/products/homepodmini_2.jpg" alt="HomePod mini" className="w-60 rounded-xl shadow-md" />
        <img src="/images/products/homepodmini_3.jpg" alt="HomePod mini" className="w-60 rounded-xl shadow-md" />
      </div>

      <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>360-degree audio</li>
        <li>Siri built-in</li>
        <li>Seamless integration with Apple devices</li>
        <li>Compact, stylish design</li>
      </ul>

      <p className="text-gray-600 max-w-3xl">
        HomePod mini delivers impressive sound and intelligence in a compact design that’s perfect for any room in your home.
      </p>
    </div>
  );
};

export default HomePodMiniPage;
