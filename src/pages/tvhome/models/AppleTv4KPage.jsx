import React from "react";
import TvBuySection from "../../../components/TvBuySection";

const AppleTv4KPage = () => {
  const models = [
    { name: "Apple TV 4K (64GB)", price: "₹14,900", features: "A15 Bionic, HDR10+, 4K Dolby Vision, Siri Remote", image: "/images/tv4k/model1.png" },
    { name: "Apple TV 4K (128GB)", price: "₹17,900", features: "Ethernet, Thread support, Wi-Fi 6", image: "/images/tv4k/model2.png" },
    { name: "Apple TV 4K Pro", price: "₹22,900", features: "8K-ready, 120Hz playback, Dolby Atmos", image: "/images/tv4k/model3.png" },
    { name: "Apple TV 4K Plus", price: "₹25,900", features: "Enhanced Siri Remote, adaptive streaming", image: "/images/tv4k/model4.png" },
    { name: "Apple TV 4K Max", price: "₹29,900", features: "Ultimate home-cinema experience", image: "/images/tv4k/model5.png" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold mb-8">Apple TV 4K</h1>
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

export default AppleTv4KPage;
