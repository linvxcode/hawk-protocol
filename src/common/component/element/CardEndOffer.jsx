"use client";
import React from "react";
import H1 from "./H1";
import Image from "./Image";
import { GoArrowUpRight } from "react-icons/go";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useMobile } from "@/common/hooks/useMobile";
import ComponentTransition from "./ComponentTransition";
import ButtonWarp from "./ButtonWarp";
import Link from "next/link";

export default function CardEndOffer({ className }) {
  const isMobile = useMobile();
  return (
    <ComponentTransition
      className={clsx(
        className,
        `h-auto max-w-[1500px] flex flex-col py-10 px-5 lg:px-10  w-full  overflow-hidden `
      )}
    >
      <div className="w-full relative bg-gradient-to-b from-[#141414] to-[#141414] rounded-3xl border-[1px] border-[#262626] z-[9]  items-start h-[700px] lg:h-[500px] overflow-hidden lg:flex-row flex-col flex justify-center ">
        
        <div className="lg:w-[150%] gap-5 px-4 lg:px-10 py-20 flex flex-col justify-start items-start">
          <H1
            className="!items-start !w-full !justify-start text-2xl lg:!text-4xl  font-semibold text-start "
            title="Stay at the forefront of innovation with the freshest updates."
            textColor="white"
          />
          <H1
            className=" !justify-start !text-base text-start lg:w-[90%]"
            title="Encourage unconventional ideas while also having the flexibility to focus on cost-effective solutions."
            textColor="white"
          />
          <div className="w-full relative gap-5 flex justify-start items-center">
            <div className=" relative">
            <Image
                className="w-[150px] h-auto "
                src="/google-play.svg"
                alt="Fusion"
                height={200}
                width={200}
                priority
              />
            </div>
            <div className=" relative">
            <Image
                className="w-[150px] h-auto "
                src="/app-store.svg"
                alt="Fusion"
                height={200}
                width={200}
                priority
              />
            </div>
          </div> 
        </div>
        <motion.div
          initial={{
            y: 100,
          }}
          whileInView={{
            y: 0,
          }}
          transition={{
            type: "tween",
            ease: [0.8, 0.2, 0, 1],
            duration: 1.5,
          }}
          viewport={{ once: true }}
          className="flex w-full z-[9] overflow-hidden justify-end items-start relative lg:top-[60px] left-[30px] lg:left-[190px]"
        >
          <Image
            className="w-full lg:w-[90%] h-auto object-cover"
            src="/FusionApp.png"
            alt="Fusion"
            height={400}
            width={400}
            priority
          />
        </motion.div>
        <motion.div
          initial={{
            y: 250,
          }}
          whileInView={{
            y: 0,
          }}
          transition={{
            type: "tween",
            ease: [0.8, 0.2, 0, 1],
            duration: 1.5,
          }}
          viewport={{ once: true }}
          className="hidden lg:flex w-full overflow-hidden  justify-end items-start relative lg:top-[150px] left-[30px] lg:left-[90px]"
        >
          <Image
            className="w-full lg:w-[90%] h-auto object-cover"
            src="/FUSION.png"
            alt="Fusion"
            height={400}
            width={400}
            priority
          />
        </motion.div>
      </div>
    </ComponentTransition>
  );
}
