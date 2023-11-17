import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function SceneBg({ children }: { children: any }) {
  return (
    <Suspense fallback={null}>
      <Canvas>{children}</Canvas>
    </Suspense>
  );
}

export default SceneBg;
