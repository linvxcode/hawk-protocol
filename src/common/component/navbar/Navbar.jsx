"use client";
import clsx from "clsx";
import Link from "next/link";
import NavMobile from "./NavMobile";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavigationItem } from "@/common/constant/NavigationItem";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { ButtonSpot } from "../element/ButtonSpot";
import ButtonViewAll from "../element/ButtonViewAll";
import H1Hover from "../element/H1Hover";
import Logo from "./Logo";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scroll, setScrolled] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const close = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 10);
    });
  }, []);

  return (
    <motion.div
      className={clsx(
        scroll ? "backdrop-blur-sm bg-[#383535de] border-[#bebebd69]" : " bg-transparent border-transparent",
        `w-full transition-all duration-300 mx-auto  border-b-[1px]  max-w-[1500px]   py-5 px-5 2xl:rounded-3xl  lg:px-10 fixed top-0 z-[99]`
      )}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex w-full z-[999] items-center justify-start">
          <Link
            href="/"
            className="group relative w-auto flex justify-start items-center gap-1"
          >
            <Logo className='!w-[70px] !h-[50px]' />
            <h1
              className={`text-2xl lg:text-3xl text-[#dfdfdf] tracking-[-0.10em] font-semibold`}
            >
             Hawk Protocol 
            </h1>
          </Link>
        </div>
        <div className="lg:flex hidden relative justify-center gap-10 items-center w-full">
          {NavigationItem.map((item, index) => (
            <H1Hover
              key={index}
              href={item.src}
              title={item.title}
              item={item.src}
              pathname={pathname}
            />
          ))}
        </div>

        <div className="lg:hidden flex  items-center">
          <NavMobile open={open} handleOpen={handleOpen} close={close} />
        </div>

        <div className="lg:flex hidden  w-full items-end justify-end">
          <Link href="/" className=" flex justify-end">
            <ButtonViewAll
              title="Go To App"
              className="hover:!bg-[#EEEEEE] transition-colors duration-300 overflow-hidden !bg-transparent outline outline-1 outline-[#dfdfdf]  w-auto !py-2"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
