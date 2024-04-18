'use client'
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function H1Hover({ title, href, pathname, item }) {
  return (
    <div className="overflow-hidden relative">
      <Link
        href={href}
        className="mb-0 sm:w-[20%] group  overflow-hidden"
      >
        <h1 className="text-[#dfdfdf] font-medium transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700  group-hover:translate-y-[-90%]">
          {title}
        </h1>
        <h1 className="text-[#dfdfdf] font-medium transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700 top-0 translate-y-[80%] group-hover:translate-y-[0%] absolute">
          {title}
        </h1>
        <div
          className={clsx(
            pathname === item
              && "absolute top-[22px] left-[20%] h-[2px] flex justify-center items-center w-[50%]  bg-[#696969]  transition-all duration-300 "
              
          )}
        ></div>
      </Link>
    </div>
  );
}
