import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AppleMusicPage = () => {
  // Refs for sections
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const plansRef = useRef(null);

  useEffect(() => {
    // ✨ Hero fade-in
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
    });

    // 🎧 Feature cards slide-up when scrolled into view
    gsap.utils.toArray(".feature-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        opacity: 0,
        y: 80,
        duration: 0.8,
        delay: i * 0.15,
        ease: "power3.out",
      });
    });

    // 💳 Plans fade-in
    gsap.from(plansRef.current, {
      scrollTrigger: {
        trigger: plansRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* 🌟 Hero Section */}
      <section
        ref={heroRef}
        className="text-center py-24 bg-gradient-to-b from-black via-gray-900 to-black"
      >
        <h1 className="text-6xl font-semibold mb-4">Apple Music</h1>
        <p className="text-lg mb-6 text-gray-300">
          100 million songs. Ad-free. Anytime, anywhere.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Try it free*
        </button>
      </section>

      {/* 🎧 Feature Cards */}
      <section
        ref={featuresRef}
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10"
      >
        {[
          {
            title: "Ad-Free Listening",
            desc: "Stream without interruptions — just pure sound.",
          },
          {
            title: "Offline Playback",
            desc: "Download your favorite albums and play offline.",
          },
          {
            title: "Curated Playlists",
            desc: "Discover hand-picked mixes by artists and experts.",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="feature-card bg-gray-900 p-8 rounded-2xl text-center shadow-xl hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-semibold mb-3">{feature.title}</h2>
            <p className="text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* 💳 Plans Section */}
      <section ref={plansRef} className="text-center py-16 bg-gray-950">
        <h2 className="text-4xl font-semibold mb-10">Plans that suit you</h2>

        <div className="flex flex-wrap justify-center gap-10">
          {[
            { name: "Individual", price: "₹99/month" },
            { name: "Family", price: "₹149/month" },
            { name: "Student", price: "₹59/month" },
          ].map((plan, i) => (
            <div
              key={i}
              className="bg-gray-900 p-10 rounded-2xl w-72 shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{plan.name}</h3>
              <p className="text-gray-400 mb-4">{plan.price}</p>
              <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition">
                Try Free
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 🧾 Footer Note */}
      <footer className="text-center text-gray-500 py-8 border-t border-gray-800">
        <p>
          *Free trial for new subscribers only. Plan automatically renews after trial.
        </p>
      </footer>
    </div>
  );
};

export default AppleMusicPage;
