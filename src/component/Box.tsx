import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

function Box({ color = "blue" }) {
  const boxRef = useRef<Mesh>(null);
  useFrame(() => {
    if (!boxRef.current) return;
    boxRef.current.rotation.x += 0.01;
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Box;
