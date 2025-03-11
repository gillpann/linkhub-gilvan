"use client";

import Image from "next/image";
import { Github, Linkedin, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
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
    href: "https://ahmadgilvann.blogspot.com",
    icon: <i class='bx bxl-blogger text-4xl text-[var(--text-light)]'></i>,
    title: "Blog",
    description: "Read my articles",
  },
  {
    href: "https://github.com/gillpann",
    icon: <i className="bx bxl-github text-4xl text-[var(--text-light)]"></i>,
    title: "GitHub",
    description: "View my repositories",
  },
  {
    href: "https://linkedin.com/in/satria-ahmad-gilvan-pundong",
    icon: <i class='bx bxl-linkedin text-4xl text-[var(--text-light)]' ></i>,
    title: "LinkedIn",
    description: "Connect with me",
  },
  {
    href: "mailto:gpundong@gmail.com",
    icon: <i class='bx bxl-gmail text-4xl text-[var(--text-light)]' ></i>,
    title: "Email",
    description: "Get in touch with me",
  },
];

const Links = () => {
  return (
    <section className="relative w-full max-w-lg px-6 pb-16 z-10">
      <div className="flex flex-col space-y-6">
        {links.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-[var(--card-bg)] hover:bg-[var(--card-hover)] rounded-xl backdrop-blur-sm transition-colors duration-300 border border-[var(--primary)]/20 shadow-[0_0_9px_var(--primary)]"
            custom={i}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div
              className="w-14 h-14 rounded-lg flex items-center justify-center mr-5"
              initial="initial"
              whileHover="hover"
              variants={iconVariants}
            >
              {link.icon}
            </motion.div>
            <div className="flex-grow">
              <h2 className="text-[var(--text-light)] font-semibold text-xl">
                {link.title}
              </h2>
              <p className="text-[var(--text-muted)] text-base">
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
