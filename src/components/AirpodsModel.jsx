import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";

const AirpodsModel = () => {
  const groupRef = useRef();
  const { scene } = useGLTF("/models/airpods_pro.glb");

  const fadeIn = useSpring({
    from: { scale: 0.001, opacity: 0 },
    to: { scale: 0.5, opacity: 1 }, // ⬅️ increased scale
    config: { mass: 1, tension: 100, friction: 20 },
    delay: 100,
  });

  return (
    <a.group
      ref={groupRef}
      scale={fadeIn.scale}
      opacity={fadeIn.opacity}
      position={[-0.6, 0.8, 0]} // You can move this down if it's too high
    >
      <primitive object={scene} />
    </a.group>
  );
};

useGLTF.preload("/models/airpods_pro.glb");

export default AirpodsModel;
