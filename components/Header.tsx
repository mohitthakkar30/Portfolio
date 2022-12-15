import React from "react";
import { SocialIcon } from "react-social-icons";
import {motion} from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div 
      initial={{
        x:-250,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5,
      }}
      className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon
          fgColor="black"
          bgColor="transparent"
          url="https://www.linkedin.com/in/mohit-thakkar-3008/"
        ></SocialIcon>
        <SocialIcon
          fgColor="black"
          bgColor="transparent"
          url="https://twitter.com/mohit_thakkar_"
        ></SocialIcon>
        <SocialIcon
          fgColor="black"
          bgColor="transparent"
          url="https://github.com/mohitthakkar30"
        ></SocialIcon>
      </motion.div>

      <motion.div 
      initial={{
        x:250,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1,
      }}
      transition={{
        duration:1.5
      }}
      className="flex flex-row items-center text-black-400 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="black"
          bgColor="transparent"
          url="mailto:thakkarmohit90@gmail.com"
        />
        <p className="hidden md:inline-flex text-sm text-black-400">Let's Connect</p>
      </motion.div>
    </header>
  );
}
