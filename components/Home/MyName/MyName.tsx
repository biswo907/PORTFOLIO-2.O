import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";

export default function MyName(props: { finishedLoading: boolean }) {
  return (
    <div className="relative w-full h-screen min-h-[650px] flex flex-col justify-center items-start px-6 sm:px-12 md:px-24 lg:px-36 xl:px-48 pt-16 overflow-hidden bg-transparent z-20">
      {/* Attractive Blooming Radial Glow Background */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-gradient-to-tr from-AAsecondary/25 via-cyan-500/20 to-purple-600/15 rounded-full blur-[110px] pointer-events-none animate-pulse duration-3000" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-AAsecondary/15 rounded-full blur-[90px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-4xl space-y-6">
        {/* Greeting */}
        <motion.span
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-AAsecondary font-mono text-sm sm:text-base tracking-wider block font-semibold"
        >
          Hi, my name is
        </motion.span>

        {/* Main Name Heading */}
        <motion.h1
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-100 font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none"
        >
          Biswajit Dash<span className="text-AAsecondary">.</span>
        </motion.h1>

        {/* Sub-heading / Tagline */}
        <motion.h2
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-300 font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
        >
          I turn ideas into reality<span className="text-AAsecondary">.</span>
        </motion.h2>

        {/* Bio Paragraph */}
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-gray-400 font-Header text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed pt-2"
        >
          I&apos;m a <span className="text-gray-200 font-semibold">Software Developer</span> with <span className="text-AAsecondary font-semibold">3+ years of experience</span> specializing in building high-performance applications with <span className="text-AAsecondary font-semibold">React Native, Expo, React.js, Next.js, and TypeScript</span>. Experienced in real-time ecosystems (Socket.IO, Mapbox), payment gateways, and <span className="text-AAsecondary font-semibold">AI (LLM) integrations</span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch sm:items-center"
        >
          <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto relative group overflow-hidden bg-AAsecondary text-AAprimary font-mono font-bold text-sm px-8 py-4 rounded-xl shadow-xl shadow-AAsecondary/25 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2.5">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Check Resume
                <ArrowIcon className="w-4 h-4 text-AAprimary group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </a>
          <a href="#SomethingIveBuiltSection" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto text-center font-mono font-semibold text-sm px-8 py-4 rounded-xl border border-AAsecondary/60 text-AAsecondary bg-AAsecondary/10 hover:bg-AAsecondary/20 transition-all duration-300 transform active:scale-95 shadow-lg shadow-AAsecondary/5">
              Explore Featured Work
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
