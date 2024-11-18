'use client'
import { useState, useEffect } from "react";

const useViewportPadding = () => {
  const [padding, setPadding] = useState("0px");

  useEffect(() => {
    const setDimensions = () => {
      const adjustedPadding = window.innerWidth <= 768 ? 80 : 0; // add 80px padding for mobile, 0px for desktop
      setPadding(`${adjustedPadding}px`); // remember to include 'px' at the end
    };

    window.addEventListener("resize", setDimensions);
    setDimensions();

    // clean up the event listener
    return () => window.removeEventListener("resize", setDimensions);
  }, []);

  return padding;
};
export default useViewportPadding;
