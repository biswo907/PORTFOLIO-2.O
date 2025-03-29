import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
export default function Logo(props: { finishedLoading: boolean }) {
  return (
    <>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          y: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
          opacity: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
        }}
        className=" relative h-12 w-10 "
      >
        <motion.span
          initial={{ x: 1 }}
          className="absolute h-full w-full flex justify-center items-center text-lg font-Header text-AAsecondary"
        >
          Biswo
        </motion.span>
      </motion.div>
    </>
  );
}
