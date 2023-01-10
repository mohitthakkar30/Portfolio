import React from "react";
import { motion } from "framer-motion";
import Skill from "../components/Skill";

type Props = {};

export default function ({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center items-center mx-auto xl:space-y-0 overflow-hidden"
    >
      <h2 className="absolute uppercase top-24 xl:top-12 tracking-[20px] text-black-500 text-2xl">
        Skills
      </h2>
      {/* <h3 className="absolute uppercase top-36 xl:top-24 tracking-[3px] text-black-500 text-sm">
        Hover on a skill for proficiency.
      </h3> */}
      <div className="grid grid-cols-4 gap-5 " >
        <Skill directionLeft={true} source="/solidity.png" />
        <Skill directionLeft={true} source="/rust.png" />
        <Skill directionLeft={true} source="/ts.png" />
        <Skill directionLeft={true} source="/js.png" />
        <Skill directionLeft={false} source="/react.png" />
        <Skill directionLeft={false} source="/next.png" />
        <Skill directionLeft={false} source="/node.png" />
        <Skill directionLeft={false} source="/github2.png" />
      </div>
    </motion.div>
  );
}
