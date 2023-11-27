"use client";
import * as content from "@/json/details.json";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutSection from "./AboutSection";
import TechStack from "./TechStack";
import Projects from "./Projects";

function Home() {
  const { header, footer, about, project, tech } = content;
  return (
    <>
      <Header links={header.links} cta={header.cta} />
      <main className="max-w-md md:max-w-5xl mx-auto">
        <section id="about" className="h-max">
          <AboutSection
            name={about.name}
            description={about.description}
            roles={about.roles}
          />
        </section>
        <section id="project" className="h-max">
          <Projects list={project} />
        </section>
        <section id="skill" className="h-max">
          <TechStack list={tech} />
        </section>
      </main>
      <section className="bg-gray-500" id="connect">
        <Footer links={footer.links} />
      </section>
    </>
  );
}
export default Home;
