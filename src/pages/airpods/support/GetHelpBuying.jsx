import React from "react";

const GetHelpBuying = () => {
  return (
    <div className="bg-gray-50 text-center py-20">
      <h1 className="text-4xl font-bold mb-6">Get Help Buying</h1>
      <img
        src="/images/airpods-max.png"
        alt="Get Help Buying"
        className="mx-auto w-1/3 mb-8 rounded-2xl shadow-md"
      />
      <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4">
        <p>
          Need help deciding which AirPods are right for you? Our Apple Specialists are here to help with personalized advice and recommendations.
        </p>
        <p>
          💬 **Chat online** with a product expert  
          ☎️ **Call 1800-425-0744** (available 7 days a week)  
          🏬 **Visit your nearest Apple Store**
        </p>
        <p>
          Whether it's sound quality, fit, or features, we’ll help you find your perfect AirPods match.
        </p>
      </div>
    </div>
  );
};

export default GetHelpBuying;
