import React from "react";
import { motion } from "framer-motion";

export default function Projects({ projects }) {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tech-tags">
              {p.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={p.github}>Code</a>
              <button>Live Demo</button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
