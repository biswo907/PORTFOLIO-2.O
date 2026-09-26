import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Logo(props: { finishedLoading: boolean }) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        duration: props.finishedLoading ? 0 : 0.8,
        delay: props.finishedLoading ? 0 : 1.5,
      }}
      className="relative flex items-center space-x-3 cursor-pointer group"
    >
      <Link href="/" passHref>
        <div className="flex items-center space-x-2.5">
          <div className="relative w-9 h-9 flex justify-center items-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
            <img
              src="/logo.svg"
              alt="Biswajit Dash Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(100,255,218,0.5)]"
            />
          </div>
          <span className="font-mono text-lg font-bold text-gray-100 group-hover:text-AAsecondary transition-colors duration-300 tracking-wider">
            Biswajit<span className="text-AAsecondary"></span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
