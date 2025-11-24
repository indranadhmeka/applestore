import React from "react";
import { Link } from "react-router-dom";
import AirPodsCard from "../components/AirPodsCard";
import PaymentOptions from "../components/PaymentOptions";
import OfferSection from "../components/OfferSection";

const AirPodsPage = () => {
  const airpodsModels = [
    { name: "AirPods Pro (2nd Gen)", price: "₹24,900", image: "/images/airpods-pro2.png" },
    { name: "AirPods (3rd Gen)", price: "₹19,900", image: "/images/airpods3.png" },
    { name: "AirPods (2nd Gen)", price: "₹12,900", image: "/images/airpods2.png" },
    { name: "AirPods Max", price: "₹59,900", image: "/images/airpods-max.png" },
    { name: "AirPods Lite", price: "₹8,999", image: "/images/airpods-lite.png" },
    { name: "AirPods Sport Edition", price: "₹15,999", image: "/images/airpods-sport.png" },
    { name: "AirPods Studio", price: "₹49,999", image: "/images/airpods-studio.png" },
    { name: "AirPods SE", price: "₹11,499", image: "/images/airpods-se.png" },
    { name: "AirPods X", price: "₹39,999", image: "/images/airpods-x.png" },
    { name: "AirPods Ultra", price: "₹69,999", image: "/images/airpods-ultra.png" },
  ];

  return (
    <div className="bg-white text-center">
      {/* SECTION 1: Hero */}
      <section className="py-20 bg-gray-50">
        <h1 className="text-5xl font-bold mb-4">AirPods</h1>
        <p className="text-xl text-gray-600 mb-8">
          Wireless. Magical. Powerful Sound. Made by Apple.
        </p>
        <img
          src="/images/airpods-hero.png"
          alt="AirPods Hero"
          className="mx-auto w-1/2 rounded-2xl shadow-lg"
        />
      </section>

      {/* SECTION 2: Explore All Models */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8">Explore All AirPods Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {airpodsModels.map((pod) => (
            <AirPodsCard key={pod.name} image={pod.image} name={pod.name} price={pod.price} />
          ))}
        </div>
      </section>

      {/* SECTION 3: Budget Models */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Affordable AirPods</h2>
        <p className="text-gray-600 mb-6">Premium sound, budget price.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {airpodsModels.slice(0, 5).map((pod) => (
            <AirPodsCard key={pod.name} image={pod.image} name={pod.name} price={pod.price} />
          ))}
        </div>
      </section>

      {/* SECTION 4: Premium Models */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-4">Premium AirPods Collection</h2>
        <p className="text-gray-600 mb-6">
          Studio-quality sound and luxury design for professionals.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {airpodsModels.slice(5).map((pod) => (
            <AirPodsCard key={pod.name} image={pod.image} name={pod.name} price={pod.price} />
          ))}
        </div>
      </section>

      {/* SECTION 5: Payment Options */}
      <PaymentOptions />

      {/* SECTION 6: Apple Music & TV+ Offer */}
      <OfferSection />

      {/* SECTION 7: Free Delivery */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-2">Free Delivery & Store Pickup</h2>
        <p className="text-gray-600 mb-4">
          Get free delivery on all orders or pick up from your nearest Apple Store.
        </p>
        <Link to="/learn/free-delivery" className="text-blue-600 hover:underline font-medium">
          Learn more
        </Link>
      </section>

      {/* SECTION 8: Ways to Buy */}
      <section className="py-16">
        <h2 className="text-2xl font-semibold mb-2">Ways to Buy</h2>
        <p className="text-gray-600 mb-4">
          Choose EMI, card payments, or exchange offers for easy purchase options.
        </p>
        <Link to="/learn/ways-to-buy" className="text-blue-600 hover:underline font-medium">
          Learn more
        </Link>
      </section>

      {/* SECTION 9: Help Buying */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-2">Need Help Buying?</h2>
        <p className="text-gray-600 mb-4">
          Talk to an Apple Specialist or visit your nearest Apple Store for assistance.
        </p>
        <Link to="/contact" className="text-blue-600 hover:underline font-medium">
          Contact us
        </Link>
      </section>

      {/* SECTION 10: Make Them Yours */}
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-4">Make Them Yours</h2>
        <p className="text-gray-600 mb-6">
          Personalize your AirPods with free engraving or choose premium accessories.
        </p>
        <Link to="/learn/personalize" className="text-blue-600 hover:underline font-medium">
          Learn more
        </Link>
      </section>

      {/* SECTION 11: Get to Know AirPods */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Get to Know AirPods</h2>
        <p className="text-gray-600 mb-6">
          Discover the innovation, comfort, and design that make AirPods iconic.
        </p>
        <Link to="/learn/airpods" className="text-blue-600 hover:underline font-medium">
          Explore AirPods
        </Link>
      </section>

      {/* SECTION 12: Final CTA */}
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-4">Experience the Magic</h2>
        <p className="text-gray-600 mb-6">
          Enjoy rich sound, deep bass, and effortless connection across all devices.
        </p>
        <Link to="/buy/airpods" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Shop Now
        </Link>
      </section>
    </div>
  );
};

export default AirPodsPage;
