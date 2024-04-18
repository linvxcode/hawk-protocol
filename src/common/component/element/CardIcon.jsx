import clsx from "clsx";
import React from "react";
import ComponentTransition from "./ComponentTransition";

export default function CardIcon({ item }) {
  return (
    <div className="flex lg:flex-row flex-wrap w-full gap-5 justify-center items-center">
      {item.map((items, index) => (
        <ComponentTransition
          delay={index * 0.1}
          key={index}
          className={clsx(
            items.className,
            ` flex   gap-5 p-10 bg-[#E8E8E8] rounded-3xl  overflow-hidden`
          )}
        >
          {items.icon && (
            <div className="bg-[#495464] p-2 rounded-xl">{items.icon}</div>
          )}
          <div className="w-full">
            <h1 className="text-3xl text-[#181818]  font-semibold pb-4">
              {items.title}
            </h1>
            <p className="text-sm text-[#7A7A7A]">{items.desc}</p>
          </div>
        </ComponentTransition>
      ))}
    </div>
  );
}
