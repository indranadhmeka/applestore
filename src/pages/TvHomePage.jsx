import React from "react";
import { Link } from "react-router-dom";
import TvProductCard from "../components/TvProductCard";
import TvFeatureSection from "../components/TvFeatureSection";
import SmartHomePlanSection from "../components/SmartHomePlanSection";

const products = [
  {
    id: 1,
    name: "Apple TV 4K",
    image: "/images/tv4k/main.png",
    link: "/apple-tv-4k",
  },
  {
    id: 2,
    name: "Apple TV App",
    image: "/images/tvapp/main.png",
    link: "/apple-tv-app",
  },
  {
    id: 3,
    name: "Apple TV+",
    image: "/images/tvplus/main.png",
    link: "/apple-tv-plus",
  },
  {
    id: 4,
    name: "HomePod",
    image: "/images/homepod/main.png",
    link: "/homepod",
  },
  {
    id: 5,
    name: "HomePod mini",
    image: "/images/homepodmini/main.png",
    link: "/homepod-mini",
  },
  {
    id: 6,
    name: "Home App",
    image: "/images/homeapp/main.png",
    link: "/home-app",
  },
  {
    id: 7,
    name: "Accessories",
    image: "/images/accessories/main.png",
    link: "/accessories",
  },
];

const TvHomePage = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <header className="text-center py-16 bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-5xl font-semibold">TV & Smart Home</h1>
        <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
          Every reason to turn your house into a smart home. Experience a new way to
          control, connect, and enjoy every corner of your home — powered by Apple.
        </p>
      </header>

      {/* Product Grid */}
      <section className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 px-8 py-10 max-w-7xl mx-auto">
        {products.map((product) => (
          <TvProductCard key={product.id} product={product} />
        ))}
      </section>

      {/* Feature Section */}
      <TvFeatureSection />

      {/* Smart Home Plan Section */}
      <SmartHomePlanSection />

      {/* Footer Section */}
      <footer className="text-center py-16 bg-gray-100 mt-20">
        <h3 className="text-2xl font-semibold">The foundation for a smarter home.</h3>
        <p className="text-gray-600 mt-4">
          Designed to work together — Apple TV, HomePod, and the Home app make your
          home seamlessly intelligent.
        </p>
        <Link
          to="/home-app"
          className="text-blue-600 underline mt-4 block font-medium"
        >
          Learn more
        </Link>
        <div className="mt-10">
          <img
            src="/images/homepod/homepod-family.png"
            alt="HomePod Family"
            className="mx-auto w-80 rounded-2xl shadow-md"
          />
        </div>
      </footer>
    </div>
  );
};

export default TvHomePage;
