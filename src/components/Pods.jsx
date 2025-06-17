import React from "react";
import { useGLTF } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";

const Pods = () => {
  const { scene } = useGLTF("/models/airpods_pro (1).glb");

  // Subtle angle, symmetrical distance, lower Y for better alignment
  const leftSpring = useSpring({
    from: { position: [0, 0, 0], rotation: [0, 0, 0], scale: 0 },
    to: { position: [-2.4, 0.01, 0], rotation: [0.04, 0.02, 0], scale: 0.039},
    config: { mass: 1, tension: 90, friction: 20 },
    delay: 1500, // After case appears
  });

  const rightSpring = useSpring({
    from: { position: [0, 0, 0], rotation: [0, 0, 0], scale: 0 },
    to: { position: [1.8, 0.004, 0.1], rotation: [-0.005, -0.5, 0], scale: 0.037 },
    config: { mass: 1, tension: 90, friction: 20 },
    delay: 1500,
  });

  return (
    <>
      <a.group scale={leftSpring.scale} position={leftSpring.position} rotation={leftSpring.rotation}>
        <primitive object={scene.clone()} />
      </a.group>

      <a.group scale={rightSpring.scale} position={rightSpring.position} rotation={rightSpring.rotation}>
        <primitive object={scene.clone()} />
      </a.group>
    </>
  );
};

useGLTF.preload("/models/airpods_pro (1).glb");

export default Pods;
