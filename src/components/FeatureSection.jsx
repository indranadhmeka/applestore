import React from "react";

const FeatureSection = () => {
  const features = [
    { title: "Advanced Health Sensors", detail: "Track heart rate, blood oxygen, and ECG right on your wrist." },
    { title: "All-Day Battery Life", detail: "Up to 36 hours of usage on Apple Watch Ultra 2." },
    { title: "Fitness Motivation", detail: "Smart Activity Rings help you stay active and reach your goals." },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {features.map((f, i) => (
          <div key={i} className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
