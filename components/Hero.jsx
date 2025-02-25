"use client";

import GradientText from "./GradientText";
import { motion } from "framer-motion";
import ProfileImage from "./ProfileImage";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12 px-4 z-10 w-full max-w-md mx-auto">
      {/* Avatar */}
      <ProfileImage />

      {/* Name with gradient */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 text-center whitespace-nowrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Hi, <GradientText>Gilvan</GradientText> is here!
      </motion.h1>

      {/* Professional title */}
      <motion.p
        className="text-base sm:text-lg md:text-xl font-medium text-[var(--text-light)] mb-2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Frontend Developer | UI/UX Enthusiast
      </motion.p>

      {/* Welcome text */}
      <motion.p
        className="text-sm sm:text-base md:text-lg text-[var(--text-muted)] text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Welcome to my personal link hub
      </motion.p>

      {/* Scroll Down Animation */}
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0], 
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6 text-[var(--primary)]" />
        </motion.div>
        <span className="text-[var(--text-muted)] text-sm">Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
