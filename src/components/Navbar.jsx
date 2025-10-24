import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar({ onThemeToggle, onContactClick, dark }) {
  return (
    <motion.header
      className="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="brand">Gaurav Kumar</div>
      <nav>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <button onClick={onContactClick}>Contact</button>
        <button className="theme-toggle" onClick={onThemeToggle}>
          {dark ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </motion.header>
  );
}
