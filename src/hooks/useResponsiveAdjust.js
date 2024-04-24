import React from "react";
import { useState, useEffect } from "react";

const useResponsiveAdjust = () => {
  const [isForMobile, setIsForMobile] = useState(false);

  useEffect(() => {
    function mobileUiFunc() {
      if (window.innerWidth <= 500) {
        setIsForMobile(true);
      }
    }
    mobileUiFunc();

    window.addEventListener("resize", mobileUiFunc);

    return () => {
      window.removeEventListener("resize", mobileUiFunc);
    };
  }, []);
  return isForMobile;
};

export default useResponsiveAdjust;
