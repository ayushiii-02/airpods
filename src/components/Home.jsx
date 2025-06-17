import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import AirpodsModel from "./AirpodsModel";
import Pods from "./Pods";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
      delay,
      type: "tween",
    },
  }),
};

const Home = () => {
  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url('/back.jpg')",
        backgroundColor: "#0d0d0d",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <Environment preset="city" />
          <AirpodsModel />
          <Pods />
          <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Text Section */}
      <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-[#adadad] mb-3 drop-shadow-md"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Elevate Your Listening
        </motion.h1>

        <motion.p
          className="text-base md:text-xl text-[#888686] max-w-2xl drop-shadow-sm"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          Experience the next level of sound with AirPods Pro — immersive audio,
          cutting-edge design, and unmatched comfort.
        </motion.p>
      </div>
    </section>
  );
};

export default Home;
