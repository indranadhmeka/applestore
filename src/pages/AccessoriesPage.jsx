import React from "react";
import { Link } from "react-router-dom";

const AccessoriesPage = () => {
  const accessories = [
    {
      name: "MagSafe Charger",
      price: "₹4,500",
      description: "Fast wireless charging for iPhone and AirPods with a perfectly aligned magnetic connection.",
      image: "/images/accessoriesmain/magsafe.png",
      link: "/models/magsafecharger",
    },
    {
      name: "AirTag (4 Pack)",
      price: "₹9,900",
      description: "Track your items easily. Keep your keys, wallet, and bag safe with precision finding.",
      image: "/images/accessoriesmain/airtag.png",
    },
    {
      name: "USB-C to Lightning Cable (1 m)",
      price: "₹1,800",
      description: "Fast-charging and high-speed data transfer in a durable braided cable.",
      image: "/images/accessoriesmain/usbclightning.png",
    },
    {
      name: "Apple 20W USB-C Power Adapter",
      price: "₹1,900",
      description: "Efficient, high-speed charging for iPhone, iPad, and AirPods.",
      image: "/images/accessoriesmain/poweradapter.png",
    },
    {
      name: "Magic Mouse 2",
      price: "₹8,500",
      description: "Wireless, rechargeable, and seamlessly responsive for your Mac.",
      image: "/images/accessoriesmain/magicmouse.png",
    },
  ];

  return (
    <div className="bg-white text-gray-900 p-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-semibold mb-4">Accessories</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover accessories that complement your Apple devices and enhance your everyday experience.
        </p>
        <img
          src="/images/accessoriesmain/main.png"
          alt="Apple Accessories Banner"
          className="mx-auto mt-10 rounded-2xl shadow-lg w-3/4 md:w-1/2"
        />
      </header>

      {/* Product Cards */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
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
            <p className="text-gray-600 mb-2">{item.description}</p>
            <p className="text-green-600 font-semibold mb-4">{item.price}</p>
            {item.link ? (
              <Link
                to={item.link}
                className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            ) : (
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
                Buy Now
              </button>
            )}
          </div>
        ))}
      </section>

      {/* Footer Banner */}
      <section className="text-center mt-20">
        <img
          src="/images/accessoriesmain/setup.png"
          alt="Apple Accessories Setup"
          className="mx-auto w-3/4 md:w-2/3 rounded-2xl shadow-lg"
        />
        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
          Every accessory is designed with the same attention to detail as your Apple devices.
          Perfectly built for power, precision, and performance.
        </p>
      </section>
    </div>
  );
};

export default AccessoriesPage;
