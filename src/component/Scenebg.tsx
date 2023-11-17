import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function SceneBg({ children }: { children: any }) {
  return (
    <Suspense fallback={null}>
      <Canvas style={{
        backgroundImage: 'url(/space.jpg)'
      }}>{children}</Canvas>
    </Suspense>
  );
}

export default SceneBg;
