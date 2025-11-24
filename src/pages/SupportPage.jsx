import React from "react";
import { Link } from "react-router-dom";

const SupportPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">

      {/* ========== SECTION 1: HERO / HEADER ========== */}
      <header className="relative text-center py-20 bg-gray-900 text-white">
        <img
          src="/images/support/hero-support.jpg"
          alt="Apple Support"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10">
          <h1 className="text-5xl font-semibold mb-4">Apple Support</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Find answers, learn how to use your Apple products, and get expert support when you need it.
          </p>
          <div className="mt-6 flex justify-center">
            <input
              type="text"
              placeholder="Search Support"
              className="border border-gray-300 rounded-l-xl px-4 py-2 w-80 text-black"
            />
            <button className="bg-blue-600 text-white px-6 rounded-r-xl hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
      </header>

      {/* ========== SECTION 2: MAIN PRODUCT MENU ========== */}
      <section className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-6 p-10 bg-white shadow-sm">
        {[
          "iPhone",
          "Mac",
          "iPad",
          "Watch",
          "AirPods",
          "Music",
          "TV",
        ].map((item, index) => (
          <div
            key={index}
            className="text-center rounded-2xl p-4 hover:bg-gray-100 transition"
          >
            <img
              src={`/images/support/${item.toLowerCase()}.png`}
              alt={item}
              className="w-16 h-16 mx-auto mb-2"
            />
            <Link
              to={`/support/${item.toLowerCase()}`}
              className="text-blue-600 font-medium hover:underline"
            >
              {item}
            </Link>
          </div>
        ))}
      </section>

      {/* ========== SECTION 3: POPULAR TOPICS ========== */}
      <section className="p-10 bg-gray-50 border-t">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Popular Support Topics
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Forgot Apple ID Password?",
              desc: "Reset your password and regain access to your Apple Account.",
              img: "/images/support/iphone.png",
              link: "/support/forgot-password",
            },
            {
              title: "Apple Repair & Service",
              desc: "Find the right repair option for your device.",
              img: "/images/support/get-support.jpg",
              link: "/support/repair",
            },
            {
              title: "Billing & Subscriptions",
              desc: "Manage App Store purchases and Apple subscriptions.",
              img: "/images/support/music.png",
              link: "/support/billing",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-2xl p-6 hover:shadow-md transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-xl mb-4 h-40 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-3">{item.desc}</p>
              <Link
                to={item.link}
                className="text-blue-600 font-medium hover:underline"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ========== SECTION 4: GET SUPPORT / MY SUPPORT ========== */}
      <section className="p-12 bg-white text-center border-t">
        <h2 className="text-3xl font-semibold mb-6">Get Help Fast</h2>
        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src="/images/support/get-support.jpg"
              alt="Get Support"
              className="w-full h-52 rounded-xl object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-3">Get Support</h3>
            <p className="text-gray-600 mb-4">
              Connect with an Apple expert online or schedule a repair.
            </p>
            <Link
              to="/support/get-support"
              className="text-blue-600 font-medium hover:underline"
            >
              Start now →
            </Link>
          </div>

          <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src="/images/support/my-support.jpg"
              alt="My Support"
              className="w-full h-52 rounded-xl object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-3">My Support</h3>
            <p className="text-gray-600 mb-4">
              Check coverage, view repair status, and sign in to manage your
              Apple devices.
            </p>
            <Link
              to="/support/my-support"
              className="text-blue-600 font-medium hover:underline"
            >
              Sign in →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: APPLECARE+ ========== */}
      <section className="p-12 bg-gray-50 border-t text-center">
        <h2 className="text-3xl font-semibold mb-4">AppleCare+</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Get coverage for accidental damage, priority access to Apple experts,
          and battery service when capacity drops below 80%.
        </p>
        <img
          src="/images/support/applecare-products.png"
          alt="AppleCare+ Devices"
          className="mx-auto w-full max-w-4xl rounded-2xl shadow mb-8"
        />
        <Link
          to="/support/applecare"
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700"
        >
          Learn more about AppleCare+
        </Link>
      </section>

      {/* ========== SECTION 6: GUIDES ========== */}
      <section className="p-12 bg-white border-t text-center">
        <h2 className="text-3xl font-semibold mb-8">Step-by-Step Guides</h2>
        <img
          src="/images/support/guides.jpg"
          alt="Guides"
          className="rounded-2xl w-full max-w-5xl mx-auto mb-8"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Update your iPhone or iPad",
            "Back up your device",
            "Recover a locked Apple ID",
          ].map((title, i) => (
            <div key={i} className="p-6 border rounded-2xl hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">
                Learn how to keep your device updated and secure.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== SECTION 7: APPLE SUPPORT APP ========== */}
      <section className="p-12 bg-gray-100 border-t text-center">
        <h2 className="text-3xl font-semibold mb-4">Apple Support App</h2>
        <img
          src="/images/support/appstore-app.jpg"
          alt="Apple Support App"
          className="mx-auto w-full max-w-3xl rounded-2xl mb-6"
        />
        <p className="max-w-2xl mx-auto text-gray-600 mb-6">
          Get personalized help for your devices — chat with an Apple expert,
          schedule a repair, or access product information anytime.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700">
          Download the Apple Support App
        </button>
      </section>

      {/* ========== SECTION 8: COMMUNITY / BUSINESS SUPPORT ========== */}
      <section className="p-12 bg-white border-t text-center">
        <h2 className="text-3xl font-semibold mb-4">More Ways to Get Support</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-6">
          <div className="bg-gray-50 p-8 rounded-2xl border hover:shadow-md transition">
            <img
              src="/images/support/community.jpg"
              alt="Apple Community"
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Apple Community</h3>
            <p className="text-gray-600 mb-4">
              Ask questions and get answers from other Apple users.
            </p>
            <Link
              to="https://discussions.apple.com"
              className="text-blue-600 hover:underline font-medium"
            >
              Visit the Community →
            </Link>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border hover:shadow-md transition">
            <img
              src="/images/support/business-support.jpg"
              alt="Business Support"
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">AppleCare for Business</h3>
            <p className="text-gray-600 mb-4">
              Professional support plans to keep your business running smoothly.
            </p>
            <Link
              to="/support/applecare"
              className="text-blue-600 hover:underline font-medium"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SECTION 9: FOOTER LEGAL INFO ========== */}
      <footer className="p-10 text-sm text-gray-500 bg-gray-100 border-t">
        <div className="max-w-5xl mx-auto space-y-3">
          <p>
            AppleCare+ is an optional program subject to terms and conditions.
            Service coverage is available only for covered devices.
          </p>
          <p>
            AppleCare+ accidental damage coverage is insured by Tata AIG General
            Insurance Company Limited. Terms apply.
          </p>
          <p>© 2025 Apple Inc. All rights reserved. Apple India Pvt. Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default SupportPage;
