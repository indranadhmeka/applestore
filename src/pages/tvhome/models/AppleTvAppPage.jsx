import React from "react";
import TvBuySection from "../../../components/TvBuySection";

const AppleTvAppPage = () => {
  const models = [
    { name: "Apple TV App for iPhone", price: "Free", features: "Stream and manage your shows anywhere", image: "/images/tvapp/model1.png" },
    { name: "Apple TV App for iPad", price: "Free", features: "Enjoy big-screen experience on the go", image: "/images/tvapp/model2.png" },
    { name: "Apple TV App for Mac", price: "Free", features: "4K HDR streaming on desktop", image: "/images/tvapp/model3.png" },
    { name: "Apple TV App for Smart TVs", price: "Free", features: "Built-in Apple TV experience", image: "/images/tvapp/model4.png" },
    { name: "Apple TV App for Windows", price: "Free", features: "Coming soon to Microsoft Store", image: "/images/tvapp/model5.png" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold mb-8">Apple TV App</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {models.map((m) => (
          <div key={m.name} className="border rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <img src={m.image} alt={m.name} className="w-64 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{m.name}</h3>
            <p className="text-gray-600">{m.features}</p>
            <p className="text-green-600 font-semibold mt-2">{m.price}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4">Get App</button>
          </div>
        ))}
      </div>
      <TvBuySection />
    </div>
  );
};

export default AppleTvAppPage;
