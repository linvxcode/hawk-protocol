"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

export default function H1({ title= '', className= '',textColor= 'normal',delay }) {
  return (
    <div className={`${className} overflow-hidden w-auto px-2 relative flex  `}>
      <motion.h1
        initial={{ y: "95%" }}
        whileInView={{ y: "0%" }}
        transition={{
          delay: delay,
          type: "tween",
          ease: [0.8, 0.2, 0, 1],
          duration: 1.5,
        }}
        viewport={{ once: true }}
        className={clsx(
          ColorShadow(textColor),
          ` relative`)}
      >
        {title}
      </motion.h1>
    </div>
  );
}


const ColorShadow = (textColor) => {
  const Color = {
    colorShadow: "bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFF7]  to-[#727267] ",
    colorShadowWhite: "bg-clip-text text-transparent bg-gradient-to-br from-[#181818]  to-[#727267] ",
    dark: 'text-[#181818]',
    normal: 'text-[#cfcfcf]',
    white: 'text-[#F2F2F2]',
    opacity: 'text-[#696969]'
  }
  return Color[textColor] || Color.normal;
}
