import { useState, useEffect } from "react";
import "./index.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("About");

  useEffect(() => {
    const sections = NAV_LINKS.map((id) => document.getElementById(id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Nav activeSection={activeSection} onNavClick={scrollTo} />
      <main>
        <Hero onScrollTo={scrollTo} />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
