import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Truck } from "lucide-react";

const MacPage = () => {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      {/* Back */}
      <div className="flex items-center p-6">
        <Link
          to="/"
          className="flex items-center text-blue-600 hover:underline font-medium"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Store
        </Link>
      </div>

      {/* Hero */}
      <section className="text-center py-24 bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-6xl font-semibold mb-4">Mac</h1>
        <p className="text-lg text-gray-600 mb-8">
          If you can dream it, Mac can do it.
        </p>
        <img
          src="/images/mac-hero.jpg"
          alt="Mac lineup"
          className="mx-auto w-full max-w-5xl rounded-2xl shadow-md"
        />
      </section>

      {/* Product Section Template */}
      {[
        {
          name: "MacBook Air",
          tag: "M4 chip",
          color: "sky blue, silver, starlight, midnight",
          desc: "Strikingly thin and fast so you can work, play or create anywhere.",
          price: "From ₹99,900",
          img: "/images/macbook-air.jpg",
        },
        {
          name: "MacBook Pro",
          tag: "M5, M4 Pro or M4 Max chip",
          color: "space black, silver",
          desc: "The most advanced Mac laptops for demanding workflows.",
          price: "From ₹1,69,900",
          img: "/images/macbook-pro.jpg",
        },
        {
          name: "iMac",
          tag: "M4 chip",
          color:
            "dual-tone blue, purple, pink, orange, yellow, green, silver",
          desc: "A stunning all-in-one desktop for creativity and productivity.",
          price: "From ₹1,34,900",
          img: "/images/imac.jpg",
        },
        {
          name: "Mac mini",
          tag: "M4 or M4 Pro chip",
          color: "silver",
          desc: "The mini-est, most affordable Mac with mighty performance.",
          price: "From ₹59,900",
          img: "/images/mac-mini.jpg",
        },
        {
          name: "Mac Studio",
          tag: "M4 Max or M3 Ultra chip",
          color: "silver",
          desc: "Powerful performance and extensive connectivity for pro workflows.",
          price: "From ₹2,14,900",
          img: "/images/mac-studio.jpg",
        },
        {
          name: "Mac Pro",
          tag: "M2 Ultra chip",
          color: "silver",
          desc: "A pro workstation with PCIe expansion for demanding workflows.",
          price: "From ₹7,29,900",
          img: "/images/mac-pro.jpg",
        },
      ].map((mac, i) => (
        <section
          key={i}
          className={`flex flex-col lg:flex-row items-center justify-center gap-12 py-24 ${
            i % 2 === 1 ? "bg-gray-50" : "bg-white"
          }`}
        >
          <img
            src={mac.img}
            alt={mac.name}
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
          <div className="max-w-lg text-center lg:text-left px-6">
            <h2 className="text-4xl font-semibold mb-3">{mac.name}</h2>
            <p className="text-gray-500 mb-2">{mac.tag}</p>
            <p className="text-gray-600 mb-4">{mac.desc}</p>
            <p className="text-lg font-medium mb-6">{mac.price}</p>
            <div className="flex flex-col items-center lg:items-start space-y-3">
              <button className="text-blue-600 font-semibold hover:underline">
                Learn more
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Buy
              </button>
            </div>
          </div>
        </section>
      ))}

      {/* Why Apple Section */}
      <section className="py-24 text-center bg-gradient-to-b from-white to-gray-50">
        <h2 className="text-3xl font-semibold mb-6">
          Why Apple is the best place to buy Mac.
        </h2>
        <div className="max-w-3xl mx-auto text-gray-600 space-y-3">
          <p>✅ Easy monthly payment options.</p>
          <p>✅ Customise your chip, memory, and colour.</p>
          <p>✅ Save with education pricing for students & teachers.</p>
          <p>✅ Free delivery or pickup at your nearest Apple Store.</p>
          <p>✅ Trade in your old device to save on your new one.</p>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Mac + iPhone</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Together they work wonders — copy on one, paste on the other, answer
          calls, sync photos and messages seamlessly.
        </p>
        <img
          src="/images/mac-iphone.jpg"
          alt="Mac and iPhone"
          className="mx-auto rounded-2xl shadow-lg max-w-4xl"
        />
      </section>

      {/* Footer */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <h2 className="text-4xl font-semibold mb-4">
          Find your perfect Mac today.
        </h2>
        <p className="text-gray-300 mb-8">
          Shop online, chat with a Specialist, or visit your nearest Apple Store.
        </p>
        <button className="bg-blue-600 px-8 py-3 rounded-full hover:bg-blue-700 transition">
          Shop Mac
        </button>
      </section>

      {/* Delivery */}
      <section className="bg-gray-800 text-gray-300 text-center py-6 flex flex-col items-center gap-2">
        <Truck size={22} />
        <p>Fast, free delivery and easy returns.</p>
      </section>
    </main>
  );
};

export default MacPage;
