import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AirPodsShowcase = () => {
  const containerRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(img1Ref.current, { opacity: 0 });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        onEnter: () => {
          // Fade in image 2 first (slower)
          gsap.fromTo(
            img2Ref.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.8, ease: "power2.out" }
          );

          // Then dissolve into image 1
          gsap.fromTo(
            img1Ref.current,
            { opacity: 0 },
            {
              opacity: 1,
              delay: 1.4, // slower transition delay
              duration: 1.6,
              ease: "power2.out",
            }
          );
        },
        onEnterBack: () => {
          gsap.set(img1Ref.current, { opacity: 0 });

          gsap.fromTo(
            img2Ref.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.8, ease: "power2.out" }
          );

          gsap.fromTo(
            img1Ref.current,
            { opacity: 0 },
            {
              opacity: 1,
              delay: 1.4,
              duration: 1.6,
              ease: "power2.out",
            }
          );
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[770px] my-10 rounded-3xl overflow-hidden"
    >
      {/* Image 2 appears first */}
      <img
        ref={img2Ref}
        src="/p2.jpg"
        alt="AirPods Layer 2"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Image 1 dissolves in */}
      <img
        ref={img1Ref}
        src="/p1.jpg"
        alt="AirPods Layer 1"
        className="absolute inset-0 w-full h-full object-cover z-10"
      />

      {/* Bottom-left text */}
      <div className="absolute bottom-6 left-6 z-20 text-white">
        <h2 className="text-4xl font-bold mb-2 drop-shadow-md">Designed for Sound</h2>
        <p className="text-lg drop-shadow-md">
          From silence to sensation. Experience AirPods like never before.
        </p>
      </div>

      {/* Dark fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default AirPodsShowcase;
