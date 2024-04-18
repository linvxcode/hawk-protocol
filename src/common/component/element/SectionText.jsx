import React from "react";
import ComponentTransition from "./ComponentTransition";
import clsx from "clsx";

export default function SectionText({icon, title, className= ''}) {
  return (
    <ComponentTransition className={clsx(className,`w-auto px-2 rounded-full flex justify-center text-sm font-medium bg-[#E8E8E8] text-black gap-2 items-center py-1 mb-2`)}>
      {icon}
      <h1>{title}</h1>
    </ComponentTransition>
  );
}
