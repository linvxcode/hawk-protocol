import { useSpring, useTransform } from "framer-motion";
import { useMobile } from "./useMobile";
import { useDekstop } from "./useDekstop";





export const useParallax = (scrollY) => {
  const isDekstop = useDekstop();

  const TranslateY = useTransform(scrollY,  [50, 700], !isDekstop ? [0, -300] : [-100, 0]);
  const TranslateX = useTransform(scrollY, !isDekstop ? [50, 700] : [0, 0], !isDekstop ? [-4, -400] : [0, 0]);


  return { TranslateY, TranslateX};
}


export const useTextParallax = (scrollY) => {
  const xx = useTransform(scrollY, [0, 500], [0, 200]);
  const xDownn = useTransform(scrollY, [0, 500], [0, -200]);
  const x = useSpring(xx, {
    duration: 2,
  });
  const xDown = useSpring(xDownn, {
    duration: 2,
  });
  return { x, xDown };
};

export const useImageParallax = (scrollY) => {
  const y = useTransform(scrollY, [0, 800], [0, 780]);
  const x = useTransform(scrollY, [0, 800], [0, -400]);
  const w = useTransform(scrollY, [0, 800], [100, 400]);
  const round = useTransform(scrollY, [0, 800], [1000, 20]);

  return { y, x, w, round };
};


export const useTestiParallax = (scrollY) => {
  const isDekstop = useDekstop();
  const xx = useTransform(scrollY, !isDekstop ? [5710, 6100] : [0, 0], !isDekstop ? [0, -1600] : [0, 0]);

  const x = useSpring(xx, {
    duration: 2,
    damping: 30,
  });
  return { x };
};

export const useTeamParallax = (scrollY) => {
  const isDekstop = useDekstop();
  const xx = useTransform(scrollY, !isDekstop ? [2900, 3200] : [0, 0], !isDekstop ? [0, -1900] : [0, 0]);

  const x = useSpring(xx, {
    duration: 2,
    damping: 30,
  });
  return { x };
};

export const useMoonParallax = (scrollY) => {
  const isDekstop = useDekstop();
  const y = useTransform(scrollY, !isDekstop ? [0, 500] : [0, 0], !isDekstop ? [0, -150] : [0, 0]);
  const yRev = useTransform(scrollY, !isDekstop ? [0, 700] : [0, 0], !isDekstop ? [0, 280] : [0, 0]);

  return { y,yRev };
};

export const useIntroText = (scrollY) => {
  const isDekstop = useDekstop();
  const TranslateX = useTransform(scrollY, [50, 700] , [1000 , 0]);


  return { TranslateX};
}





