import Breakline from "@/common/component/element/Breakline";
import H1 from "@/common/component/element/H1";
import React from "react";

export default function TermsPage() {
  return (
    <div className="h-auto max-w-[1500px]  flex flex-col justify-center px-5 lg:px-10  w-full mt-20 overflow-hidden">
      <div className="w-full max-sm:mt-10 mt-10 lg:px-36 z-[9] flex-col items-center flex justify-center ">
        <div className="w-full md:mt-16 mt-5 flex flex-col justify-start items-start">
        <H1
          className=" !justify-start !text-5xl text-start "
          title="Terms & Conditions"
          textColor="normal"
        />
        <H1
          className="md:mt-5 mt-10 w-[80%]  sm:!w-[70%] !justify-start !text-xl text-start "
          title="Nov 24, 2068"
          textColor="normal"
        />
        </div>
        <div className="w-full py-10">
        <Breakline />
        </div>
        <div className="py-5 w-full">
          <p className="py-2 text-lg text-[#1d1d1db7]">
          Fusion: Everyone in my team works towards the same goal. This enables our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.
          </p>
          <p className="py-2 text-lg text-[#1d1d1db7]">
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born. I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself.
          </p>
          <p className="py-2 text-lg text-[#1d1d1db7]"> 
          On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue. Equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through.
          </p>
        </div>

        <div className="py-5 w-full">
          <h1 className="text-3xl font-semibold">
            1. Definitions
          </h1>
          <p className="py-2 text-lg text-[#1d1d1db7]"> 
          Fusion: Everyone in my team works towards the same goal. This enables our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.
          </p>
          <p className="py-2 text-lg text-[#1d1d1db7]"> 
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born. I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself.
          </p>
          <p className="py-2 text-lg text-[#1d1d1db7]"> 
          On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue. Equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through.
          </p>
        </div>
        
        <div className="py-5 w-full">
          <h1 className="text-3xl font-semibold">
          2. Usage & Rights
          </h1>
          <p className="py-2 text-lg text-[#1d1d1db7]"> 
          1.1 “Fusion Design”: Everyone in my team works towards the same goal. This enables our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.
          </p>
          <p className="py-2 text-lg text-[#1d1d1db7]"> 
          1.2 “Denouncing pleasure” and praising pain was born. I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself.
          </p>
          <p className="py-2 text-lg text-[#1d1d1db7]"> 
          1.2 “Denouncing pleasure” and praising pain was born. I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself.
          </p>
        </div>
      </div>


      {/* <CardEndOffer className="!px-0" /> */}
    </div>
  );
}
