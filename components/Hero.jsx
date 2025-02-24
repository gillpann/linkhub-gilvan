"use client";

import GradientText from "./GradientText";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-24 pb-12 px-4 z-10">
      <motion.div
        className="w-24 h-24 rounded-full bg-black/30 backdrop-blur-sm mb-6 flex items-center justify-center border border-[var(--primary)] shadow-[0_0_15px_var(--primary)]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.1,
        }}
      >
        <motion.span
          className="text-3xl font-bold"
          style={{ color: "var(--primary)" }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.span>
      </motion.div>
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Hi, <GradientText> Gilvan</GradientText> is here!
      </motion.h1>
      <motion.p
        className="text-[var(--text-muted)] text-lg md:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Welcome to my personal link hub
      </motion.p>
    </section>
  );
};

export default Hero;
