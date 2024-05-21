import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
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
      <h1 className="my-10 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {/* reactjs  */}
        <motion.div
          variants={iconvariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        {/* postgresql  */}
        <motion.div
          variants={iconvariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
        {/* nodejs  */}
        <motion.div
          variants={iconvariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        {/* redis  */}
        <motion.div
          variants={iconvariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4"
        >
          <DiRedis className="text-7xl text-red-700" />
        </motion.div>
        {/* nextjs  */}
        <motion.div
          variants={iconvariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl " />
        </motion.div>
      </div>
    </div>
  );
};
