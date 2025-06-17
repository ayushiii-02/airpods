import React from "react";

const AppleMusicOffer = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Text */}
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <span className="text-lg font-medium">Music</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Get 3 months of<br />Apple Music free with<br />your AirPods.*
          </h2>
          <a
            href="#"
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            Learn more &rsaquo;
          </a>
        </div>

        {/* Right Stack */}
        <div className="relative w-[230px] h-[230px] flex items-center justify-center -ml-6">
          {/* Background stacks - aligned, no rotation */}
          <img
            src="album.png"
            alt="Stack back"
            className="absolute w-full h-full object-cover z-0 rounded-xl shadow-md translate-y-[-24px] opacity-70"
          />
          <img
            src="album.png"
            alt="Stack middle"
            className="absolute w-full h-full object-cover z-10 rounded-xl shadow-lg translate-y-[-12px] opacity-85"
          />
          {/* Front cover - same size */}
          <img
            src="album1.jpg"
            alt="Front cover"
            className="relative w-full h-full object-cover z-20 rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AppleMusicOffer;
