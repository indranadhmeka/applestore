import React from "react";

// ipadPage.jsx
// Single-file React component (Tailwind CSS) for an Apple-style iPad product page.
// Drop into any React app that already has Tailwind configured.

export default function IpadPage() {
  const ipadModels = [
    {
      id: "pro",
      title: "iPad Pro",
      tagline: "Powerful. Portable. Pro-level.",
      blurb:
        "For the most demanding workflows — pro apps, high-performance media and advanced creativity.",
      image: "/images/ipad-pro.png",
      price: "From ₹89,900",
      chips: ["M4 / M5", "13\" / 11\"", "Studio-class display"],
    },
    {
      id: "air",
      title: "iPad Air",
      tagline: "Performance meets portability.",
      blurb: "Fast, thin and versatile — ideal for students, creators and everyday productivity.",
      image: "/images/ipad-air.png",
      price: "From ₹59,900",
      chips: ["M2 / M3", "10–13\" options", "Lightweight"],
    },
    {
      id: "standard",
      title: "iPad",
      tagline: "Everyday value. Endless possibilities.",
      blurb: "Great for browsing, streaming, apps and kids. A brilliant balance of price and capability.",
      image: "/images/ipad.png",
      price: "From ₹29,900",
      chips: ["A16", "10th gen", "Great battery life"],
    },
    {
      id: "mini",
      title: "iPad mini",
      tagline: "Pocketable power.",
      blurb: "Small size, big performance — perfect for on-the-go creativity and reading.",
      image: "/images/ipad-mini.png",
      price: "From ₹49,900",
      chips: ["A17 Pro", "Compact 8.3\" display", "One-handed use"],
    },
  ];

  const accessories = [
    {
      id: "pencil-pro",
      title: "Apple Pencil Pro",
      price: "₹11,900",
      desc:
        "Squeeze, barrel-roll, haptic feedback and hover — pixel-perfect for pros.",
      compat: ["iPad Pro (M4/M5)", "iPad Air (M2/M3)", "iPad mini (A17 Pro)"],
    },
    {
      id: "pencil-usb",
      title: "Apple Pencil (USB-C)",
      price: "₹7,900",
      desc: "Classic precision with USB-C pairing and charging.",
      compat: ["Most modern iPad models (check table)", "iPad (10th gen)", "iPad Air 4/5"],
    },
    {
      id: "magic-kb",
      title: "Magic Keyboard for iPad Pro",
      price: "From ₹29,900",
      desc: "Floating cantilever design, glass trackpad, aluminium palm rest.",
      compat: ["iPad Pro 11\" / 13\""],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Apple — iPad</h1>
          <nav className="space-x-4 text-sm">
            <a href="#buy" className="hover:underline">
              Ways to Buy
            </a>
            <a href="#learn" className="hover:underline">
              Get to know
            </a>
            <a href="#essentials" className="hover:underline">
              Essentials
            </a>
            <a href="#compare" className="hover:underline">
              Compare
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-900 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="uppercase text-sm opacity-80">iPad</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">
              iPad — A world of possibilities
            </h2>
            <p className="mt-4 text-lg opacity-90">
              From everyday tasks to pro workflows — iPad delivers performance, portability and a
              million apps.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#buy"
                className="inline-block bg-white text-slate-900 px-4 py-2 rounded-md font-medium shadow"
              >
                Buy
              </a>
              <a
                href="#learn"
                className="inline-block border border-white/30 text-white px-4 py-2 rounded-md font-medium"
              >
                Learn more
              </a>
            </div>

            <ul className="mt-6 text-sm space-y-2 opacity-90">
              <li>
                <strong>Ways to buy:</strong> UPI, Netbanking, credit/debit, RuPay, EMI options and No
                Cost EMI where available.
              </li>
              <li>
                <strong>Apple Trade In:</strong> Get credit when you exchange eligible devices in
                store.
              </li>
              <li>
                <strong>Education Pricing:</strong> Special pricing for students, parents and faculty.
              </li>
            </ul>
          </div>

          <div className="relative flex justify-center">
            <div className="w-full max-w-md bg-white/5 rounded-2xl p-6">
              <img
                src="/images/ipad-hero-placeholder.png"
                alt="iPad hero mock"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 — Why Apple is the best place to buy iPad */}
      <section id="buy" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold">Why Apple is the best place to buy iPad</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Ways to Buy">
            <p className="text-sm">
              Monthly payments made easy: pay with credit/debit, RuPay, UPI, Netbanking or EMI from
              most leading banks. No Cost EMI available on eligible products.
            </p>
            <a href="#" className="mt-3 inline-block text-sm underline">
              Speak to a Specialist
            </a>
          </Card>

          <Card title="Apple Trade In">
            <p className="text-sm">Exchange your eligible iPad in person at an Apple Store.</p>
            <a href="#" className="mt-3 inline-block text-sm underline">
              Learn more
            </a>
          </Card>

          <Card title="Education Pricing">
            <p className="text-sm">Save with education pricing for students, parents and faculty.</p>
            <a href="#" className="mt-3 inline-block text-sm underline">
              Learn more
            </a>
          </Card>
        </div>
      </section>

      {/* Section 2 — Get to know iPad (iPadOS + Apple Intelligence) */}
      <section id="learn" className="bg-white/60 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Get to know iPad</h3>
            <p className="mt-3 text-lg font-medium">iPadOS + Apps — Everyday superpowers.</p>
            <p className="mt-4 text-sm leading-relaxed">
              iPadOS is made for the large Multi-Touch display and powerful Apple silicon. Multitasking
              is intuitive with flexible windowing, while the App Store offers a million apps made for
              iPad.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Feature title="Multitasking made easy" desc="Flexible windowing, split view and
              fast app switching." />
              <Feature title="Over a million apps" desc="From classrooms to studios—apps for every
              use case." />
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Apple Intelligence</h4>
            <p className="mt-3 text-sm leading-relaxed">
              Personal, private, powerful — Apple Intelligence helps you write, translate and create
              with privacy-first on-device and Private Cloud Compute features.
            </p>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <strong>Live Translation:</strong> Translate messages and FaceTime captions in selected
                languages.
              </li>
              <li>
                <strong>Image Wand & Genmoji:</strong> Generate or extend visuals directly in apps.
              </li>
              <li>
                <strong>Siri reimagined:</strong> Richer language understanding and device-aware
                knowledge.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3 — iPad essentials: pencils & keyboards */}
      <section id="essentials" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold">iPad essentials</h3>
        <p className="mt-2 text-sm text-slate-600">Apple Pencil • Keyboards • Accessories</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {accessories.map((a) => (
            <div key={a.id} className="bg-white rounded-2xl p-6 shadow">
              <h4 className="font-semibold">{a.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{a.desc}</p>
              <p className="mt-3 font-medium">{a.price}</p>
              <p className="mt-2 text-xs text-slate-500">Compatible with: {a.compat.join(", ")}</p>
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-2 bg-slate-900 text-white rounded-md text-sm">
                  Buy
                </button>
                <button className="px-3 py-2 border rounded-md text-sm">Learn more</button>
              </div>
            </div>
          ))}
        </div>

        {/* Apple Pencil feature comparison */}
        <div className="mt-8 bg-white p-6 rounded-2xl shadow">
          <h4 className="font-semibold">Apple Pencil at a glance</h4>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-slate-600">
                <tr>
                  <th className="py-2">Feature</th>
                  <th className="py-2">Apple Pencil Pro</th>
                  <th className="py-2">Apple Pencil (USB‑C)</th>
                </tr>
              </thead>
              <tbody className="align-top">
                <tr className="border-t">
                  <td className="py-3 font-medium">Precision & Latency</td>
                  <td className="py-3">Pixel-perfect, ultra-low</td>
                  <td className="py-3">Pixel-perfect, low</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 font-medium">Pressure & Tilt</td>
                  <td className="py-3">Yes</td>
                  <td className="py-3">Yes</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 font-medium">Advanced controls</td>
                  <td className="py-3">Squeeze, barrel roll, double-tap</td>
                  <td className="py-3">Double-tap not supported</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 font-medium">Find My</td>
                  <td className="py-3">Supported</td>
                  <td className="py-3">Not supported</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4 — Significant others (ecosystem) */}
      <section className="bg-white/60 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div>
            <h4 className="text-xl font-semibold">iPad and iPhone</h4>
            <p className="mt-2 text-sm text-slate-700">
              Shoot on iPhone, edit on iPad — mark up photos, transfer with Handoff and use Continuity
              features across devices.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">iPad and Mac</h4>
            <p className="mt-2 text-sm text-slate-700">Use iPad as a second display with Sidecar and
              move work fluidly between Mac and iPad.</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">iPad and Apple Watch</h4>
            <p className="mt-2 text-sm text-slate-700">Notifications, calls and continuity for a
              connected experience.</p>
          </div>
        </div>
      </section>

      {/* Section 5 — Explore & Compare */}
      <section id="compare" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold">Compare iPad models</h3>
        <p className="mt-2 text-sm text-slate-600">Quick reference to choose the right iPad for you.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow">
            <h4 className="font-semibold">Model cards</h4>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ipadModels.map((m) => (
                <article
                  key={m.id}
                  className="p-4 border rounded-lg bg-white/50 flex flex-col justify-between"
                >
                  <div>
                    <h5 className="font-semibold">{m.title}</h5>
                    <p className="text-xs text-slate-500">{m.tagline}</p>
                    <p className="mt-2 text-sm text-slate-700">{m.blurb}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-slate-900 font-medium">{m.price}</div>
                    <a href="#" className="text-sm underline">
                      Buy
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h4 className="font-semibold">Feature matrix</h4>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-slate-600">
                  <tr>
                    <th className="py-2">Feature</th>
                    {ipadModels.map((m) => (
                      <th key={m.id} className="py-2">{m.title}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-3 font-medium">Chips</td>
                    {ipadModels.map((m) => (
                      <td key={m.id} className="py-3">{m.chips.join(", ")}</td>
                    ))}
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 font-medium">Ideal for</td>
                    <td className="py-3">Pro workflows</td>
                    <td className="py-3">Students & creators</td>
                    <td className="py-3">Everyday use</td>
                    <td className="py-3">On-the-go reading</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 font-medium">Accessories</td>
                    <td className="py-3">Pencil Pro, Magic Keyboard</td>
                    <td className="py-3">Pencil (USB‑C), Magic Keyboard</td>
                    <td className="py-3">Pencil (USB‑C), Magic Keyboard Folio</td>
                    <td className="py-3">Pencil (USB‑C)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h6 className="font-semibold">Apple</h6>
            <p className="mt-2 text-sm opacity-80">Free delivery and pickup • GST invoicing for
              business customers</p>
          </div>

          <div>
            <h6 className="font-semibold">Support</h6>
            <ul className="mt-2 text-sm opacity-90 space-y-1">
              <li>Apple Trade In</li>
              <li>AppleCare</li>
              <li>iPad Support</li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold">Contact</h6>
            <p className="mt-2 text-sm opacity-90">Call 000800 040 1966</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* --- Helper components --- */
function Card({ title, children }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <h4 className="font-semibold">{title}</h4>
      <div className="mt-3 text-sm text-slate-700">{children}</div>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="bg-white/50 p-4 rounded-lg">
      <h5 className="font-medium">{title}</h5>
      <p className="mt-2 text-sm text-slate-700">{desc}</p>
    </div>
  );
}
