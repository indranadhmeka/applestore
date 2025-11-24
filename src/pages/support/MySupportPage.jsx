import React from "react";

const MySupportPage = () => {
  return (
    <div className="p-10 max-w-3xl mx-auto text-center text-gray-800">
      <h1 className="text-4xl font-semibold mb-4">My Support</h1>
      <p className="text-lg mb-6">
        Sign in with your Apple Account to see your support activity and
        coverage status.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
        Sign in to My Support
      </button>
    </div>
  );
};

export default MySupportPage;
