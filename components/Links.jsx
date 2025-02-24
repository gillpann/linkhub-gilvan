"use client";

import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3, // Jeda waktu lebih panjang antara link
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.03,
    boxShadow: "0 0 20px var(--primary)",
    borderColor: "rgba(var(--primary-rgb), 0.6)",
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.2 },
  },
};

const iconVariants = {
  initial: { rotate: 0 },
  hover: {
    rotate: 10,
    scale: 1.1,
    transition: { duration: 0.3 },
  },
};

const links = [
  {
    href: "https://ahmad-gilvan.vercel.app",
    icon: <Image src="/logo.png" alt="logo" width={36} height={36} />,
    title: "Portfolio",
    description: "Check out my work",
  },
  {
    href: "https://github.com/gillpann",
    icon: <Github className="w-6 h-6 text-[var(--text-light)]" />,
    title: "GitHub",
    description: "View my repositories",
  },
  {
    href: "https://linkedin.com/in/gilvan",
    icon: <Linkedin className="w-6 h-6 text-[var(--text-light)]" />,
    title: "LinkedIn",
    description: "Connect with me",
  },
];

const Links = () => {
  return (
    <section className="relative w-full max-w-md px-4 pb-16 z-10">
      <div className="flex flex-col space-y-4">
        {links.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-[var(--card-bg)] hover:bg-[var(--card-hover)] rounded-xl backdrop-blur-sm transition-colors duration-300 border border-[var(--primary)]/20 shadow-[0_0_9px_var(--primary)]"
            custom={i} // Meneruskan index sebagai custom prop
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div
              className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
              initial="initial"
              whileHover="hover"
              variants={iconVariants}
            >
              {link.icon}
            </motion.div>
            <div className="flex-grow">
              <h2 className="text-[var(--text-light)] font-semibold text-lg">
                {link.title}
              </h2>
              <p className="text-[var(--text-muted)] text-sm">
                {link.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Links;
