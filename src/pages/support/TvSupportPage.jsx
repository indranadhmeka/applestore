import React from "react";

const TvSupportPage = () => {
  return (
    <div className="p-10 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-semibold mb-4">Apple TV Support</h1>
      <p className="mb-8 text-lg">
        Learn how to use Apple TV, Apple TV+, and manage your entertainment.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Set Up Apple TV</h3>
          <p>Connect to Wi-Fi, sign in with your Apple ID, and start streaming.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Apple TV+ Subscription</h3>
          <p>Watch award-winning shows and films with your Apple TV+ account.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Remote Help</h3>
          <p>Fix unresponsive Apple TV remotes or pair new ones.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">AirPlay</h3>
          <p>Stream from your iPhone or Mac directly to your TV.</p>
        </div>
      </div>
    </div>
  );
};

export default TvSupportPage;
