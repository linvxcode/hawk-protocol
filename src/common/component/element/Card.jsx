import React from "react";
import Image from "./Image";
import clsx from "clsx";
import ComponentTransition from "./ComponentTransition";

export default function Card({ item }) {
  return (
    <div className="flex lg:flex-row flex-wrap w-full gap-5 pt-10 justify-center items-center">
      {item.map((items, index) => (
        <ComponentTransition
          delay={index * 0.1}
          key={index}
          className={clsx(
            items.className,
            ` flex   gap-5  bg-gradient-to-b from-[#141414] to-[#141414] rounded-3xl border-[1px] border-[#262626] overflow-hidden`
          )}
        >
          {items.img && (
            <div className="w-[100%] overflow-hidden h-[210px] flex justify-center items-center mx-auto">
              <Image
                className="w-full h-auto object-cover"
                src={items.img}
                alt="Fusion"
                height={400}
                width={400}
                priority
              />
            </div>
          )}
          <div className="w-full py-5  px-5">
            <h1 className="text-xl text-[#CCCCCC]">{items.title}</h1>
            <p className="text-sm text-[#7A7A7A]">{items.desc}</p>
          </div>
          {items.icon && (
            <div className="w-[100%] py-5 lg:py-10 px-5 h-full  flex justify-center items-center mx-auto">
              <div className="w-full flex gap-5">
                {items.icon[1]}
                {items.icon[2]}
                {items.icon[3]}
              </div>
            </div>
          )}
        </ComponentTransition>
      ))}
    </div>
  );
}
