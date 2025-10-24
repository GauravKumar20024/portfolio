import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Contact</h2>
      <p>Want to collaborate? Drop a message or reach out at <a href="mailto:you@example.com">you@example.com</a>.</p>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <input placeholder="Your name" />
        <input placeholder="Your email" />
        <textarea placeholder="Message"></textarea>
        <button type="button">Send Message</button>
      </motion.form>
    </motion.section>
  );
}
