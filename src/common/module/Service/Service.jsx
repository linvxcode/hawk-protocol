"use client";
import Button from "@/common/component/element/Button";
import H1 from "@/common/component/element/H1";
import SectionText from "@/common/component/element/SectionText";
import React, { useState } from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { CiServer } from "react-icons/ci";
import { BsTools } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { ServiceItem } from "@/common/constant/ServiceItem";
import ComponentTransition from "@/common/component/element/ComponentTransition";

export default function Service() {
  const disable = true;

  return (
    <div className="h-auto max-w-[1500px] relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full">
      <div className="flex w-full  relative justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <SectionText title="Service" />
          <H1
            title="Discover the Power of Hawk Service"
            className="!text-2xl lg:!text-5xl w-full lg:w-[40%] font-semibold !text-center justify-center items-center"
            textColor="normal"
          />
          <H1
            title="Hawk Protocol is the future of decentralized finance. We deliver secure, certified technology for automated and scalable token solutions. This is a new era for investors and projects – one built on innovation and unwavering reliability."
            className="!text-sm lg:!text-base w-full !mt-5 !text-center lg:w-[60%] justify-center items-center"
            textColor="normal"
          />
          <div className="w-full py-5">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
              {ServiceItem.map((item, index) => (
                <ComponentTransition
                  delay={index * 0.1}
                  key={index}
                  className="w-full border-2 rounded-2xl flex flex-col items-center justify-center px-5 py-5"
                >
                  <div className="w-full flex justify-center items-center flex-col py-5">
                    {item.icon}

                    <h1>{item.title}</h1>
                  </div>

                  <div className="w-full flex flex-col gap-2">
                    <Button title="Open APP" disable={index === 2 || index === 3 ? disable : null} />
                    <Button title="Docs" disable={index === 2 || index === 3 ? disable : null} />
                  </div>
                </ComponentTransition>
              ))}

              
            </div>
          </div>

          <ComponentTransition className="w-full py-10 grid lg:grid-cols-2 px-5">
            <div className="border-2 px-8 py-10">
              <h1 className="text-4xl">
                MAXIMIZE YOUR MINING POTENTIAL WITH OUR 30 ACTIVE CLUSTERS.
              </h1>
            </div>
            <div className="bg-[#dfdfdf] lg:rounded-r-2xl text-black px-8 py-10 grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl">33</h1>
                <h1>ACTIVE CLUSTERS</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl">10</h1>
                <h1>LOCATIONS</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl">$512</h1>
                <h1>AVG DAILY PROFIT</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl">$15,360</h1>
                <h1>AVG MONTHLY PROFIT</h1>
              </div>
            </div>
          </ComponentTransition>
        </div>
      </div>
    </div>
  );
}
