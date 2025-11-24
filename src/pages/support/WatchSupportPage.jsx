import React from "react";

const WatchSupportPage = () => {
  return (
    <div className="p-10 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-semibold mb-4">Apple Watch Support</h1>
      <p className="mb-8 text-lg">
        Explore setup, features, battery life, and repair options for your Apple Watch.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Set Up Your Watch</h3>
          <p>Pair your Apple Watch with your iPhone and get started fast.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Battery & Charging</h3>
          <p>Extend battery life and learn charging best practices.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Fitness & Health</h3>
          <p>Track workouts and monitor heart rate, ECG, and sleep data.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Repair and Warranty</h3>
          <p>Find authorized service providers for your Watch repairs.</p>
        </div>
      </div>
    </div>
  );
};

export default WatchSupportPage;
