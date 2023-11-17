"use client";
import SceneBg from "@/component/Scenebg";
import Torus from "@/component/Torus";
import Light from "@/component/Light";
import { OrbitControls } from "@react-three/drei";
import Star from "@/component/Star";
import Box from "@/component/Box";
function Home() {
  return (
    <div className="h-screen w-screen">
      <SceneBg>
        {/* <OrbitControls /> */}
        <Light />
        <Box image={true}/>
        <Torus />
        {Array(100)
          .fill("")
          .map((d, i) => (
            <Star key={`star-${i}`} color="white" />
          ))}
      </SceneBg>
    </div>
  );
}
export default Home;
