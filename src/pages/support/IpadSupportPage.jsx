import React from "react";

const IpadSupportPage = () => {
  return (
    <div className="p-10 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-semibold mb-4">iPad Support</h1>
      <p className="mb-8 text-lg">
        Learn how to use, update, and get the most from your iPad.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">iPadOS Updates</h3>
          <p>Keep your iPad updated for new features and security.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Apple Pencil</h3>
          <p>Pair, charge, and use your Apple Pencil or Apple Pencil Pro.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Accessories</h3>
          <p>Learn about keyboards, cases, and accessories that work with iPad.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Repair & Coverage</h3>
          <p>Check AppleCare+ coverage and repair options for your iPad.</p>
        </div>
      </div>
    </div>
  );
};

export default IpadSupportPage;
