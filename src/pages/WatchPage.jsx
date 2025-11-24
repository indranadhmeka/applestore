import React from "react";
import { Link } from "react-router-dom";
import WatchCard from "../components/WatchCard";
import FeatureSection from "../components/FeatureSection";
import TradeSection from "../components/TradeSection";

const WatchPage = () => {
  const watches = [
    {
      name: "Apple Watch Ultra 2",
      price: "₹89,900",
      img: "/images/watch-ultra2.png",
      feature: "Titanium case, dual-frequency GPS, 36-hour battery life",
    },
    {
      name: "Apple Watch Series 10",
      price: "₹49,900",
      img: "/images/watch-series10.png",
      feature: "Always-On Retina Display, ECG, temperature sensor",
    },
    {
      name: "Apple Watch SE",
      price: "₹29,900",
      img: "/images/watch-se.png",
      feature: "Budget-friendly fitness watch with crash detection",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-12 bg-white shadow-md">
        <h1 className="text-4xl font-bold mb-4">Apple Watch Collection</h1>
        <p className="text-lg text-gray-700">
          Choose your style. Track your health. Stay connected — beautifully.
        </p>
      </div>

      {/* Product Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
        {watches.map((watch) => (
          <WatchCard key={watch.name} {...watch} />
        ))}
      </div>

      {/* Feature Section */}
      <FeatureSection />

      {/* Trade-In & AppleCare Section */}
      <TradeSection />

      {/* Buttons for More Pages */}
      <div className="text-center my-12 space-x-4">
        <Link
          to="/watch-learn"
          className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-black"
        >
          Learn More
        </Link>
        <Link
          to="/watch-payment"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Buy Now
        </Link>
        <Link
          to="/watch-repair"
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
        >
          Repair
        </Link>
        <Link
          to="/watch-complaint"
          className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
        >
          Complaint
        </Link>
      </div>
    </div>
  );
};

export default WatchPage;
