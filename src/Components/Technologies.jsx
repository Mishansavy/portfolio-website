import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
export const Technologies = () => {
  return (
    <div className="border-b border-neutral-300	pb-24">
      <h1 className="my-10 text-center text-4xl">Technologies</h1>
      <div className="flex lg:flex-row flex-wrap items-center justify-center gap-2">
        <div className=" flex rounded-2xl p-4 gap-4">
          {/* reactjs  */}
          <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
          {/* postgresql  */}
          <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <BiLogoPostgresql className="text-7xl text-sky-700" />
          </div>
          {/* nodejs  */}
          <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-500" />
          </div>
          {/* redis  */}
          <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <DiRedis className="text-7xl text-red-700" />
          </div>
          {/* nextjs  */}
          <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <TbBrandNextjs className="text-7xl " />
          </div>
        </div>
      </div>
    </div>
  );
};
