import React from "react";
import TechImg from "./TechImg";
import H1 from "@/common/component/element/H1";
import Image from "@/common/component/element/Image";
import { MediaPartnerItem } from "@/common/constant/MediaPartner";
import ComponentTransition from "@/common/component/element/ComponentTransition";

export default function SliderTechLeader() {
  return (
    <div className="w-full h-auto flex justify-center py-10">
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-10 lg:px-20">
        {MediaPartnerItem.map((item, index) => (
          <ComponentTransition delay={index * 0.1} key={index}> 
          <Image
            className="w-[300px] h-auto object-cover "
            src={item.img}
            alt="Fusion"
            height={200}
            width={200}
            priority
            />
        </ComponentTransition>
          ))}
        
      </div>
    </div>
  );
}
