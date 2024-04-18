'use client'
import clsx from "clsx";
import React from "react";

const ButtonViewAll = ({title= '', className= ''}) => {
  const handleMouseMove = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    e.target.style.setProperty("--x", x + "px");
    e.target.style.setProperty("--y", y + "px");
  };

  return (
    <button
      className={clsx(className,`btn relative group inline-flex items-center justify-center px-8 py-3 bg-neutral-900 text-[#dfdfdf] text-base  tracking-wide rounded-full `)}
      onMouseMove={handleMouseMove}
    >
      <span className=" z-10 group-hover:text-neutral-900 group-hover:font-bold transition-all duration-300 ">
        {title}
      </span>
    </button>
  );
};

export default ButtonViewAll;
