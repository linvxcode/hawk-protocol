"use client";
import H1 from "@/common/component/element/H1";
import React from "react";
import dynamic from "next/dynamic";
import HeroText from "@/common/component/element/HeroText";
import Image from "@/common/component/element/Image";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsMedium } from "react-icons/bs";
import Ratings from "./components/Ratings";
import SliderTechLeader from "./components/SliderTechLeader";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Button from "@/common/component/element/Button";
import ButtonArrow from "@/common/component/element/ButtonArrow";
import ButtonWarp from "@/common/component/element/ButtonWarp";

const FusionApp = dynamic(() => import("./components/FusionApp"), {
  ssr: false,
});

export default function Hero() {
  return (
    <div className="h-auto max-w-[1500px]  flex flex-col justify-start px-5 lg:px-10  w-full mt-20 overflow-hidden ">
      <div className="w-full gap-5 flex lg:flex-row flex-col justify-center mt-5">
        <div className="w-full  z-[9] flex-col py-5 h-auto flex bg-[#383535] rounded-2xl px-5">
          <div className="w-full mt-5 ">
            <HeroText
              texts="Hawk Protocol"
              className="lg:!text-6xl !text-[#dfdfdf] leading-[0.95em] "
            />
          </div>
          <H1
            delay={0.2}
            className="mt-5 w-full lg:!w-[80%] justify-start !text-lg text-start"
            title="Truly Decentralized, scalable, trusted protocol."
            textColor="normal"
          />
          <ComponentTransition className='w-full overflow-hidden'>
          <div className="w-full relative py-5 gap-2 flex justify-start items-center">
            <div className=" relative">
            <FaTelegram size={35} className="text-[#cfcfcf]" />
            </div>

            <div className=" relative">
            <FaXTwitter size={35} className="text-[#cfcfcf]" />
            </div>  

            <div className=" relative">
            <BsMedium size={35} className="text-[#cfcfcf]" />
            </div>  
          </div>  
          </ComponentTransition>
          <div className="w-full flex lg:flex-row flex-col max-lg:justify-start lg:items-center gap-5 mt-5">
            <div >
              <Button title="Go To App" />
            </div>
            <div >
              <ButtonWarp label='Documentation' />
            </div>
          </div>
    
        </div>

        <ComponentTransition className="basis-[70%] flex w-full relative  justify-center items-center">
          <div className="w-full  h-[600px] overflow-hidden px-5 py-5 relative rounded-2xl">
            <div className="absolute inset-0 w-full  z-[-9]">
              <Image
                className="w-full h-[600px] object-cover "
                src="https://images.unsplash.com/photo-1639322537138-5e513100b36e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Fusion"
                height={400}
                width={400}
                priority
              />
            </div>
          </div>
        </ComponentTransition>
      </div>
      <div className="w-full lg:mt-10">
        <SliderTechLeader />
      </div>

    </div>
  );
}
