import React from "react";
import Image from "../element/Image";
import clsx from "clsx";

export default function Logo({ className }) {
  return (
    <div>
      <Image
        className={clsx(className, "w-full h-auto object-cover ")}
        src="/Aset/logo.png"
        alt="Fusion"
        height={400}
        width={400}
        priority
      />
    </div>
  );
}
