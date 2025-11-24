import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import CategoryGrid from "../components/CategoryGrid";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "../components/Newsletter";

const StorePage = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* ========== SECTION 1: HERO ========== */}
      <HeroSection />

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
              to={`/${item.toLowerCase()}`}
              className="text-blue-600 font-medium hover:underline"
            >
              {item}
            </Link>
          </div>
        ))}
      </section>

      {/* ========== SECTION 3: CATEGORY GRID ========== */}
      <CategoryGrid />

      {/* ========== SECTION 4: FEATURED PRODUCTS ========== */}
      <FeaturedProducts />

      {/* ========== SECTION 5: NEW ARRIVALS ========== */}
      <section className="px-8 py-16 bg-gradient-to-b from-gray-100 to-white text-center">
        <h2 className="text-3xl font-bold mb-8">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {["iphone16", "macbookairm3", "ipadprom4", "watchultra2"].map(
            (item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4"
              >
                <img
                  src={`/images/products/${item}_1.jpg`}
                  alt={item}
                  className="rounded-xl mb-3"
                />
                <h3 className="font-semibold capitalize">{item}</h3>
                <Link
                  to={`/models/${item}`}
                  className="text-blue-600 text-sm hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            )
          )}
        </div>
      </section>

      {/* ========== SECTION 6: APPLE EXPERIENCE ========== */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">The Apple Experience</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          Shop with confidence and enjoy exceptional service from Apple Experts,
          with personalized recommendations and easy setup support.
        </p>
        <Link
          to="/support"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Visit Support
        </Link>
      </section>

      {/* ========== SECTION 7: APPLE TRADE-IN ========== */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Apple Trade-In</h2>
        <p className="text-gray-600 mb-6">
          Exchange your old device for instant credit toward a new one.
        </p>
        <img
          src="/images/tradein.jpg"
          alt="Apple Trade-In"
          className="mx-auto rounded-xl shadow-md max-w-lg mb-6"
        />
        <Link
          to="/support/tradein"
          className="text-blue-600 font-semibold hover:underline"
        >
          Learn how Trade-In works →
        </Link>
      </section>

      {/* ========== SECTION 8: FINANCING OPTIONS ========== */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Easy Financing</h2>
        <p className="text-gray-600 mb-6">
          Pay over time with flexible EMI, credit, and debit card options.
        </p>
        <img
          src="/images/payment/financing.png"
          alt="Financing Options"
          className="mx-auto rounded-xl shadow-md max-w-md"
        />
      </section>

      {/* ========== SECTION 9: APPLE ONE BUNDLE ========== */}
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Apple One</h2>
        <p className="text-gray-600 mb-8">
          Get Apple Music, TV+, iCloud+, Arcade, and more in one subscription.
        </p>
        <img
          src="/images/entertainment/appleone.jpg"
          alt="Apple One"
          className="mx-auto rounded-2xl shadow-md max-w-lg"
        />
        <Link
          to="/entertainment"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Explore Plans
        </Link>
      </section>

      {/* ========== SECTION 10: EDUCATION OFFERS ========== */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Education Store</h2>
        <p className="text-gray-600 mb-6">
          Get special pricing for students, teachers, and education institutions.
        </p>
        <img
          src="/images/education/education.jpg"
          alt="Education Offers"
          className="mx-auto rounded-xl shadow-md max-w-lg"
        />
      </section>

      {/* ========== SECTION 11: BUSINESS SOLUTIONS ========== */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Apple for Business</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-6">
          Empower your team with powerful Apple technology and easy management
          tools designed for businesses.
        </p>
        <img
          src="/images/business/business.jpg"
          alt="Apple Business"
          className="mx-auto rounded-xl shadow-md max-w-lg"
        />
      </section>

      {/* ========== SECTION 12: ENVIRONMENTAL INITIATIVES ========== */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Apple and the Environment</h2>
        <p className="text-gray-600 mb-6">
          Every Apple product is designed with the planet in mind.
        </p>
        <img
          src="/images/environment/environment.jpg"
          alt="Environment"
          className="mx-auto rounded-xl shadow-md max-w-lg"
        />
      </section>

      {/* ========== SECTION 13: APPLE SERVICES ========== */}
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Apple Services</h2>
        <p className="text-gray-600 mb-8">
          Discover Apple TV+, Apple Music, Fitness+, and more — all designed to
          enrich your life.
        </p>
        <img
          src="/images/services/services.jpg"
          alt="Apple Services"
          className="mx-auto rounded-xl shadow-md max-w-lg"
        />
      </section>

      {/* ========== SECTION 14: CUSTOMER STORIES ========== */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Customer Stories</h2>
        <p className="text-gray-600 mb-6">
          Hear from people around the world who love using Apple.
        </p>
        <div className="max-w-4xl mx-auto">
<center>         <img
            src="/images/customers/customers.jpg"
            alt="Customer Stories"
            className="rounded-xl shadow-md"
          /> </center>
        </div>
      </section>

      {/* ========== SECTION 15: NEWSLETTER SIGNUP ========== */}
      <Newsletter />
    </main>
  );
};

export default StorePage;
