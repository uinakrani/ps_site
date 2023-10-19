"use client"
import React, { useEffect } from "react";
import gsap from "gsap";
import  ScrollTrigger  from "gsap/ScrollTrigger";
// import  ScrollSmoother  from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger);

const ScrollSmoother = () => {
  // useEffect(() => {
  //   // Create the smooth scroller
  //   ScrollTrigger.create({
  //     content: "#scrollsmoother-container", 
  //     smooth: 3,
  //     normalizeScroll: true,
  //     ignoreMobileResize: true,
  //     // Your ScrollTrigger configurations here
  //   });

  // }, []);

  return (
    <div>
     
    </div>
  );
};

export default ScrollSmoother;
