import { motion, useScroll } from "framer-motion";
import React from "react";
import { useMoonParallax } from "@/common/hooks/useParallax";

export default function Gradient() {
  const { scrollY } = useScroll();
  const { y } = useMoonParallax(scrollY);
  return (
    <motion.div
      className="rounded-full overflow-hidden w-[300px] h-[300px]"
      style={{
        y,
      }}
    >
      <svg
        width="300"
        height="300"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_63_117)">
          <path d="M800 0H0V800H800V0Z" fill="white" />
          <path
            d="M800 0H0V800H800V0Z"
            fill="#1BC47D"
            fillOpacity="0.372159"
          />
          <mask
            id="mask0_63_117"
            // style="mask-type:luminance"
            style={{maskType: 'luminance'}}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="800"
            height="800"
          >
            <path d="M800 0H0V800H800V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_63_117)">
            <g filter="url(#filter0_f_63_117)">
              <path d="M553 12.5H139.5V477.5H553V12.5Z" fill="#00C5DF" />
              <path d="M633.5 292H51.5V901H633.5V292Z" fill="#F2371F" />
              <path d="M829 5.5H221V534.5H829V5.5Z" fill="#EE46D3" />
              <path d="M801.5 399.5H300.5V811H801.5V399.5Z" fill="#00C5DF" />
            </g>
          </g>
          <g style={{mixBlendMode: 'overlay'}}>
            <path d="M800 0H0V800H800V0Z" fill="#808080" />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_63_117"
            x="-198.5"
            y="-244.5"
            width="1277.5"
            height="1395.5"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="125"
              result="effect1_foregroundBlur_63_117"
            />
          </filter>
          <clipPath id="clip0_63_117">
            <rect width="800" height="800" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </motion.div>
  );
}

export function Gradient2() {
  const { scrollY } = useScroll();
  const { yRev } = useMoonParallax(scrollY);
  return (
    <motion.div
      className="rounded-full overflow-hidden w-[200px] h-[200px]"
      style={{
        y: yRev,
      }}
    >
      <svg
        width="200"
        height="200"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_61_118)">
          <path d="M800 0H0V800H800V0Z" fill="white" />
          <path d="M800 0H0V800H800V0Z" fill="#00C5DF" fillOpacity="0.326337" />
          <mask
            id="mask0_61_118"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="800"
            height="800"
          >
            <path d="M800 0H0V800H800V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_61_118)">
            <g filter="url(#filter0_f_61_118)">
              <path d="M681 21.5H196V636H681V21.5Z" fill="#18A0FB" />
              <path d="M930 248.5H382V837H930V248.5Z" fill="#907CFF" />
            </g>
          </g>
          <g style={{ mixBlendMode: "overlay" }}>
            <path d="M800 0H0V800H800V0Z" fill="#808080" />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_61_118"
            x="-54"
            y="-228.5"
            width="1234"
            height="1315.5"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="125"
              result="effect1_foregroundBlur_61_118"
            />
          </filter>
          <clipPath id="clip0_61_118">
            <rect width="800" height="800" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </motion.div>
  );
}
