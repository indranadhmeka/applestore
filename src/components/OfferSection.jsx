// src/components/OfferSection.jsx
import React from "react";

const OfferSection = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Get 3 Months Free of Apple Music & Apple TV+
      </h2>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Enjoy your favorite songs and shows with a 3-month free subscription to
        Apple Music and Apple TV+ when you purchase any AirPods model.
      </p>
      <img
        src="/images/airpods-hero.png"
        alt="AirPods Offer"
        className="mx-auto w-1/2 rounded-2xl shadow-md"
      />
    </section>
  );
};

export default OfferSection;