
"use client";
import { Lenis as ReactLenis } from "@studio-freight/react-lenis";
import * as React from "react";

export function LenisProvider({ children, ...props }) {
  return (
    <ReactLenis root {...props} 
    options={{
          lerp: 0.1,
          wheelMultiplier: 0.8,
          smoothWheel: true,
          mouseMultiplier: 0.5,
          smoothTouch: false, 
          touchMultiplier: 2, 
          
        }}
    >
      {children}
    </ReactLenis>
  );
}
