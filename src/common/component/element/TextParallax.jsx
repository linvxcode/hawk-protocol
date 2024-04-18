"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";
import { useTextParallax } from "@/common/hooks/useParallax";

export default function TextParallax({ className, texts, ...other }) {
  const TextAnim = {
    initial: {
      y: 147,
    },
    animate: {
      y: 0,
    },
  };
  const { scrollY } = useScroll();
  const { x, xDown } = useTextParallax(scrollY);

  return (
    <>
      {texts.split("  ").map((text, index) => (
        <motion.div
          key={index}
          style={{ x: index === 1 ? x : xDown }}
          initial="initial"
          whileInView="animate"
          className={`flex  overflow-hidden `}
          transition={{
            type: 'spring'
          }}
          viewport={{ once: true }}
        >
          <motion.h1
            className={`${className} inline-block py-1 font-bold text-[#EEEEEE] text-8xl overflow-hidden `}
            variants={TextAnim}
            transition={{
              type: "tween",
              delay: index * 0.1,
              ease: [0.8, 0.2, 0, 1],
              duration: 2,
            }}
          >
            {text}
          </motion.h1>
        </motion.div>
      ))}
    </>
  );
}
