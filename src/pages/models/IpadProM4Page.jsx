import React from "react";

const IpadProM4Page = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">iPad Pro M4</h1>
      <p className="text-gray-700 mb-4 text-lg">₹1,19,900</p>

      <div className="flex flex-wrap gap-4 mb-6">
        <img src="/images/products/ipadprom4_1.jpg" alt="iPad Pro M4" className="w-60 rounded-xl shadow-md" />
        <img src="/images/products/ipadprom4_2.jpg" alt="iPad Pro M4" className="w-60 rounded-xl shadow-md" />
        <img src="/images/products/ipadprom4_3.jpg" alt="iPad Pro M4" className="w-60 rounded-xl shadow-md" />
      </div>

      <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>Apple M4 chip</li>
        <li>Liquid Retina XDR Display</li>
        <li>Apple Pencil Pro and Magic Keyboard support</li>
        <li>Ultra-thin, ultra-fast design</li>
      </ul>

      <p className="text-gray-600 max-w-3xl">
        The iPad Pro M4 redefines creativity and performance. Designed for artists, developers, and anyone who wants the best tablet in the world.
      </p>
    </div>
  );
};

export default IpadProM4Page;
