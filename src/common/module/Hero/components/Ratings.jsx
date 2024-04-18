import Image from "@/common/component/element/Image";
import React from "react";
import { CiStar } from "react-icons/ci";

export default function Ratings() {
  return (
    <div className="flex items-center mt-5">
      <div className="w-[40px] h-[40px] object-cover relative overflow-hidden rounded-full  outline outline-[1px] outline-white">
        <Image
          loading="lazy"
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Img"
          width={40}
          height={60}
          className="w-full h-auto "
        />
      </div>
      <div className="w-[40px] translate-x-[-20%] relative overflow-hidden rounded-full h-[40px] outline outline-[1px] outline-white">
        <Image
          loading="lazy"
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Img"
          width={40}
          height={60}
          className="w-full h-auto  "
        />
      </div>
      <div className="w-[40px] translate-x-[-40%] relative overflow-hidden rounded-full h-[40px] outline outline-[1px] outline-white">
        <Image
          loading="lazy"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Img"
          width={40}
          height={60}
          className="w-full h-auto  "
        />
      </div>
      <div className="w-[40px] translate-x-[-60%] relative overflow-hidden rounded-full h-[40px] outline outline-[1px] outline-white">
        <Image
          loading="lazy"
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Img"
          width={40}
          height={60}
          className="w-full h-auto  "
        />
      </div>
      <div className="flex">
        <CiStar size={30} className="text-yellow-500" />
        <CiStar size={30} className="text-yellow-500" />
        <CiStar size={30} className="text-yellow-500" />
        <CiStar size={30} className="text-yellow-500" />
        <CiStar size={30} className="text-yellow-500" />
      </div>
    </div>
  );
}
