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
      <section id="skill" className="h-fit">
        <TechStack />
      </section>
      <section className="bg-gray-500" id="connect">
        <Footer />
      </section>
    </>
  );
}
export default Home;

const Card = ({ className = "" }) => {
  return (
    <div
      className={
        "relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border" +
        " " +
        className
      }
    >
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          UI/UX Review Check
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          Read More
        </button>
      </div>
    </div>
  );
};
const PageContent = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-center p-4">
        {Array(10)
          .fill("")
          .map((d, i) => (
            <Card
              key={`page-content-at-${i}`}
              className={i % 2 === 0 || true ? "invisible" : ""}
            />
          ))}
      </div>
    </div>
  );
};
