import React from "react";

const GetSupportPage = () => {
  return (
    <div className="p-10 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-semibold mb-4">Get Support</h1>
      <p className="mb-6 text-lg">
        We’re here to help. Choose your product to find the right support
        options.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        {["iPhone", "Mac", "iPad", "Watch", "AirPods"].map((product) => (
          <div
            key={product}
            className="bg-white shadow p-6 rounded-2xl hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">{product}</h3>
            <p>Get repair, warranty, and troubleshooting help.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetSupportPage;
