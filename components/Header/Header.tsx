import React, { useState, useEffect } from "react";
import Logo from "./Headercomp/Logo";
import DesktopMenu from "./Headercomp/DesktopMenu";
import IconMenu from "./Headercomp/IconMenu";
import MobileMenu from "./Headercomp/MobileMenu";
import { motion } from "framer-motion";

const Header = (props: { finishedLoading: boolean; sectionsRef?: any }) => {
  const [scrolled, setScrolled] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [ShowElement, setShowElement] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (typeof document !== "undefined") {
    document.body.style.overflow = rotate ? "hidden" : "auto";
  }

  return (
    <>
      <MobileMenu
        rotate={rotate}
        setRotate={setRotate}
        setShowElement={setShowElement}
        ShowElement={ShowElement}
      />
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-AAprimary/85 backdrop-blur-md border-b border-gray-800/60 shadow-2xl py-3 px-6 sm:px-12"
            : "bg-transparent py-5 px-6 sm:px-12"
        } flex justify-between items-center`}
      >
        <Logo finishedLoading={props.finishedLoading} />

        <IconMenu
          rotate={rotate}
          setRotate={setRotate}
          setShowElement={setShowElement}
          ShowElement={ShowElement}
          finishedLoading={props.finishedLoading}
        />

        <DesktopMenu finishedLoading={props.finishedLoading} />
      </motion.header>
    </>
  );
};

export default Header;
