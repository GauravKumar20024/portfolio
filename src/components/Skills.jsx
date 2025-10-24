import React from "react";
import { motion } from "framer-motion";

export default function Skills({ skills }) {
  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((s, index) => (
          <motion.div
            key={s.name}
            className="skill"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="skill-header">
              <span>{s.name}</span>
              <span>{s.level}%</span>
            </div>
            <div className="bar">
              <motion.div
                className="bar-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                transition={{ duration: 1 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
