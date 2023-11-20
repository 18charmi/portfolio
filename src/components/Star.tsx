import { useEffect, useState } from "react";
// import THREE from "three";

function Star({ color = "red", defaultPosition = undefined }) {
  const [position, setPosition] = useState(() => {
    if (typeof defaultPosition !== "undefined") {
      return defaultPosition as [number, number, number];
    }
    let res = Array(3)
      .fill(0)
      .map(() => {
        let min = -20,
          max = 20;
        return Math.floor(Math.random() * (max - min + 1) + min);
      });
    return res as [number, number, number];
  });

  return (
    <mesh position={position}>
      <sphereGeometry args={[0.09, 10]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Star;
