"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function ButtonWarp({label, className}) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="flex  justify-between items-center w-auto p-1 rounded-full ">
      <motion.button
        whileHover={{
            scale: 1.04
        }}
        whileTap={{
            scale:0.95
        }}
        onMouseEnter={() => setIsHover(!isHover)}
        onMouseLeave={() => setIsHover(!isHover)}
        className="cursor-pointer overflow-hidden px-5 py-2 relative gap-2 flex items-center rounded-full border-[1px] border-[#50C878]   "
      >
        <h1 className="text-[#F2F2F2]  translate-y-[0%] transition-all duration-1000 text-xl  font-semibold">
          {label}
        </h1>
        <GoArrowUpRight
          size={22}
          className={`text-[#F2F2F2] mt-1 ${
            !isHover
              ? "translate-x-0 translate-y-0"
              : "translate-x-10 -translate-y-10"
          } delay-150 transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700 relative`}
        />
        <GoArrowUpRight
          size={22}
          className={`text-[#F2F2F2] left-[80%] mt-1 ${
            !isHover
              ? "-translate-x-10 translate-y-10"
              : "translate-x-0 translate-y-0"
          } transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700 absolute `}
        />
        <motion.div
          animate={{
            width: !isHover ? 30 : 290,
            borderRadius: !isHover ? 50 : 10,
            x: !isHover ? 0 : -230,
            height: !isHover ? 30 : 58,
          }}
          transition={{
            type: "tween",
            ease: [0.6, 0.2, 0, 1],
            duration: 1.2,
          }}
          className={`${className} absolute left-[79%] bg-[#50C878] z-[-9]`}
        ></motion.div>
      </motion.button>
    </div>
  );
}
