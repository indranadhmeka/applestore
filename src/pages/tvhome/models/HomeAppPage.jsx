import React from "react";
import TvBuySection from "../../../components/TvBuySection";

const HomeAppPage = () => {
  const models = [
    { name: "Home App on iPhone", price: "Free", features: "Control devices from anywhere", image: "/images/homeapp/model1.png" },
    { name: "Home App on iPad", price: "Free", features: "Full-screen dashboard view", image: "/images/homeapp/model2.png" },
    { name: "Home App on Mac", price: "Free", features: "Seamless control from desktop", image: "/images/homeapp/model3.png" },
    { name: "Home App on Watch", price: "Free", features: "Quick access via Siri", image: "/images/homeapp/model4.png" },
    { name: "Home App Notifications", price: "Free", features: "Real-time home status alerts", image: "/images/homeapp/model5.png" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold mb-8">Home App</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {models.map((m) => (
          <div key={m.name} className="border rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <img src={m.image} alt={m.name} className="w-64 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{m.name}</h3>
            <p className="text-gray-600">{m.features}</p>
            <p className="text-green-600 font-semibold mt-2">{m.price}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4">Open App</button>
          </div>
        ))}
      </div>
      <TvBuySection />
    </div>
  );
};

export default HomeAppPage;
