import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { PointLight, PointLightHelper } from "three";

function Light() {
  const pointRef = useRef<PointLight>(null!);

  useHelper(pointRef, PointLightHelper, 0.5, "hotpink");
  return (
    <>
      <ambientLight />
      {/* <pointLight ref={pointRef} /> */}
    </>
  );
}
export default Light;
