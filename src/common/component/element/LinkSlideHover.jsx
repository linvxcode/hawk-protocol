import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function LinkSlideHover({ title, href, className }) {
  return (
    <div className="overflow-hidden relative">
      <Link
        href={href}
        className={clsx(className, ` mb-0 sm:w-[20%] group  overflow-hidden`)}
      >
        <h1 className="  transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700  group-hover:translate-y-[-90%]">
          {title}
        </h1>
        <h1 className=" transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700 top-0 translate-y-[78%] group-hover:translate-y-[0%] absolute">
          {title}
        </h1>
      </Link>
    </div>
  );
}
