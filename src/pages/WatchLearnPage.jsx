import React from "react";

const WatchLearnPage = () => {
  const watches = [
    {
      name: "Apple Watch Ultra 2",
      description:
        "The most rugged and capable Apple Watch ever. Made for exploration, endurance, and adventure with a lightweight titanium case and up to 36-hour battery life.",
      image: "/images/watch-ultra2.png",
    },
    {
      name: "Apple Watch Series 10",
      description:
        "A perfect balance of health and innovation. Features an Always-On Retina display, temperature sensing, ECG, and crash detection for your safety.",
      image: "/images/watch-series10.png",
    },
    {
      name: "Apple Watch SE",
      description:
        "Powerful features at an affordable price. Stay connected, active, and safe with advanced sensors and activity tracking.",
      image: "/images/watch-se.png",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        Learn More About Apple Watch
      </h1>

      <div className="space-y-12">
        {watches.map((watch, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
          >
            <img
              src={watch.image}
              alt={watch.name}
              className="w-64 mx-auto md:mx-0 md:mr-8"
            />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold mb-2">{watch.name}</h2>
              <p className="text-gray-700 text-lg">{watch.description}</p>
              <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">
                Buy {watch.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchLearnPage;
