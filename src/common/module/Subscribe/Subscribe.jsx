import ComponentTransition from "@/common/component/element/ComponentTransition";
import React from "react";
import { IoMdSend } from "react-icons/io";

export default function Subscribe() {
  return (
    <div className="h-auto max-w-[1500px] bg-[#cfcfcf] relative flex flex-col justify-center px-5 lg:px-10 py-20 w-full">
      <div className="w-full grid lg:grid-cols-2 text-black justify-start gap-5 lg:justify-center lg:items-center">
        <ComponentTransition className="w-full flex flex-col">
          <h1 className="text-5xl font-semibold">Subscribe</h1>
          <h1>
            Be the first to know about our latest updates, releases, and useful
            insights.
          </h1>
        </ComponentTransition>
        <div>
          <ComponentTransition className=" flex justify-start lg:justify-center  items-center gap-2 ">
            <div className="border-2 border-[#696969] px-5 py-4 rounded-full flex items-center">
              <div>
                <input
                  className="text-[#696969] bg-transparent outline-none"
                  type="email"
                  name=""
                  id=""
                  placeholder="your@gmail.com"
                />
              </div>

              <div>
                <button >
                  <IoMdSend size={30} />
                </button>
              </div>
            </div>
          </ComponentTransition>
        </div>
      </div>
    </div>
  );
}
