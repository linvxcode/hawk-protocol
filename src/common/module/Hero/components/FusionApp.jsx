"use client";
import Image from "@/common/component/element/Image";
import { useDekstop } from "@/common/hooks/useDekstop";
import { useParallax } from "@/common/hooks/useParallax";
import { motion, useScroll } from "framer-motion";
import React from "react";

export default function FusionApp() {
  const { scrollY } = useScroll();
  const { TranslateX,TranslateY} = useParallax(scrollY);
  const isDekstop = useDekstop()
  return (
    <div>
      <motion.div
        className="w-full flex justify-center items-center relative top-[100px] overflow-hidden "
        style={{
          translateY: TranslateY,
          // translateX: TranslateX,
          // rotateX: RotateX,
          // position: "relative",
          // transformPerspective: 819,
          // rotateZ: RotateZ,
          // rotateY: RotateY,
        }}
      >
        <Image
          className="w-[350px] h-auto "
          src="/FusionApp.png"
          alt="Fusion"
          height={400}
          width={400}
          priority
        />
      </motion.div>
    </div>
  );
}
