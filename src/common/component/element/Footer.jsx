import { NavigationItem } from "@/common/constant/NavigationItem";
import React from "react";
import LinkSlideHover from "./LinkSlideHover";
import {
  FollowusItem,
  InformationItem,
  ResourcesItem,
} from "@/common/constant/FooterItem";
import Logo from "../navbar/Logo";

export default function Footer() {
  return (
    <div className="h-auto max-w-[1500px] relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full">
      <footer>
        <div className="container mx-auto">
          <div className="lg:flex lg:w-full justify-center items-start">
            <div className="w-full -mx-6 lg:w-2/5 flex flex-col px-6 justify-start lg:justify-center lg:items-center">
              <Logo className='!w-[100px] !h-[100px]' />
              <h1 className="text-xl font-semibold">
              Hawk Protocol
              </h1>
            </div>

            <div className="mt-6 lg:mt-0 w-full ">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
                <div>
                  <h1 className="text-white font-semibold ">Follow Us</h1>
                  <div className="flex flex-col relative justify-start mt-1 gap-2 items-start w-full">
                    {FollowusItem.map((item, index) => (
                      <LinkSlideHover
                        className="text-sm text-[#969696]"
                        key={index}
                        href={item.src}
                        title={item.title}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h1 className="text-white font-semibold ">UNCX Network</h1>
                  <div className="flex flex-col relative justify-start mt-1 gap-2 items-start w-full">
                    {InformationItem.map((item, index) => (
                      <LinkSlideHover
                        className="text-sm text-[#969696]"
                        key={index}
                        href={item.src}
                        title={item.title}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h1 className="text-white font-semibold ">Product</h1>
                  <div className="flex flex-col relative justify-start mt-1 gap-2 items-start w-full">
                    {ResourcesItem.map((item, index) => (
                      <LinkSlideHover
                        className="text-sm text-[#969696]"
                        key={index}
                        href={item.src}
                        title={item.title}
                      />
                    ))}
                  </div>
                </div>

                
              </div>
            </div>
          </div>


        </div>
      </footer>
    </div>
  );
}
