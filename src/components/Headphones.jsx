import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const colors = ["h1.png", "h2.png", "h3.png", "h4.png", "h5.png"]; // your image paths

const ColorCycleShowcase = () => {
  const containerRef = useRef(null);
  const imgsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      imgsRef.current.forEach((img, i) =>
        gsap.set(img, { opacity: i === 0 ? 1 : 0 })
      );

      const tl = gsap.timeline({
        repeat: -1,
        paused: true,
      });

      colors.forEach((_, i) => {
        const nextIndex = (i + 1) % colors.length;
        tl.to(
          imgsRef.current[i],
          {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
          },
          "+=0.5"
        );
        tl.to(
          imgsRef.current[nextIndex],
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.inOut",
          },
          "-=0.8"
        );
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => tl.play(),
        onEnterBack: () => tl.play(),
        onLeave: () => tl.pause(),
        onLeaveBack: () => tl.pause(),
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[770px] mt-20 mb-20 rounded-3xl overflow-hidden bg-black"
    >
      {colors.map((src, i) => (
        <img
          key={i}
          ref={(el) => (imgsRef.current[i] = el)}
          src={src}
          alt={`Headphones color ${i}`}
          className="absolute top-0 left-0 w-full h-full object-contain m-auto max-w-[100%] max-h-[100%]"
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 pointer-events-none" />

      {/* Centered text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
        <h2 className="text-4xl font-bold mb-2 drop-shadow-md">Headphones Pro 4</h2>
        <p className="text-lg drop-shadow-md">
          Experience the ultimate sound quality with our new Headphones Pro 4.<br /> Available in multiple stunning colors, designed to elevate your listening experience.
        </p>
      </div>
    </section>
  );
};

export default ColorCycleShowcase;
