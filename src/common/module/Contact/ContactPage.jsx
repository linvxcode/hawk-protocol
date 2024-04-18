import H1 from "@/common/component/element/H1";
import HeroText from "@/common/component/element/HeroText";
import React from "react";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {
  return (
    <div className="h-auto max-w-[1500px]  flex flex-col justify-center px-5 lg:px-10  w-full mt-20 overflow-hidden">
      <div className="w-full max-sm:mt-10 mt-10  z-[9] flex-col items-center flex justify-center ">
        <div className="w-full max-sm:mt-10 mt-10  z-[9] flex-col items-center flex justify-center ">
          <div className="w-full bg-[#E8E8E8] px-5 py-8 rounded-3xl flex justify-center items-center">
            <H1
              title="Feel free to reach out with any questions. We're here to help and will respond promptly. Please provide as much information as possible."
              className="!text-2xl lg:!text-5xl w-full lg:w-[90%] font-semibold !text-center justify-center items-center"
              textColor="normal"
            />
          </div>
        </div>

      </div>
      <div className="w-full py-10  lg:px-44">
        <ContactForm />
      </div>
      <div className="w-full ">{/* <Functionalities  /> */}</div>
      <div className="w-full pb-20">{/* <Faqs /> */}</div>
    </div>
  );
}
