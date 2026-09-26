import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const MobileMenu = (props: {
  rotate: boolean;
  setRotate: (val: boolean) => void;
  setShowElement: (val: boolean) => void;
  ShowElement: boolean;
}) => {
  const closeMenu = () => {
    props.setRotate(false);
    props.setShowElement(true);
  };

  const navLinks = [
    { number: "01.", name: "About", to: "aboutSection", offset: -80 },
    { number: "02.", name: "Experience", to: "WhereIhaveWorkedSection", offset: -100 },
    { number: "03.", name: "Work", to: "SomethingIveBuiltSection", offset: -80 },
    { number: "04.", name: "Contact", to: "GetInTouchSection", offset: -80 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={props.rotate ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex md:hidden w-full h-screen"
    >
      {/* Blurred Backdrop Overlay */}
      <div
        onClick={closeMenu}
        className="w-1/4 h-full bg-black/70 backdrop-blur-md cursor-pointer"
      />

      {/* Glassmorphic Side Drawer */}
      <div className="w-3/4 h-full bg-AAprimary/95 backdrop-blur-2xl border-l border-AAsecondary/20 flex flex-col justify-between p-8 shadow-2xl relative z-50">
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-6 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Logo" className="w-7 h-7 object-contain" />
            <span className="font-mono text-sm font-bold text-gray-100">
              Biswajit<span className="text-AAsecondary"></span>
            </span>
          </div>
          <button
            onClick={closeMenu}
            className="text-gray-400 hover:text-AAsecondary p-1 font-mono text-xl"
          >
            ✕
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col space-y-6 my-auto">
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              spy={true}
              smooth={true}
              offset={item.offset}
              duration={300}
              onClick={closeMenu}
              className="flex items-center space-x-4 group p-2 rounded-lg hover:bg-AAsecondary/10 transition-all duration-300"
            >
              <span className="text-AAsecondary font-mono text-xs">{item.number}</span>
              <span className="text-gray-200 group-hover:text-AAsecondary font-mono text-base font-semibold transition-colors">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Resume Button */}
        <div className="pt-6 border-t border-gray-800">
          <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer" onClick={closeMenu}>
            <button className="w-full text-center font-mono text-sm text-AAsecondary bg-AAsecondary/10 border border-AAsecondary/40 hover:bg-AAsecondary/20 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300">
              Check Resume
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
