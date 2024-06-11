import { HERO_CONTENT } from "../constants";
import ProfilePic from "/assets/images/mishanprofile.webp";
import { delay, motion } from "framer-motion";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});
export const Hero = () => {
  return (
    <div className="border-b border-gray-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-9 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Mishan Raj Shah
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter lg:text-xl text-base text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={container(1)}
              initial="hidden"
              animate="visible"
              href="/assets/documents/MishanShah_Resume.pdf"
              download="Mishan-shah-resume"
              className="bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-2 px-4 mb-8 border border-blue-500 hover:border-transparent rounded"
            >
              Download CV
            </motion.a>{" "}
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={ProfilePic}
              alt="Mishan raj shah"
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
