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
      <section id="about" className="h-max">
        <AboutSection />
      </section>
      <section id="project" className="h-max">
        <Projects />
      </section>
      <section id="skill" className="h-max">
        <TechStack />
      </section>
      <section className="bg-gray-500" id="connect">
        <Footer />
      </section>
    </>
  );
}
export default Home;
