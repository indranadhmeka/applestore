import React from "react";
import TvBuySection from "../../../components/TvBuySection";

const HomePodMiniPage = () => {
  const models = [
    { name: "HomePod mini Blue", price: "₹10,900", features: "Compact sound, Siri built-in", image: "/images/homepodmini/model1.png" },
    { name: "HomePod mini Yellow", price: "₹10,900", features: "Full-range driver, Intercom", image: "/images/homepodmini/model2.png" },
    { name: "HomePod mini White", price: "₹10,900", features: "Smart home hub", image: "/images/homepodmini/model3.png" },
    { name: "HomePod mini Orange", price: "₹10,900", features: "Vibrant finish, multi-room audio", image: "/images/homepodmini/model4.png" },
    { name: "HomePod mini Space Grey", price: "₹10,900", features: "Classic color, Siri voice assistant", image: "/images/homepodmini/model5.png" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold mb-8">HomePod mini</h1>
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

export default HomePodMiniPage;
