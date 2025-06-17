import React from "react";

const features = [
  {
    title: "Active Noise Cancellation",
    subtitle: "Control what you hear. And what you don’t.",
    image: "5.jpg",
  },
  {
    title: "Personalized Spatial Audio",
    subtitle: "Immersive sound. Fine-tuned to you.",
    image: "1.jpg",
  },
  {
    title: "Hearing Health",
    subtitle: "Check, aid, and help protect your hearing.",
    image: "3.jpg",
  },
  {
    title: "Noise Cancellation",
    subtitle: "Immerse yourself in music, podcasts, and calls.",
    image: "4.jpg",
  },
  {
    title: "Battery Life",
    subtitle: "Up to 6 hours of listening time.",
    image: "imgg5.jpg",
  },
];

const Features = () => {
  return (
    <section className="bg-white text-black py-20">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
        Features That Elevate Your Experience
      </h2>

      <div className="flex gap-10 overflow-x-auto px-10 scrollbar-hide">
        {features.map((item, index) => (
          <div
            key={index}
            className="w-[420px] h-[640px] flex-shrink-0 relative rounded-2xl overflow-hidden shadow-xl bg-black"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover absolute inset-0 z-0"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 z-10" />

            {/* Text on top */}
            <div className="absolute bottom-6 left-6 right-6 text-white z-20">
              <h3 className="text-2xl font-semibold leading-tight">{item.title}</h3>
              <p className="text-md mt-2 text-gray-300">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;