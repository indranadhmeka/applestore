import React from "react";
import { Link } from "react-router-dom";

const TvFeatureSection = () => {
  const features = [
    {
      id: 1,
      title: "Easily control your home from anywhere.",
      description:
        "Manage your lights, locks, temperature, and cameras — all from your favorite Apple devices with the Home app.",
      image: "/images/homeapp/homeapp-ui.png",
      link: "/home-app",
      learnText: "Learn more about the Home app",
    },
    {
      id: 2,
      title: "Seamlessly connected entertainment in every room.",
      description:
        "Enjoy Apple TV+, music, and podcasts on HomePod or HomePod mini — synced across rooms for a surround experience.",
      image: "/images/homepod/homepod-family.png",
      link: "/homepod",
      learnText: "Learn more about HomePod",
    },
    {
      id: 3,
      title: "Run it all with your voice.",
      description:
        "Ask Siri to play your favorite show, adjust the thermostat, or close the blinds — all hands-free.",
      image: "/images/siri/siri-home.png",
      link: "/home-app",
      learnText: "Learn more about Siri",
    },
  ];

  return (
    <section className="py-20 px-8 bg-gray-50">
      <h2 className="text-4xl font-semibold text-center mb-12">
        Every reason to turn your house into a smart home.
      </h2>

      <div className="space-y-16">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Feature Image */}
            <div className="md:w-1/2">
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

            {/* Feature Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Link
                to={feature.link}
                className="text-blue-600 font-medium hover:underline"
              >
                {feature.learnText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TvFeatureSection;
