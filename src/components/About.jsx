import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>
      <p>
        I'm a frontend developer passionate about crafting user-focused, high-performance React apps.
        I believe in clean code, great design, and delivering accessible experiences.
      </p>
      <div className="about-buttons">
        <a href="#">Download Resume</a>
        <a href="#projects" className="primary">See my work</a>
      </div>
    </motion.section>
  );
}
