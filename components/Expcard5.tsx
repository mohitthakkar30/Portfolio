import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function ({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-0 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[1200px] h-auto snap-center bg-gray-100 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          opacity: 0,
          y: -100,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="h-32 w-32 rounded-full xl:w-[150px] xl:h-[150px] "
        // src="/ethindia.png"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">SheBuilds</h4>
        <p className="text-2xl font-bold mt-1">Open Bazaar</p>
        <div className="flex space-x-2 my-2">
          <img src="/react.png" className="h-10 w-10 rounded-full bg-white" />
          <img src="/next.png" className="h-10 w-10 bg-white rounded-full " />
          <img src="/tailwind.jpg" className="h-10 w-10 rounded-full " />
          <img src="/solidity.png" className="h-10 w-10 rounded-full bg-white" />
          <img src="/etherjs.png" className="h-10 w-10 rounded-full bg-white" />
        </div>
        <p className="uppercase text-black-300">Jan 2022</p>
        <ul className="list-disc space-y-1  ml-5  text-m">
          <li>OpenBazaar offers a decentralized alternative to traditional 
            online marketplaces, allowing users to interact directly with
            each other and retain control over their own data and transactions.</li>
          <li>
            I have done the smart contract and integration of frontend with smart contract.        
          </li>
        </ul>
      </div>
    </article>
  );
}
