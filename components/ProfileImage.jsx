"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ProfileImage = () => {
  return (
    <motion.div
      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black/30 backdrop-blur-sm mb-4 sm:mb-6 relative overflow-hidden border border-[var(--primary)] shadow-[0_0_15px_var(--primary)]"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1,
      }}
      whileHover={{ scale: 1.05 }}
    >
      <Image
        src="/gilvan.jpeg"
        alt="profile"
        fill
        sizes="(max-width: 768px) 80px, 96px"
        className="object-cover"
      />
    </motion.div>
  );
};

export default ProfileImage;