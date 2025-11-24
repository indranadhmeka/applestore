import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-blue-50 py-12 mt-12">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Stay Updated with AppleStores
        </h2>
        <p className="text-gray-600 mb-6">
          Get the latest news, product launches, and exclusive offers straight to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
