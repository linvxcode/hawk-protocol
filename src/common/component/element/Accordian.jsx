"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import ComponentTransition from "@/common/component/element/ComponentTransition";

export default function Accordian({ Content, className }) {
  const [openStates, setOpenStates] = useState(
    Array(Content.length).fill(false)
  );

  const handleClick = (index) => {
    setOpenStates((prevOpenStates) => {
      const newOpenStates = [...prevOpenStates];
      newOpenStates[index] = !newOpenStates[index];
      return newOpenStates;
    });
  };

  return (
    <ComponentTransition className="flex flex-col">
      {Content.map((item, index) => (
        <div
          key={index}
          className={clsx(className,`flex overflow-hidden flex-col mt-10 relative pb-5`)}
        >
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            transition={{
              type: "tween",
              ease: [0.8, 0.2, 0, 1],
              duration: 3,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="border-b-[1px] border-neutral-400 top-0 inset-0  absolute "
          ></motion.div>
          <button onClick={() => handleClick(index)} className="w-full relative">
            <div
              className={clsx("flex group h-auto items-center gap-5", {
                "cursor-pointer": !openStates[index],
              })}
            >
              <div className="relative flex justify-start w-full">
              <h1 className="md:text-xl text-start text-base font-semibold">{item.title}</h1>
              </div>
              <div className="relative flex justify-end w-full right-0">
                <GoPlus
                  size={30}
                  className={`${
                    openStates[index] ? "rotate-45" : "rotate-0"
                  } transition-all duration-300`}
                />
              </div>
            </div>
            <motion.div
              className="overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: openStates[index] ? "auto" : "0px" }}
            >
              <h1 className="text-start mt-5">{item.desc}</h1>
            </motion.div>
          </button>
        </div>
      ))}
    </ComponentTransition>
  );
}
