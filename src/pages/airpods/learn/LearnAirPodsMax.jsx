import React from "react";

const LearnAirPodsMax = () => {
  return (
    <div className="bg-gray-50 text-center py-20">
      <h1 className="text-4xl font-bold mb-6">AirPods Max</h1>
      <img src="/images/airpods-max.png" alt="AirPods Max" className="mx-auto w-1/3 mb-8" />
      <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
        <p>
          AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation.
          Custom-built drivers deliver immersive, balanced sound with ultra-low distortion.
        </p>
        <p>
          Crafted with anodized aluminum and a breathable knit canopy, they redefine comfort for over-ear headphones.
        </p>
      </div>
    </div>
  );
};

export default LearnAirPodsMax;
