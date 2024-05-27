import { FaPhp } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { FaElementor } from "react-icons/fa6";

import { animate, motion } from "framer-motion";

const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export const Technologies = () => {
  return (
    <div className="border-b border-gray-900	pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-2"
      >
        {/* reactjs  */}
        <motion.div
          variants={iconvariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        {/* php  */}
        <motion.div
          variants={iconvariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4"
        >
          <FaPhp className="text-7xl text-sky-700" />
        </motion.div>
        {/* css  */}
        <motion.div
          variants={iconvariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4"
        >
          <FaCss3 className="text-7xl text-indigo-400" />
        </motion.div>
        {/* js  */}
        <motion.div
          variants={iconvariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4"
        >
          <IoLogoJavascript className="text-7xl" />
        </motion.div>

        {/* mysql  */}
        <motion.div
          variants={iconvariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-violet-500 " />
        </motion.div>
        {/* WordPress  */}
        <motion.div
          variants={iconvariants(3.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4"
        >
          <FaWordpressSimple className="text-7xl text-sky-400" />
        </motion.div>
        {/* Elementor  */}
        <motion.div
          variants={iconvariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4"
        >
          <FaElementor className="text-7xl text-pink-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};
