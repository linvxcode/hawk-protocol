import ComponentTransition from "@/common/component/element/ComponentTransition";
import H1 from "@/common/component/element/H1";
import SectionText from "@/common/component/element/SectionText";
import React from "react";
import { BsMedium } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function News() {
  return (
    <div className="h-auto max-w-[1500px] relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full">
      <div className="w-full flex flex-col justify-center items-center">
        <SectionText title="NEWS & COMMUNITY" />
        <H1
          title="KEEP UP TO DATE WITH OUR LATEST MOVES IN THE DEFI SPACE."
          className="!text-2xl lg:!text-5xl w-full lg:w-[60%] font-semibold !text-center justify-center items-center"
          textColor="normal"
        />
      </div>
      <ComponentTransition className="w-full flex justify-center py-5 items-center overflow-hidden">
        <div className="w-full relative py-5 gap-2 flex justify-center items-center">
          <div className=" relative">
            <FaTelegram size={50} className="text-[#cfcfcf]" />
          </div>

          <div className=" relative">
            <FaXTwitter size={50} className="text-[#cfcfcf]" />
          </div>

          <div className=" relative">
            <BsMedium size={50} className="text-[#cfcfcf]" />
          </div>
        </div>
      </ComponentTransition>
    </div>
  );
}
