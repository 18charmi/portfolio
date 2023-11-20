"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutSection from "./AboutSection";
import TechStack from "./TechStack";
import Projects from "./Projects";

function Home() {
  return (
    <>
      <Header />
      <section id="about" className="h-screen">
        <AboutSection />
      </section>
      <section id="project" className="h-screen ">
        <Projects />
      </section>
      <section id="skill" className="h-screen">
        <TechStack />
      </section>
      <section className="bg-gray-500" id="connect">
        <Footer />
      </section>
    </>
  );
}
export default Home;
