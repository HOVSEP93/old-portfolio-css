import React, { useEffect } from "react";
import Vivus from "vivus";

const MainTitle = () => {
  useEffect(() => {
    new Vivus("main-title", {
      duration: 500,
      file: "svg/mainTitle_animated.svg",
    });
  }, []);
  return <div id="main-title"></div>;
};

export default MainTitle;
