"use client";
import SceneBg from "@/component/Scenebg";
import Torus from "@/component/Torus";
import Light from "@/component/Light";
import { OrbitControls } from "@react-three/drei";
import Star from "@/component/Star";
function Home() {
  return (
    <div className="h-screen w-screen">
      <SceneBg>
        <OrbitControls/>
        <Light />
        <Torus />
        {/* {Array(3)
          .fill("")
          .map((d, i) => (
            <Star key={`star-${i}`} />
          ))} */}
      </SceneBg>
    </div>
  );
}
export default Home;
