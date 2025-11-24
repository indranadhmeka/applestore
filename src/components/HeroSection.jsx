import React from "react";
import heroImage from "../assets/image/hero-device.png";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Text */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
        INDRANADH with future<span className="text-blue-600">Apple</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Shop the latest iPhone, Mac, iPad, and accessories all in one place.
          </p>
          <a
            href="#store"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Shop Now
          </a>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Apple devices"
            className="max-w-full w-96 drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
