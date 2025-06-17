import React from "react";

const VideoSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden rounded-3xl my-10">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="vid.mp4" // ✅ replace with your video path
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-10 text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold mb-4">AirPods 4</h2>
          <p className="text-lg mb-2">The next evolution of sound and comfort.</p>
          <p className="text-sm mb-6">
            Starting at $129 &nbsp;&nbsp;&nbsp; With Active Noise Cancellation $179
          </p>

          <div className="flex gap-4">
            <button className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
              Learn more
            </button>
            <button className="bg-white/20 border border-white px-6 py-2 rounded-full hover:bg-white/30 transition">
              Buy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
