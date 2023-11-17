import { useEffect, useState } from "react";
// import THREE from "three";

function Star({ color = "red" }) {
  const [position, setPosition] = useState(() => {
    let res = Array(3)
      .fill(0)
      .map(() => {
        let min = -5,
          max = 5;
        return Math.floor(Math.random() * (max - min + 1) + min);
      });
    return res as [number, number, number];
  });

  console.log({ position });
  return (
    <mesh position={position}>
      <sphereGeometry  args={[0.09, 10]}
      />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Star;
