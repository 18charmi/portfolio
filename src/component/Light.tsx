import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import {  PointLight, PointLightHelper } from "three";

function Light() {
  const pointRef = useRef<PointLight>(null!);

  useHelper(pointRef, PointLightHelper, 0.5, "hotpink");
  
  return (
    <>
      <ambientLight />
      <gridHelper args={[20, 20, 0xff0000, 'teal']} />
      {/* <gridHelper /> */}
      <pointLight ref={pointRef} />
    </>
  );
}
export default Light;
