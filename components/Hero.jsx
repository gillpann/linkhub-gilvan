"use client";

import ProfileImage from "./ProfileImage";
import GradientText from "./ui/GradientText";
import RotatingText from "./ui/RotatingText";
import CircularText from "./ui/CircularText"
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-12 md:pb-14 px-6 z-10 w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
      {/* Avatar */}
      <ProfileImage />

      {/* Name with gradient */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 sm:mb-4 text-center whitespace-nowrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Hi, <GradientText>Gilvan</GradientText> is here!
      </motion.h1>

      {/* Rotating Text with Background */}
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <span className="text-lg sm:text-xl md:text-2xl font-medium text-[var(--text-light)]">
          I'm a
        </span>
        <span className="px-3 py-1 sm:px-4 sm:py-2 rounded-lg bg-[var(--primary)] text-black font-bold text-xl sm:text-2xl md:text-3xl">
          <RotatingText
            texts={[
              "Frontend Developer",
              "UI/UX Enthusiast",
              "Tech Enthusiast",
            ]}
            mainClassName="inline-block"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </span>
      </motion.div>

      {/* Welcome text */}
      <motion.p
        className="text-base sm:text-lg md:text-xl text-[var(--text-muted)] text-center mt-4 sm:mt-5 md:mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Welcome to my personal link hub
      </motion.p>

      {/* Circular Text Animation */}
      <motion.div
        className="mt-4 sm:mt-6 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <CircularText
          text="EXPLORE•CONNECT•"
          onHover="speedUp"
          spinDuration={20}
          className="text-[var(--primary)]"
        />
      </motion.div>

      {/* Scroll Down Animation */}
      <motion.div
        className="flex flex-col items-center gap-2 mt-4 sm:mt-5"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--primary)]" />
        </motion.div>
        <span className="text-[var(--text-muted)] text-sm sm:text-base">
          Scroll Down
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
