import React from "react";

const IphoneSupportPage = () => {
  return (
    <div className="p-10 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-semibold mb-4">iPhone Support</h1>
      <p className="mb-8 text-lg">
        Everything you need to know about using, fixing, and maintaining your
        iPhone.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Forgot your password?</h3>
          <p>Reset your Apple ID password easily.</p>
        </div>

        <div className="bg-white shadow p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Battery & Charging</h3>
          <p>Maximize battery life and fix charging issues.</p>
        </div>

        <div className="bg-white shadow p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Repair Options</h3>
          <p>Book a repair or service your device with AppleCare+.</p>
        </div>
      </div>
    </div>
  );
};

export default IphoneSupportPage;
