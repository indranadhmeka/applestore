import React from "react";

const ApplePodcastsPage = () => {
  const videos = [
    { title: "Apple Podcasts – Studio Recording", src: "/media/applepodcasts/clip1.mp4" },
    { title: "Apple Podcasts – On Air", src: "/media/applepodcasts/clip2.mp4" },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Apple Podcasts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((v, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all">
            <video src={v.src} controls className="w-full rounded-md" />
            <p className="p-4 text-center text-lg font-semibold">{v.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplePodcastsPage;
