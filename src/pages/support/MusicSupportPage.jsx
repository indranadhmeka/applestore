import React from "react";

const MusicSupportPage = () => {
  return (
    <div className="p-10 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-semibold mb-4">Apple Music Support</h1>
      <p className="mb-8 text-lg">
        Learn how to manage your Apple Music subscription and play your favorite songs anywhere.
      </p>

      <div className="space-y-6">
        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Start Your Subscription</h3>
          <p>Sign up for Apple Music and enjoy over 100 million songs ad-free.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Manage Your Plan</h3>
          <p>Upgrade to a Family Plan or cancel your subscription anytime.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Sync Library</h3>
          <p>Access your library across iPhone, iPad, Mac, and Apple TV.</p>
        </div>
      </div>
    </div>
  );
};

export default MusicSupportPage;
