import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import Torus from "@/components/Torus";
import Light from "@/components/Light";
// import { OrbitControls } from "@react-three/drei";
import Star from "@/components/Star";
import Box from "@/components/Box";
import { PerspectiveCamera, Scene } from "three";

function CustomCamera({ position }: { position: any }) {
  const cameraRef = useRef<PerspectiveCamera>(null);
  const set = useThree(({ set }) => set);

  useFrame(({ camera }) => {
    camera.rotation.z += 0.001;
  });

  useLayoutEffect(() => {
    if (cameraRef.current) set({ camera: cameraRef.current });
  }, []);

  // useLayoutEffect(() => {
  //   if(cameraRef.current){
  //     cameraRef.current.rotateY =
  //   }
  // },[position]);

  return <perspectiveCamera ref={cameraRef} position={position} />;
}

function SceneBg() {
  const ref = useRef<Scene>(null);
  const [pos, updatePosition] = useState([0, 0, 2]);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let t = document.body.getBoundingClientRect().top,
        zPos = t * -0.05;

      if (t < -45 && zPos >= 2) {
        updatePosition([0, 0, zPos]);
        // updatePosition([t * -0.01, t * -0.01, t * (-0.05)]);
      }
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <div className="fixed inset-0">
      <Suspense fallback={null}>
        <Canvas
          style={{
            backgroundColor: "#1F282D",
            // backgroundImage: "url(/space.jpg)",
          }}
        >
          <CustomCamera position={pos} />

          {/* <OrbitControls /> */}
          <Light />
          <Torus />
          {Array(100)
            .fill("")
            .map((d, i) => (
              <Star key={`star-${i}`} color="white" />
            ))}
        </Canvas>
      </Suspense>{" "}
    </div>
  );
}

export default SceneBg;
