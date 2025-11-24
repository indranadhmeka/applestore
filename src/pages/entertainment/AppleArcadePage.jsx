import React from "react";

const AppleArcadePage = () => {
  const videos = [
    { title: "Apple Arcade – Gameplay Highlights", src: "/media/applearcade/gameplay1.mp4" },
    { title: "Apple Arcade – Controller Experience", src: "/media/applearcade/gameplay2.mp4" },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Apple Arcade</h1>
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

export default AppleArcadePage;
