"use client";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import HeroImg from "../img/hero-section-shape-img.png";
import HeroImgShapShaow from "../img/hero-section-shap-shaow-image.png";
import img from "../img/fortics-1.png";
import img2 from "../img/fortics-2.jpg";
import purpose from "../img/Purpose.jpg";
import portain from "../img/gallery-menage-1.jpg";
import portain2 from "../img/gallery-image-2.jpg";
import portain3 from "../img/gallery-image-3.jpg";
import portain4 from "../img/gallery-image-4.jpg";
import ptext from "../img/p-img.png";
import PortfolioPMin from "../img/Portfolio-P-min.png";
import facebook from "../img/facebook.svg";
import instagram from "../img/instagram.svg";
import pinterest from "../img/pinterest.svg";
import videoOverlay from "../img/p-cut-overlay.png";

gsap.registerPlugin(ScrollTrigger,);

const SimpleAnimation = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleMouseEnter = (index) => {
    if (index !== activeItem) {
      setActiveItem(index);
    }
  };

  const handleMouseLeave = () => {
    setActiveItem(0);
  };

  const ourPurpose = [
    {
      name: 'Our Team',
      line: true
    },
    {
      name: 'Our Awards',
      line: true
    },
    {
      name: 'Our Culture',
      line: true
    },
    {
      line: true
    },
  ]

  useEffect(() => {
    

    const vw = (coef) => window.innerWidth * (coef / 100);
    const vh = (coef) => window.innerHeight * (coef / 100);

    // section one shap logo
    gsap.to(".hero-img-shap", {
      opacity: 1,
      left: '46%',
    });

    gsap.to(".hero-img-shap-shaow", {
      opacity: 1,
      left: '54%',
    });

    // section one and two background color
    gsap.to(".section-one-two", {
      backgroundColor: "#110a06",
      scrollTrigger: {
        trigger: ".sectipn-two-pre",
        start: "top 50%",
        end: "bottom bottom",
        scrub: true,
      },
    });


    // section-two-right image
    const heroScroller = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: ".section-two",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    heroScroller
    .to(".section-two-image-two",
      {
        yPercent: -50,
        ease: "none",
      }, 0)
      .to(".section-two-image-one", {
      yPercent: -50,
      ease: "none",
    }, 0)
      .to(".hero-text", {
      yPercent: -0,
      ease: "none",
    }, 0);

    // section-three left full image
    gsap.to(".section-three-image", {
      y: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".section-three-animation-start",
        start: "top 90%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    // section-four image gallary
    const classNames = [
      ".section-four-image1",
      ".section-four-image2",
      ".section-four-image3",
      ".section-four-image4",
    ];

    classNames.forEach((className) => {
      gsap.to(className, {
        y: "-20%",
        ease: "power1.out",
        scrollTrigger: {
          trigger: className,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    });
    gsap.to(".section-four-text", {
      y: -100,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".section-four-our-portfolio-animation",
        start: "top 90%",
        end: "bottom 40%",
        scrub: true,
      },
    });

    const purposeParallax = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: ".section-three-image",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // P text image section-three
    purposeParallax.to(".img-parallax-ptext", {
      yPercent: 300,
      ease: "none",
    });

    // background p logo image section-three
    gsap.to(".parallax-ptext", {
      y: "100%",
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".section-four",
        start: "top 90%",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // section-four-title-wrapper
    gsap.to(".section-four-title-wrapper", {
      y: -200,
      ease: "power1.out",
      opacity: 1,
      scrollTrigger: {
        trigger: ".section-four-title-animation",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
      },
    });

    const devotionQuality = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: ".bgimage-main",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // section four bg Parallax image
    devotionQuality.to(".section-four-bgimage", {
      yPercent: 200,
      ease: "none",
    });

    // video-section-animation
    gsap.to(".our-know-how-section", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".video-section-animation",
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    // video-section wite overlay
    gsap.to(".video-section", {
      className: 'transition-all duration-1000 absolute left-0 top-0 z-10 bg-white h-screen w-screen opacity-[0.8]',
      scrollTrigger: {
        trigger: ".video-section-animation",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
      },
    });

    // P video section image overlay
    gsap.to(".video-overlay", {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: ".video-section-animation",
        start: "top 100%",
        end: "bottom 100%",
        scrub: true,
      },
    });

    // section-six
    gsap.to(".section-six-text", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".section-six-animation",
        start: "top 75%",
        end: "bottom 75%",
        scrub: true,
      },
    });

    // gsap.to(['.our-purpose-border-line0', document.querySelector(".our-purpose-border-line1")], {width: '100%', stagger: 0.3 });
    // gsap.to(['.our-purpose-border-line1', document.querySelector(".our-purpose-border-line2")], { width: '100%', stagger: 2.6 });
    // gsap.to(['.our-purpose-border-line2', document.querySelector(".our-purpose-border-line3")], { width: '100%', stagger: 2.1 });

    // our-purpose-border-line
    gsap.to(".our-purpose-border-line0", {  
      width: '100%',
      stagger: 1.9,
      ease: 'Power3.easeOut',
      scrollTrigger: {
        trigger: ".our-purpose-border-line0",
        start: "top 90%",
        end: "bottom 90%",
        scrub: true,
        // markers: true,
      },
    });
    gsap.to(".animated-text0", {
      x: 20,
      opacity: 1,
      stagger: 2.2,
      ease: 'Power3.easeOut',
      scrollTrigger: {
        trigger: ".animated-text0",
        start: "top 90%",
        end: "bottom 90%",
        scrub: true,
      },
    });



  // our-purpose-border-line-----------------------------
    gsap.to(".our-purpose-border-line1", {
      width: '100%',
      stagger: 3,
      ease: 'Power3.easeOut',
      scrollTrigger: {
        trigger: ".our-purpose-border-line1",
        start: "top 90%",
        end: "bottom 90%",
        scrub: true,
      },
    });
    gsap.to(".animated-text1", {
      x: 20,
      opacity: 1,
      stagger: 3.2,
      ease: 'Power3.easeOut',
      scrollTrigger: {
        trigger: ".our-purpose-main",
        start: "top 90%",
        end: "bottom 90%",
        scrub: true,
      },
    });


 // our-purpose-border-line-----------------------------
    gsap.to(".our-purpose-border-line2", {
      width: '100%',
      stagger: 5,
      scrollTrigger: {
        trigger: ".our-purpose-border-line2",
        start: "top 90%",
        end: "bottom 90%",
        scrub: true,
      },
    });
    gsap.to(".animated-text2", {
      x: 20,
      opacity: 1,
      stagger: 5.3,
      scrollTrigger: {
        trigger: ".our-purpose-main",
        start: "top 90%",
        end: "bottom 90%",
        scrub: true,
      },
    });


    
     // our-purpose-border-line-----------------------------
    gsap.to(".our-purpose-border-line3", {
      width: '100%',
      stagger: 7,
      scrollTrigger: {
        trigger: ".our-purpose-border-line3",
        start: "top 90%",
        end: "bottom 90%",
        scrub: true,
        // markers: true,
      },
    });

  }, []);
  return (
    <main>
      <div className="section-one-two transition-all duration-300">
        {/* section-one */}
        <section className="sm:h-screen sm:py-0 py-80 w-full relative section-one">
          <div>
            <Image
              src={HeroImgShapShaow}
              alt="downArrow"
              className="absolute opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hero-img-shap-shaow xl:max-w-[575px] lg:max-w-[300px] md:max-w-[213px] sm:max-w-[320px] max-w-[187px]"
            />
            <Image
              src={HeroImg}
              alt="downArrow"
              className="absolute opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hero-img-shap xl:max-w-[575px] lg:max-w-[300px] md:max-w-[213px] sm:max-w-[320px] max-w-[187px]"
            />
          </div>
        </section>

        {/* section-two */}
        <div className="sectipn-two-pre"></div>
        <section className="sm:h-screen sm:py-0 pb-96 w-full relative flex items-center justify-center 2xl:px-24 md:px-0 md:pt-40 sm:pb-40 section-two px-5">
          <Image
            src={img2}
            alt=""
            className="absolute 2xl:left-[122px] left-7 md:-bottom-[250px] bottom-0 z-[100] section-two-image-one xl:max-w-[350px] sm:max-w-[186px] max-w-[125px]"
          />
          <div className="hero-text w-full 2xl:max-w-[768px] lg:max-w-[658px] md:max-w-[309px]">
            <h2 className="text-left max-w-[714px] w-full text-[99px] xl:leading-[1.1] md:leading-[65px] leading-[45px] tracking-tighter">
              <span className="gradiant-text gradiant-animated 2xl:text-[99px] lg:text-[74px] md:text-6xl text-[40px] tracking-[1px]">
                Form, Fortis & Function Are
              </span>
              <span className="custom-text lg:text-[150px] text-6xl -rotate-[8deg] inline-block lg:ml-10 ml-5">
                One
              </span>
            </h2>
            <p className="text-sm text-[#bfbab4] max-w-[438px] w-full mt-4 tracking-wide leading-6">
              With the name conveys a sense of multiplication and extra, we
              strive in delivering more than expected in every directions.
            </p>
          </div>
          <Image
            src={img}
            alt=""
            className="absolute 2xl:right-[78px] md:right-7 md:top-[100px] bottom-0 right-6 section-two-image-two translate-y-0 xl:max-w-[443px] lg:max-w-[236px] md:max-w-[180px] sm:max-w-[320px] max-w-[187px]"
          />
        </section>
      </div>

      {/* section-three */}
      <section className="w-full relative section-three z-50 bg-white">
        <div className="section-three-animation-start"></div>
        <div className="flex lg:flex-row flex-col">
          <div className="w-full max-w-[1231px]">
            <div
              className="section-three-image relative z-0 overflow-hidden"
            >
              <Image src={purpose} alt="" className="w-full overflow-hidden lg:h-[618px] xl:h-auto h-[499px]" />
              <Image
                src={ptext}
                alt=""
                className="absolute lg:left-[62%] sm:left-[38%] left-[25%] -top-[50%] z-50 img-parallax-ptext xl:max-w-[500px] md:max-w-[300px] max-w-[250px] -translate-y-[50%]"
              />
            </div>
            {/* <div className="flex flex-col gap-3 mx-auto w-full max-w-[950px] -mt-52 text-white relative z-20">
              <h3 className="text-3xl">Companies need to change the way they manage and lead to match <span>the way that modern humans actually work and live.</span> </h3>
              <h4 className="text-xl"><span className="w-14 inline-block h-[1px] bg-white mr-4 relative -top-1"></span> Brian Halligan</h4>
            </div> */}
          </div>
          <div className="lg:max-w-[671px] w-full flex flex-col items-center justify-center text-[#110a06] xl:p-0 sm:p-20 p-10">
            <div className="lg:max-w-[392px] md:max-w-[592px] w-full">
              <h3 className="xl:text-[40px] text-[24px] xl:mb-10 mb-4">Our Purpose</h3>
              <h5 className="xl:text-lg text-sm xl:mb-5 mb-2">
                To Remain Friends With Our Clients
              </h5>
              <p className="xl:text-sm text-xs">
                It is undoubtable that the outcome of a project matters greatly,
                and that we will surely fulfil, but what makes one feel better
                here is the process that leads to it. It is never just about the
                business alone; it is how you feel from the start until the end
                of the process that matters. We want you to be able to feel
                comfortable and happy throughout the whole journey with us.
              </p>
              {/* <div className="our-purpose-main"></div> */}
              <div className="mt-20 our-purpose-main">
                {ourPurpose.map((item, index) => (
                  <div key={index}>
                    {item?.line &&
                      <div className={`h-[1px] bg-black our-purpose-border-line${index} transition-all duration-1000 opacity-100`} style={{ width: '0' }}></div>
                    }
                    {item?.name &&
                      <div
                        key={index}
                        className={`our-purpose-list main-text-1 relative md:py-8 py-4 border-[#110a06] ${index === activeItem ? 'active' : ''}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <h4 className={`animated-text${index} xl:text-2xl text-xl undo-text transition-all duration-1000`} style={{ opacity: "0" }}>{item?.name}</h4>
                      </div>
                    }
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section-Four */}
      <section className="bg-[#110a06] w-full section-four relative z-0 md:px-0 px-6 pb-24">
        <div className="section-four-title-animation-div"></div>
        <div className="relative bgimage-main">
          <div className="sm:sticky top-0 z-0 flex justify-center items-start">
            <div
              className="section-four-bgimage h-[400px] xl:max-w-[460px] max-w-[260px] -translate-y-[100%]"
            >
              <Image src={PortfolioPMin} alt="" className="mt-[140px]" />
            </div>
          </div>
          <div className="section-four-title-animation"></div>
          <div
            className="xl:p-48 lg:p-20 sm:px-10 section-four-title-wrapper transition-all duration-1000"
            style={{ opacity: "0", transform: "translate(0px, 80px)" }}
          >
            <div className="flex flex-row justify-between">
              <h2 className="text-left 2xl:max-w-[864px] md:max-w-[619px] max-w-[460px] w-full">
                <span className="gradiant-text gradiant-animated 2xl:text-[99px] lg:text-[74px] sm:text-[53px] text-[40px]">
                  Devotion to Quality
                </span>
                <span className="custom-text 2xl:text-[150px] lg:text-[110px] sm:text-[78px] text-6xl -rotate-[8deg] inline-block ml-10">
                  Projects
                </span>
              </h2>
            </div>
            <div className="flex lg:justify-end justify-start mt-9 lg:mt-0">
              <p className="lg:max-w-[338px] w-full xl:text-[15px] lg:text-xs md:text-sm flex items-end justify-end leading-6 text-[#bfbab4]">
                We interpret your dreams and ideas as they relate to your space.
                The process begins with a conversation on how your dreams look
                like, which then allow us to provide you with creative solutions
                involving contemporary and quality designs that helps you fulfil
                the dream that you had told.
              </p>
            </div>
          </div>
          <div className="max-w-[720px] h-[395px] section-four-image1 transition-all duration-1000 md:w-[35.104vw] md:h-[47.292vw] overflow-hidden flex items-center justify-center relative image-overlay">
            <Image
              src={portain}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="main-portain absolute bottom-8 right-10 z-[999]">
              <div className="absolute w-2 h-2 rounded-full bg-[#ffaa00] -left-4 top-2/4 -translate-y-2/4 info-text opacity-0"></div>
              <h4 className="text-lg undo-text text-[#f9f5ef]">Ménage</h4>
            </div>
          </div>
          <div className="md:flex justify-end">
            <div className="max-w-[720px] h-[395px] section-four-image2 transition-all duration-1000 lg:mt-[-300px] md:mt-[-200px] md:w-[28.059vw] md:h-[37.801vw] overflow-hidden flex items-center justify-center image-overlay">
              <Image
                src={portain2}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="main-portain absolute bottom-8 right-10 z-[999]">
                <div className="absolute w-2 h-2 rounded-full bg-[#ffaa00] -left-4 top-2/4 -translate-y-2/4 info-text opacity-0"></div>
                <h4 className="text-lg undo-text text-[#f9f5ef]">
                  Doubble’s Eyrie
                </h4>
              </div>
            </div>
          </div>
          <div className="max-w-[720px] h-[395px] section-four-image3 transition-all duration-1000 lg:-mt-[220px] md:-mt-[120px] md:ml-[43.229vw] md:w-[35.104vw] md:h-[47.292vw] overflow-hidden flex items-center justify-center relative image-overlay">
            <Image
              src={portain3}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="main-portain absolute bottom-8 right-10 z-[999]">
              <div className="absolute w-2 h-2 rounded-full bg-[#ffaa00] -left-4 top-2/4 -translate-y-2/4 info-text opacity-0"></div>
              <h4 className="text-lg undo-text text-[#f9f5ef]">Park</h4>
            </div>
          </div>
        </div>
        <div className="max-w-[720px] h-[395px] section-four-image4 transition-all duration-1000 md:w-[28.059vw] md:h-[37.801vw] xl:-mt-[200px] md:-mt-[100px] overflow-hidden flex items-center justify-center relative image-overlay">
          <Image
            src={portain4}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="main-portain absolute bottom-8 right-10 z-[999]">
            <div className="absolute w-2 h-2 rounded-full bg-[#ffaa00] -left-4 top-2/4 -translate-y-2/4 info-text opacity-0"></div>
            <h4 className="text-lg undo-text text-[#f9f5ef]">Modernas</h4>
          </div>
        </div>
        <div className="section-four-text transition-all duration-1000 md:ml-[43.229vw] lg:pb-[-120px] md:-mt-[0%] -mt-[-14%]" style={{ transform: "translate(0px, 100px)" }}>
          <div className="section-four-our-portfolio-animation"></div>
          <h2 className="text-left gradiant-text gradiant-animated max-w-[714px] w-full xl:text-[80px] text-[42px] xl:leading-[1.1] xl:tracking-tighter">
            Discover <br />
            <span>  Our Portfolio</span>
          </h2>
          <div className="relative projects-text xl:mt-10 mt-2 sm:pb-20 xl:pb-0">
            <a
              href="#0"
              className="relative underline underline-offset-8 xl:text-sm text-sm text-white tracking-[0.073vw] projects-text transition-all duration-1000"
            >
              View Projects
            </a>
            <div className="absolute w-2 h-2 rounded-full bg-[#ffaa00] -left-4 info-text opacity-0 top-[40%] main-portain"></div>
          </div>
        </div>
      </section>

      {/* section-five */}
      <section className="relative w-screen">
        <div className="sticky top-0">
          <div className="video-section"></div>
          <div className="relative z-0 lg:h-screen h-[500px] lg:w-screen overflow-hidden">
            <video className="h-screen object-cover w-screen" playsinline="true" autoplay="true" muted="true" loop="true" buffered="" >
              <source src="https://streamable.com/l/ss1ntt/mp4-high.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-0 left-0 bottom-0 opacity-0 video-overlay transition-all duration-1000 scale-150 w-full">
              <Image
                src={videoOverlay}
                alt=""
                className="lg:w-full lg:h-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="xl:py-40 xl:px-56 sm:px-28 px-6 h-screen mt-[100vh] flex justify-self-start flex-col relative w-full z-10 our-know-how-section transition-all duration-1000 opacity-0">
          <div className="video-section-animation"></div>
          <div className="flex justify-between lg:flex-row flex-col sm:gap-10 gap-4 w-full max-w-[1455px]">
            <h2 className="gradiant-text gradiant-animated xl:text-[80px] lg:text-[40px] sm:text-[50px] text-[30px] whitespace-nowrap">
              Our  Know - How
            </h2>
            <div className="max-w-[511px] w-full">
              <h5 className="xl:text-xl lg:text-base text-lg mb-8 tracking-[1px]">
                Utilizing over several years of experience, a combined passion,
                and a design vision, we bring your visualization to life.
              </h5>
              <ul className="xl:text-3xl lg:text-base text-2xl">
                <li className="border-t border-[#000] xl:py-8 lg:py-4 py-6">Design & Build</li>
                <li className="border-t border-[#000] xl:py-8 lg:py-4 py-6">Residential</li>
                <li className="border-t border-[#000] xl:py-8 lg:py-4 py-6">Commercial</li>
                <li className="border-y border-[#000] xl:py-8 lg:py-4 py-6">Retail</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* section-six */}
      <section className="relative md:h-screen sm:h-[80vh] h-[70vh] flex flex-col items-center justify-center section-six">
        <div className="section-six-animation"></div>
        <div className="section-six-text opacity-0 transition-all duration-1000" style={{ transform: "translate(0px, 10px)" }}>
          <h2 className="flex justify-center items-center gradiant-animated custom-text 2xl:text-[225px] xl:text-[168px] lg:text-9xl md:text-[100px] text-[65px] -rotate-[8deg] ml-10 z-[999]">
            Talk To Us
          </h2>
        </div>
        <div className="relative projects-text lg:mt-28 mt-10 font-bold flex justify-center items-center">
          <a
            href="#0"
            className="transition-all duration-1000 underline underline-offset-8 text-black xl:text-sm text-xs tracking-[0.073vw] projects-text uppercase"
          >
            Contact Now
          </a>
          <div className="absolute w-2 h-2 rounded-full bg-[#ffaa00] left-[45%] top-2/4 -translate-y-2/4 info-text opacity-0 main-portain"></div>
        </div>
        <div className="absolute bottom-0 w-full flex justify-between items-center mb-12 px-10 sm:flex-row flex-col">
          <div className="tracking-[1px]">
            <p className="xl:text-base sm:text-xs text-center text-sm">
              © 2022 Doubble Interior Pte Ltd 202200322G. All Rights Reserved.
            </p>
            <a href="#0" className="xl:text-base sm:text-xs text-sm sm:justify-start flex justify-center">
              Developed By BikeBear
            </a>
          </div>
          <div>
            <ul className="flex xl:gap-7 gap-4 sm:mt-0 mt-4">
              <li>
                <a href="#0">
                  <Image
                    src={facebook}
                    alt="facebook"
                    className="xl:w-6 sm:w-4 w-6 h-full object-cover hover:opacity-60 transition-all duration-300"
                  />
                </a>
              </li>
              <li>
                <a href="#0">
                  <Image
                    src={instagram}
                    alt="instagram"
                    className="xl:w-6 sm:w-4 w-6 h-full object-cover hover:opacity-60 transition-all duration-300"
                  />
                </a>
              </li>
              <li>
                <a href="#0">
                  <Image
                    src={pinterest}
                    alt="pinterest"
                    className="xl:w-6 sm:w-4 w-6 h-full object-cover hover:opacity-60 transition-all duration-300"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SimpleAnimation;
