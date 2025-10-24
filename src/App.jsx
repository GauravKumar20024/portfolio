import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [dark, setDark] = useState(false);
  const contactRef = useRef(null);

  const projects = [
    { id: 1, title: "Project Alpha", desc: "Responsive React app with state management.", tech: ["React", "CSS", "Framer Motion"], github: "#" },
    { id: 2, title: "Project Beta", desc: "Full-stack demo with REST API and authentication.", tech: ["Node", "Express", "MongoDB"], github: "#" },
    { id: 3, title: "Project Gamma", desc: "Data dashboard with real-time updates.", tech: ["React", "Recharts", "WebSocket"], github: "#" },
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript (ES6+)", level: 92 },
    { name: "HTML & CSS", level: 95 },
    { name: "TypeScript", level: 78 },
    { name: "Node.js", level: 80 },
  ];

  // Apply dark class to body
  useEffect(() => {
    if(dark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [dark]);

  const scrollToRef = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="app">
      <Navbar onThemeToggle={() => setDark(!dark)} onContactClick={() => scrollToRef(contactRef)} dark={dark} />
      <main>
        <Hero onContactClick={() => scrollToRef(contactRef)} />
        <About />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
 