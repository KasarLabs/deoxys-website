import Link from "next/link";
import Image from "next/image";

import light_hero from "../assets/light_hero.svg";
import hero from "../assets/Hero.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

export default function HeroSection() {
  return (
    <div>
      {/* Decoration */}
      <div className="flex relative justify-center   h-[1140px] overflow-hidden   ">
        <div className=" z-10 absolute h-[1140px] w-[1435px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(40,_40,_40,_0),_#000_97.66%)]  opacity-[0.32]"></div>
        <Image
          className="absolute z-30 pointer-events-none inset-0 w-full h-full object-cover left-1/2 -translate-x-1/2 "
          src={light_hero}
          alt="hero-light"
        />
        <Lottie className="absolute z-0 inset-0  h-[1140px] w-[1435px] left-1/2 -translate-x-1/2  " loop animationData={hero} play speed={1.5} />

        {/* Content */}
        <div className=" z-20 mt-44 px-4 md:px-6  md:max-w-3xl lg:max-w-4xl ">
          <div className="flex flex-col items-center justify-center">
            <div className="flex shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_3px_4px_rgba(142,_142,_142,_0.25)_inset,_0px_0px_0px_1px_rgba(44,_64,_94,_0.06),_0px_1px_1px_rgba(44,_64,_94,_0.04),_0px_2px_4px_rgba(44,_64,_94,_0.08)] rounded-[900px] bg-black box-border  flex-row items-center justify-center w-fit py-1 px-2.5 gap-[8px]  text-[14px]  text-white  border-[1px] border-solid border-gray">
              <div className="w-[6px] h-[6px]  shadow-[0px_0px_1px_4px_rgba(177,_0,_0,_0.24)] rounded-[50%] bg-[#b10000]" />
              <p className="relative text-[14px] leading-[20px]  text-white text-left opacity-[0.8]">Deoxys state-of-the-art features blockchain </p>
            </div>
            <div className=" mt-4 mb-8 ">
              <h1 className=" text-transparent leading-[64px] md:leading-[82px]   bg-gradient-to-b bg-clip-text from-white to-white/60 text-6xl md:text-[80px] font-medium lg:font-bold text-center tracking-[-1px] ">
                Powering the Future of Starknet
              </h1>

              <p className=" sm:text-[18px] sm:leading-6 md:leading-8 md:mx-4 lg:mx-24 text-white text-center opacity-[0.6] mt-6 ">
                Lorem ipsum dolor sit amet consectetur. Laoreet magna fermentum ut mi bibendum euismod varius quis odio. Vitae vestibulum adipi
              </p>
            </div>
            <div className="  flex w-full flex-col md:flex-row md:justify-center text-[14px] leading-[20px] gap-4 font-medium text-white">
              <Link
                href="/"
                className="  [text-shadow:0px_2px_6px_rgba(0,_0,_0,_0.25)] shadow-[0px_-3px_0px_rgba(0,_0,_0,_0.36)_inset,_0px_0px_5px_4px_rgba(0,_0,_0,_0.07),_0px_2.4000000953674316px_0px_rgba(255,_255,_255,_0.14)_inset,_0px_1px_3px_rgba(143,_143,_143,_0.2),_0px_6px_13px_rgba(0,_0,_0,_0.04),_0px_53px_32px_rgba(0,_0,_0,_0.02),_0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] rounded-lg bg-[#B10000] bg-gradient-to-b from-white/30 to-[#1B1A1A]/0 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-5 gap-[8px] text-center text-[14px] text-general-white font-geist border-[1px] border-solid hover:opacity-90 hover:ring-2 transition-transform duration-300 hover:ring-black border-black"
              >
                Get Started
              </Link>
              <Link
                href="/"
                className="shadow-[0px_-3px_0px_rgba(0,_0,_0,_0.21)_inset,_0px_0px_5px_4px_rgba(0,_0,_0,_0.07),_0px_1px_3px_rgba(143,_143,_143,_0.2),_0px_6px_13px_rgba(0,_0,_0,_0.04),_0px_53px_32px_rgba(0,_0,_0,_0.02),_0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06),_0px_2.4000000953674316px_0px_rgba(255,_255,_255,_0.14)_inset] rounded-lg [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.29),_rgba(27,_26,_26,_0)),_#fff] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-5 text-center text-[14px] text-[#1a1a1a] border-[1px] border-solid border-black hover:opacity-90 hover:ring-2 transition-transform duration-300 hover:ring-black "
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
