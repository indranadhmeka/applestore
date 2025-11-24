import React from "react";

const RepairPage = () => {
  return (
    <div className="p-10 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-semibold mb-4">Apple Repair & Service</h1>
      <p className="mb-6 text-lg">
        Find out how to get your Apple devices repaired and serviced.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow p-6 rounded-2xl">
          <h3 className="text-2xl font-medium mb-2">Start a Repair</h3>
          <p>Tell us what’s wrong, and we’ll connect you to the right options.</p>
        </div>
        <div className="bg-white shadow p-6 rounded-2xl">
          <h3 className="text-2xl font-medium mb-2">Track Your Repair</h3>
          <p>Check your repair status online with your Apple ID.</p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">Service options</h3>
        <ul className="list-disc ml-6">
          <li>Apple Authorized Service Providers</li>
          <li>Pickup and Delivery Service</li>
          <li>Same-day Service in Apple Stores</li>
        </ul>
      </div>
    </div>
  );
};

export default RepairPage;
