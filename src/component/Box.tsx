import { Color, Vector3, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, TextureLoader } from "three";

function Box({ color = "blue", position = [0,0,0], image = false }: {image?: boolean, color?: Color, position?: Vector3}) {
  const boxRef = useRef<Mesh>(null);
  useFrame(() => {
    if (!boxRef.current) return;
    boxRef.current.rotation.x += 0.01;
    boxRef.current.rotation.y += 0.01;
  });

  const colorMap = useLoader(TextureLoader, 'me.png')

  return (
    <mesh ref={boxRef} position={position}>
      <boxGeometry />
      <meshStandardMaterial color={image ? undefined : color} map={image ? colorMap: undefined} />
    </mesh>
  );
}

export default Box;
