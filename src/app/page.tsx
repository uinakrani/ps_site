"use client"
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import SimpleAnimation from "../component/SimpleAnimation";
import Header from "../component/Header";
import ScrollSmoother from "../component/ScrollSmoother";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', () => {
      console.log('scrolling...')
    })

    
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
    ScrollTrigger.normalizeScroll(true);
    // function raf(time) {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // }

    // requestAnimationFrame(raf);
  }, [])
  return (
    <main id="scrollsmoother-container">
      <Header />
      {/* <ScrollSmoother /> */}
      <SimpleAnimation />
    </main>
  );
}
