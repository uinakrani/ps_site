"use client"
import React, { useState, useEffect } from 'react'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import logo from '../img/logo1.svg';
import facebook from "../img/facebook.svg";
import instagram from "../img/instagram.svg";
import pinterest from "../img/pinterest.svg";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {

    const [menu, setMenu] = useState(false);
    const MenuToggle = () => {
        setMenu(!menu);
    };

    useEffect(() => {
        gsap.to(".section-header-top", {
            filter: 'invert(0.4)',
            scrollTrigger: {
                trigger: ".sectipn-two-pre",
                start: "top 50%",
                end: "bottom bottom",
                scrub: true,
            },
        });

        gsap.to(".section-header-top", {
            filter: 'invert(0)',
            scrollTrigger: {
                trigger: ".section-three",
                start: "top 0%",
                end: "bottom 50%",
                scrub: true,
            },
        });

        gsap.to(".section-header-top", {
            filter: 'invert(0.4)',
            scrollTrigger: {
                trigger: ".section-four-title-animation-div",
                start: "top 0",
                end: "bottom bottom",
                scrub: true,
            },
        });

        gsap.to(".section-header-top", {
            filter: 'invert(0)',
            scrollTrigger: {
                trigger: ".video-section",
                start: "top 0",
                end: "bottom bottom",
                scrub: true,
            },
        });
    }, []);

    useEffect(() => {
        if (menu) {
            document.documentElement.classList.add('overflow-y-hidden');
        } else {
            document.documentElement.classList.remove('overflow-y-hidden');
        }
    }, [menu]);

    return (
        <div className={`fixed z-[999] w-full ${menu && 'bg-[#110a06]'}`}>
            <div className='section-header-top flex justify-between w-full md:px-8 py-8 px-4' style={{ filter: "invert(0)" }}>
                {/* <Image
                    src={logo}
                    alt="logo"
                    className={`max-w-[99px] w-full h-[20px] ${menu ? 'invert-[40%] brightness-[(140%)' : ''}`}
                /> */}
                <p className={`max-w-[99px] text-xl font-bold w-full h-[20px] ${menu ? 'invert-[40%] brightness-[(140%)' : ''}`}>RTW</p>
                <div className='flex gap-16 items-center'>
                    <div className={`flex gap-4 items-center ${menu ? 'text-white' : 'text-black'}`}>
                        <a className='font-bold underline underline-offset-4 text-sm' href="#0">MY</a>
                        <span>|</span>
                        <a className='font-bold underline underline-offset-4 text-sm' href="#0">SG</a>
                    </div>
                    <div className='cursor-pointer py-1 px-2' onClick={MenuToggle}>
                        <span className={`${menu ? 'bg-[#fff]' : ''} block bg-[#673a20] w-[61px] h-[1px] mb-2.5 `}></span>
                        <span className={`${menu ? 'hidden' : ''} block bg-[#673a20] w-[61px] h-[1px]`}></span>
                    </div>
                
                </div>
            </div>
            {menu &&
                <div className='h-screen w-screen z-30 2xl:p-[175px] lg:p-20 sm:p-12 p-5 bg-[#110a06]'>
                    <div className='flex justify-between md:flex-row flex-col md:gap-6 gap-3'>
                        <div className='text-sm order-1 py-6'>
                            <div className='2xl:mb-[60px] lg:mb-8 mb-4'>
                                <h3 className='text-[#C5AF8B]'>CONTACT</h3>
                                <p className='text-[#bfbab4] mt-1'>+6593533327</p>
                                <p className='text-[#bfbab4] mt-1'>enquiry@doubble.sg</p>
                            </div>
                            <div>
                                <h3 className='text-[#C5AF8B]'>ADDRESS</h3>
                                <p className='text-[#bfbab4] mt-1'>240B Geylang Road 389299 Singapore ( 3rd floor )</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 leading-[1]'>
                            <Link href="/">
                                <span className='gradiant-text gradiant-animated xl:text-[107px] lg:text-[80px] md:text-6xl text-[50px]'>HOME</span>
                            </Link>
                            <Link href="/">
                                <span className='gradiant-text gradiant-animated xl:text-[107px] lg:text-[80px] md:text-6xl text-[50px]'>WORK</span>
                            </Link>
                            <Link href="/">
                                <span className='gradiant-text gradiant-animated xl:text-[107px] lg:text-[80px] md:text-6xl text-[50px]'>AWARDS</span>
                            </Link>
                            <Link href="/">
                                <span className='gradiant-text gradiant-animated xl:text-[107px] lg:text-[80px] md:text-6xl text-[50px]'>CONTACT</span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full fixed bottom-0 left-0 2xl:px-[175px] lg:px-20 sm:px-12 px-5 flex justify-between items-center mb-12">
                        <div className="flex md:flex-row flex-col w-full justify-between md:items-center">
                            <p className="sm:text-base text-sm mb-1 sm:mb-0 text-[#bfbab4] tracking-[1px]">
                                © 2022 Doubble Interior Pte Ltd 202200322G. All Rights Reserved.
                            </p>

                            <ul className="flex gap-7 mt-2">
                                <li>
                                    <a href="#0">
                                        <Image
                                            src={facebook}
                                            alt="facebook"
                                            className="w-6 h-full object-cover hover:opacity-60 transition-all duration-300 invert"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <Image
                                            src={instagram}
                                            alt="instagram"
                                            className="w-6 h-full object-cover hover:opacity-60 transition-all duration-300 invert"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <Image
                                            src={pinterest}
                                            alt="pinterest"
                                            className="w-6 h-full object-cover hover:opacity-60 transition-all duration-300 invert"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Header;