import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero({ onContactClick }) {
  return (
    <section className="hero">
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>
          Hi, I'm <span className="highlight">Gaurav</span> — React Developer
        </h1>
        <p>I build scalable and beautiful web apps using React and modern JavaScript.</p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button onClick={onContactClick}>Work with me</button>
          <a href="#projects" className="outline-btn">
            View Projects
          </a>
        </motion.div>

        <motion.div
          className="socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="mailto:you@example.com"><FaEnvelope /></a>
        </motion.div>
      </motion.div>
    </section>
  );
}
