import React from "react";

const Personalize = () => {
  return (
    <div className="bg-white text-center py-20">
      <h1 className="text-4xl font-bold mb-6">Make Them Yours</h1>
      <img
        src="/images/airpods-ultra.png"
        alt="Personalized AirPods"
        className="mx-auto w-1/3 mb-8 rounded-2xl shadow-md"
      />
      <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4">
        <p>
          Add a special touch to your AirPods with **free engraving** — include your name, initials, or even your favorite emoji.
        </p>
        <p>
          Personalized engraving is available for all AirPods models at no extra cost when purchased online.
        </p>
        <p>
          Choose your engraving during checkout and make your AirPods truly unique.
        </p>
      </div>
    </div>
  );
};

export default Personalize;
