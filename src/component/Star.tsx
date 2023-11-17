import { useEffect, useState } from "react";
import THREE from "three";

function Star({ color = "white" }) {
  const [position, setPosition] = useState<number[]>();
  useEffect(() => {
    let res = Array(3)
      .fill(0)
      .map(
        () => THREE.MathUtils.randFloatSpread(2)
        //   {
        //     let min = -10,
        //       max = 10;
        //     return Math.floor(Math.random() * (max - min + 1) + min);
        //   }
      );
    setPosition(res);
    console.log(res);
  }, []);
  if (!!position) return;
  return (
    <mesh position={position}>
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Star;
