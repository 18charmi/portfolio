import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

function Torus({ color = "#FDB813" }) {
  const ref = useRef<Mesh>(null);
  useFrame((s, d) => {
    if (!ref.current) return;
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.005;
    ref.current.rotation.z += 0.01;
  });
  return (
    <mesh ref={ref}>
      {/* <torusGeometry args={[1, , 16, ]} /> */}
      <sphereGeometry args={[0.09, 10]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Torus;
