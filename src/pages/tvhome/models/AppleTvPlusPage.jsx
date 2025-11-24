import React from "react";
import TvBuySection from "../../../components/TvBuySection";

const AppleTvPlusPage = () => {
  const models = [
    { name: "Individual Plan", price: "₹99/month", features: "1 account, ad-free, download offline", image: "/images/tvplus/model1.png" },
    { name: "Family Plan", price: "₹199/month", features: "Up to 6 users with Family Sharing", image: "/images/tvplus/model2.png" },
    { name: "Student Plan", price: "₹69/month", features: "Special discount with Apple Music bundle", image: "/images/tvplus/model3.png" },
    { name: "Apple One Bundle", price: "₹375/month", features: "Includes TV+, Music, iCloud+, Arcade", image: "/images/tvplus/model4.png" },
    { name: "Annual Plan", price: "₹999/year", features: "Save 17% when billed annually", image: "/images/tvplus/model5.png" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold mb-8">Apple TV+</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {models.map((m) => (
          <div key={m.name} className="border rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <img src={m.image} alt={m.name} className="w-64 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{m.name}</h3>
            <p className="text-gray-600">{m.features}</p>
            <p className="text-green-600 font-semibold mt-2">{m.price}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4">Subscribe</button>
          </div>
        ))}
      </div>
      <TvBuySection />
    </div>
  );
};

export default AppleTvPlusPage;
