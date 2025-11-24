import React from "react";
import TvBuySection from "../../../components/TvBuySection";

const AccessoriesPage = () => {
  const accessories = [
    {
      name: "Smart Plug",
      price: "₹2,490",
      features: "Control appliances using Siri or the Home app. Schedule on/off and automate with ease.",
      image: "/images/accessories/model1.png",
    },
    {
      name: "Smart Light Bulb",
      price: "₹3,490",
      features: "16 million colors, dimmable lighting, voice and app control compatible with HomeKit.",
      image: "/images/accessories/model2.png",
    },
    {
      name: "Smart Camera",
      price: "₹8,990",
      features: "HomeKit Secure Video with encrypted cloud recording and night vision.",
      image: "/images/accessories/model3.png",
    },
    {
      name: "Smart Switch",
      price: "₹2,990",
      features: "Manually or remotely control lights and fans with Apple’s Home app.",
      image: "/images/accessories/model4.png",
    },
    {
      name: "Motion Sensor",
      price: "₹3,990",
      features: "Trigger automations and security alerts when motion is detected.",
      image: "/images/accessories/model5.png",
    },
  ];

  return (
    <div className="p-8 bg-white text-gray-900">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-semibold mb-4">Smart Home Accessories</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Expand your smart home setup with intelligent accessories that connect seamlessly with
          Apple Home. Automate lighting, climate, and security.
        </p>
        <img
          src="/images/accessories/main.png"
          alt="Smart Home Accessories"
          className="mx-auto mt-10 rounded-2xl shadow-lg w-3/4 md:w-1/2"
        />
      </header>

      {/* Accessories Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {accessories.map((item) => (
          <div
            key={item.name}
            className="border rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-56 h-56 mx-auto mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-2">{item.features}</p>
            <p className="text-green-600 font-semibold mb-4">{item.price}</p>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
              Buy Now
            </button>
          </div>
        ))}
      </section>

      {/* Bundle Section */}
      <section className="text-center mt-20">
        <img
          src="/images/accessories/bundle.png"
          alt="Smart Home Bundle"
          className="mx-auto w-3/4 md:w-2/3 rounded-2xl shadow-lg"
        />
        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
          Make your entire home smarter — automate lighting, track activity, and control everything
          with your voice using Siri and the Home app.
        </p>
      </section>

      {/* Payment & Tracking */}
      <TvBuySection />
    </div>
  );
};

export default AccessoriesPage;
