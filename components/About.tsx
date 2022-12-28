import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly max-auto items-center"
    >
      <h3 className="absolute uppercase top-24 tracking-[20px] text-black-500 text-2xl">
        About
      </h3>
      <motion.img
        src="/profilee2.jpg"
        className="md:w-64 w-56 -mb-20 md:mb-0 flex-shrink-0 object-cover rounded-full top-"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
      />
      <div className="space-y-5 px-0 md:px-10 md:space-y-10 max-w-screen-md">
        <h4 className="md:text-4xl  text-2xl font-semibold ">
          Here is a <span className="md:text-6xl text-2xl">little</span>{" "}
          Introduction:
        </h4>
        <p className="text-sm md:text-base">
          I am Mohit Thakkar 👋, I am a Full-Stack Blockchain Developer 💻. I am Chainlink Community Advocate, contributor at SuperteamDAO❤️ and member of Developer Dao❤️ and here are some projects which I
          have done so far... <br />
          I have made projects like Covid vaccine tracker based on Hyperledger Fabric, also have worked on Escrow System with multi-chain support. I have worked on the Auction platform on Solana. 
          Built Rentable NFTs on Optimism and watch to earn platform on Solana.{" "}
          <br />
          Currently I am building Decentralized Drive Storage.
        </p>
      </div>
    </motion.div>
  );
}
