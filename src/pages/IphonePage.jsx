import React from "react";
import { Link } from "react-router-dom";
import { Smartphone, CreditCard, Store, ArrowRight } from "lucide-react";

const IphonePage = () => {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-12 bg-white">
        <h1 className="text-4xl font-bold mb-4">All models. Take your pick.</h1>
        <p className="text-gray-600 text-lg">
          Discover the latest iPhones, compare models, and find your perfect fit.
        </p>
      </section>

      {/* iPhone Models Section */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {/* iPhone 17 Pro & Max */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <img
            src="/images/iphone/iphone17pro.jpg"
            alt="iPhone 17 Pro"
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">
            iPhone 17 Pro & iPhone 17 Pro Max
          </h2>
          <p className="text-gray-500 mb-2">NEW • Silver • Cosmic Orange • Deep Blue</p>
          <p className="font-semibold mb-2">
            From ₹21,650.00/mo or ₹1,34,900.00
          </p>
          <button className="bg-blue-600 text-white rounded-full px-5 py-2 hover:bg-blue-700">
            Buy
          </button>
        </div>

        {/* iPhone Air */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <img
            src="/images/iphone/iphoneair.jpg"
            alt="iPhone Air"
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">iPhone Air</h2>
          <p className="text-gray-500 mb-2">
            NEW • Sky Blue • Light Gold • Cloud White • Space Black
          </p>
          <p className="font-semibold mb-2">
            From ₹19,150.00/mo or ₹1,19,900.00
          </p>
          <button className="bg-blue-600 text-white rounded-full px-5 py-2 hover:bg-blue-700">
            Buy
          </button>
        </div>

        {/* iPhone 17 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <img
            src="/images/iphone/iphone17.jpg"
            alt="iPhone 17"
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">iPhone 17</h2>
          <p className="text-gray-500 mb-2">
            NEW • Lavender • Sage • Mist Blue • White • Black
          </p>
          <p className="font-semibold mb-2">
            From ₹12,983.00/mo or ₹82,900.00
          </p>
          <button className="bg-blue-600 text-white rounded-full px-5 py-2 hover:bg-blue-700">
            Buy
          </button>
        </div>

        {/* iPhone 16 & 16 Plus */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <img
            src="/images/iphone/iphone16plus.jpg"
            alt="iPhone 16 Plus"
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">iPhone 16 & 16 Plus</h2>
          <p className="text-gray-500 mb-2">APPLE INTELLIGENCE • Ultramarine • Teal • Pink</p>
          <p className="font-semibold mb-2">
            From ₹10,983.00/mo or ₹69,900.00
          </p>
          <button className="bg-blue-600 text-white rounded-full px-5 py-2 hover:bg-blue-700">
            Buy
          </button>
        </div>

        {/* iPhone 16e */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <img
            src="/images/iphone/iphone16e.jpg"
            alt="iPhone 16e"
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">iPhone 16e</h2>
          <p className="text-gray-500 mb-2">
            APPLE INTELLIGENCE • White • Black
          </p>
          <p className="font-semibold mb-2">
            From ₹9,317.00/mo or ₹59,900.00
          </p>
          <button className="bg-blue-600 text-white rounded-full px-5 py-2 hover:bg-blue-700">
            Buy
          </button>
        </div>
      </section>

      {/* Ways to Save Section */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-2">Ways to save. Right here at Apple.</h2>
        <p className="text-gray-600 mb-4">
          Get up to 6 months No Cost EMI plus ₹5000 instant cashback. Trade in your old iPhone and
          save up to ₹64,000.
        </p>
        <button className="bg-blue-600 text-white rounded-full px-6 py-2 hover:bg-blue-700">
          Learn More
        </button>
      </section>

      {/* Ease of Switching */}
      <section className="max-w-6xl mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4">Ease of switching</h2>
        <p className="text-gray-600 mb-6">
          Switching from Android to iPhone is super simple. Our team will help you transfer data,
          set up iCloud, and get started instantly.
        </p>
        <Link
          to="#"
          className="text-blue-600 font-medium hover:underline flex items-center gap-1"
        >
          Switch Now <ArrowRight size={16} />
        </Link>
      </section>

      {/* Shopping Guides */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2">Shopping Guides</h2>
          <p className="text-gray-600 mb-6">
            Can’t decide? Explore our guides on eSIM, AppleCare+, and more.
          </p>
          <button className="bg-blue-600 text-white rounded-full px-6 py-2 hover:bg-blue-700">
            Explore Guides
          </button>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="max-w-7xl mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-6">Accessories. Essentials that pair perfectly.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md">
            <img src="/images/accessories/magsafe.jpg" alt="MagSafe" className="rounded-lg mb-4" />
            <h3 className="font-medium">MagSafe Charger</h3>
            <p className="text-gray-500">₹4,500.00</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md">
            <img src="/images/accessories/case.jpg" alt="Case" className="rounded-lg mb-4" />
            <h3 className="font-medium">iPhone 17 Silicone Case</h3>
            <p className="text-gray-500">₹4,900.00</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md">
            <img src="/images/accessories/battery.jpg" alt="Battery" className="rounded-lg mb-4" />
            <h3 className="font-medium">MagSafe Battery Pack</h3>
            <p className="text-gray-500">₹11,900.00</p>
          </div>
        </div>
      </section>

      {/* The iPhone Experience */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">The iPhone Experience</h2>
        <p className="text-gray-600 mb-6">
          Discover iOS 26, AirPods, Apple TV+, and more. Connect seamlessly across all Apple
          devices.
        </p>
        <button className="bg-blue-600 text-white rounded-full px-6 py-2 hover:bg-blue-700">
          Explore iPhone Experience
        </button>
      </section>
    </main>
  );
};

export default IphonePage;
