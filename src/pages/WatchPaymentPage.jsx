import React from "react";

const WatchPaymentPage = () => {
  const models = [
    { 
      name: "Apple Watch Ultra 2", 
      price: "₹89,900", 
      img: "/images/watch-ultra2.png", 
      feature: "Titanium case, dual-frequency GPS, 36-hour battery life" 
    },
    { 
      name: "Apple Watch Series 10", 
      price: "₹49,900", 
      img: "/images/watch-series10.png", 
      feature: "Always-On Retina Display, ECG, heart rate monitor" 
    },
    { 
      name: "Apple Watch SE", 
      price: "₹29,900", 
      img: "/images/watch-se.png", 
      feature: "Budget-friendly fitness watch with crash detection" 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        Apple Watch Payment Options
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {models.map((m) => (
          <div 
            key={m.name} 
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
          >
            <img src={m.img} alt={m.name} className="mx-auto w-52" />
            <h2 className="text-2xl font-bold mt-3">{m.name}</h2>
            <p className="text-gray-600 mt-2">{m.feature}</p>
            <p className="text-xl font-semibold mt-2">{m.price}</p>
            <button className="bg-blue-600 text-white px-5 py-2 mt-4 rounded-md w-full hover:bg-blue-700">
              Proceed to Pay
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchPaymentPage;
