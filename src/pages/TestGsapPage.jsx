import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const TestGsapPage = () => {
  // Refs for elements to animate
  const titleRef = useRef(null);
  const boxRefs = useRef([]);

  useEffect(() => {
    // Hero title fade-in
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
    });

    // Animate each box on scroll
    boxRefs.current.forEach((box, i) => {
      gsap.from(box, {
        scrollTrigger: {
          trigger: box,
          start: "top 85%",
        },
        opacity: 0,
        y: 80,
        duration: 1,
        delay: i * 0.1,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <div className="bg-gray-950 min-h-screen text-white flex flex-col items-center">
      {/* Header */}
      <section
        ref={titleRef}
        className="text-center py-24 px-4"
      >
        <h1 className="text-6xl font-bold mb-4 text-white">
          GSAP Test Page 🎨
        </h1>
        <p className="text-gray-400 text-lg">
          Scroll down to see smooth GSAP animations in action!
        </p>
      </section>

      {/* Boxes to Animate */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 pb-24 w-full max-w-6xl">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (boxRefs.current[i] = el)}
            className="h-60 bg-gray-800 rounded-2xl flex items-center justify-center text-2xl font-semibold shadow-lg hover:bg-gray-700 transition"
          >
            Box {i + 1}
          </div>
        ))}
      </section>
    </div>
  );
};

export default TestGsapPage;
