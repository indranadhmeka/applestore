import React from "react";
import TvBuySection from "../../../components/TvBuySection";

const HomePodPage = () => {
  const models = [
    { name: "HomePod Midnight", price: "₹32,900", features: "Rich bass, Spatial Audio, Siri", image: "/images/homepod/model1.png" },
    { name: "HomePod White", price: "₹32,900", features: "Clean sound with high-excursion woofer", image: "/images/homepod/model2.png" },
    { name: "HomePod Stereo Pair", price: "₹65,800", features: "True stereo setup with two HomePods", image: "/images/homepod/model3.png" },
    { name: "HomePod Cinema Setup", price: "₹74,900", features: "Dolby Atmos surround pairing", image: "/images/homepod/model4.png" },
    { name: "HomePod Smart Hub", price: "₹35,900", features: "Controls smart home with Home app", image: "/images/homepod/model5.png" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold mb-8">HomePod</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {models.map((m) => (
          <div key={m.name} className="border rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <img src={m.image} alt={m.name} className="w-64 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{m.name}</h3>
            <p className="text-gray-600">{m.features}</p>
            <p className="text-green-600 font-semibold mt-2">{m.price}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4">Buy Now</button>
          </div>
        ))}
      </div>
      <TvBuySection />
    </div>
  );
};

export default HomePodPage;
