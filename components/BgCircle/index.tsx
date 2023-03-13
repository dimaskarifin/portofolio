import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BgCircle({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[150px] w-[150px] mt-52 animate-ping" />

      <div className="rounded-full border border-[#333333] h-[250px] w-[250px] absolute mt-52" />
      <div className="rounded-full border border-[#333333] h-[450px] w-[450px] absolute mt-52" />

      <div className="rounded-full border  border-[#F7AB0A]/10 h-[560px] w-[560px] opacity-30 absolute mt-52 animate-pulse" />
      <div className="rounded-full border  border-[#33333333] h-[650px] w-[750px] absolute mt-52" />
    </motion.div>
  );
}

export default BgCircle;
