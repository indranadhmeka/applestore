import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Apple One",
    image: "/images/appleone.jpg",
    highlight:
      "Apple One bundles up to six Apple services — Apple Music, Apple TV+, Apple Arcade, iCloud+, Apple Fitness+, and Apple News+ — all in one simple subscription.",
    link: "/entertainment/apple-one",
  },
  {
    title: "Apple TV+",
    image: "/images/appletv.jpg",
    highlight:
      "Watch award-winning Apple Originals — series, films, and documentaries — in stunning 4K HDR and Dolby Atmos.",
    link: "/entertainment/apple-tv-plus",
  },
  {
    title: "Apple Music",
    image: "/images/applemusic.jpg",
    highlight:
      "Stream over 100 million songs, curated playlists, and live radio stations. All ad-free. All Apple.",
    link: "/entertainment/apple-music",
  },
  {
    title: "Apple Arcade",
    image: "/images/applearcade.jpg",
    highlight:
      "Play over 200 amazing games without ads or in-app purchases. Apple Arcade brings fun for the whole family.",
    link: "/entertainment/apple-arcade",
  },
  {
    title: "Apple Podcasts",
    image: "/images/applepodcasts.jpg",
    highlight:
      "Explore thousands of shows, stories, and interviews from around the world — all in one place.",
    link: "/entertainment/apple-podcasts",
  },
  {
    title: "Apple Books",
    image: "/images/applebooks.jpg",
    highlight:
      "Read and listen to best-selling books and audiobooks, beautifully crafted for every Apple device.",
    link: "/entertainment/apple-books",
  },
  // Extra Apple-related sections to make it 15 in total
  {
    title: "Apple Fitness+",
    image: "/images/applefitness.jpg",
    highlight:
      "Workout with world-class trainers on your iPhone, iPad, or Apple TV. Fitness+ integrates perfectly with Apple Watch.",
    link: "/entertainment/apple-fitness",
  },
  {
    title: "Apple News+",
    image: "/images/applenews.jpg",
    highlight:
      "Stay informed with top stories from trusted publishers, magazines, and newspapers — all in one subscription.",
    link: "/entertainment/apple-news",
  },
  {
    title: "Apple iCloud+",
    image: "/images/appleicloud.jpg",
    highlight:
      "Store your memories safely with iCloud+. Private, secure, and always available across all Apple devices.",
    link: "/entertainment/apple-icloud",
  },
  {
    title: "Apple Photos Memories",
    image: "/images/applephotos.jpg",
    highlight:
      "Relive your favorite moments with auto-curated highlights and memories crafted by your iPhone.",
    link: "/entertainment/apple-photos",
  },
  {
    title: "Apple Music Classical",
    image: "/images/applemusicclassical.jpg",
    highlight:
      "Dive into the world’s largest classical music catalog, featuring expert curation and lossless audio.",
    link: "/entertainment/apple-music-classical",
  },
  {
    title: "Apple Originals",
    image: "/images/appleoriginals.jpg",
    highlight:
      "From award-winning dramas to inspiring documentaries — Apple Originals redefine storytelling.",
    link: "/entertainment/apple-originals",
  },
  {
    title: "Apple Kids+",
    image: "/images/applekids.jpg",
    highlight:
      "Safe, fun, and educational — a world of content designed for kids to explore, learn, and grow.",
    link: "/entertainment/apple-kids",
  },
  {
    title: "Apple Immersive Audio",
    image: "/images/appleaudio.jpg",
    highlight:
      "Experience sound that surrounds you. Spatial Audio and Dolby Atmos bring music and movies to life.",
    link: "/entertainment/apple-audio",
  },
  {
    title: "Apple Vision+",
    image: "/images/applevision.jpg",
    highlight:
      "Step into the future of entertainment with immersive mixed-reality experiences powered by Apple Vision Pro.",
    link: "/entertainment/apple-vision",
  },
];

const EntertainmentPage = () => {
  return (
    <div className="bg-black text-white">
      {/* 🎬 Hero Section */}
      <section className="text-center py-28 bg-gradient-to-b from-gray-900 to-black">
        <h1 className="text-6xl font-extrabold mb-6 tracking-tight">
          Apple Entertainment
        </h1>
        <p className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed">
          Welcome to the ultimate Apple experience — from music to movies, games
          to books, podcasts to fitness, all built to inspire and entertain.
        </p>
      </section>

      {/* 🌈 Grid Overview Section */}
      <section className="p-10 bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.slice(0, 6).map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-400 mb-3">{service.highlight}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 🌟 Long 15 Sections */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`flex flex-col lg:flex-row ${
            index % 2 === 0 ? "bg-black" : "bg-gray-950"
          } items-center justify-between py-24 px-8 lg:px-20`}
        >
          {/* Image Section */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img
              src={service.image}
              alt={service.title}
              className="rounded-2xl shadow-lg w-full h-[450px] object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 lg:pl-10">
            <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {service.highlight}
            </p>
            <Link
              to={service.link}
              className="inline-block mt-4 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
            >
              Learn more
            </Link>
          </div>
        </section>
      ))}

      {/* ✨ Final CTA Section */}
      <section className="text-center py-24 bg-gray-900">
        <h2 className="text-5xl font-bold mb-8">Entertainment. Elevated.</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-3xl mx-auto">
          Everything you love — in one ecosystem. From movies to music, books to
          games, Apple brings joy, connection, and creativity together.
        </p>
        <Link
          to="/entertainment/apple-one"
          className="inline-block bg-white text-black font-semibold px-10 py-5 rounded-full hover:bg-gray-200 transition"
        >
          Try Apple One Free
        </Link>
      </section>
    </div>
  );
};

export default EntertainmentPage;
