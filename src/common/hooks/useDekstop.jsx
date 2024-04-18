import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';


export function useDekstop() {
    const { width } = useWindowSize();
    const [isDekstop, setIsDekstop] = useState(width < 1028);
  
    useEffect(() => {
        const newIsDekstop = width < 1028;
        setIsDekstop(newIsDekstop);
    }, [width]);
  
    return isDekstop;
  }
  