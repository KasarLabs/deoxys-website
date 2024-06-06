"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import light from "../assets/light1feature.svg";
import light2 from "../assets/llight2feature.svg";
import entierestatefinal from "../assets/entierenew.json";
import fullsync2 from "../assets/fullsync2.json";
import available2 from "../assets/available2.json";
import lightning2 from "../assets/lightningspace2.json";
import callspeed2 from "../assets/callspeed2.json";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

export default function PerformanceBento() {
  return (
    <div
      id="performance"
      className="  bg-[#040201]  relative flex flex-col justify-center items-center w-full px-4 md:px-6 gap-14 py-20  overflow-visible  "
    >
      <Image
        className=" z-20 absolute top-[-150.71px]  w-[1180px] h-[1221px] overflow-x-hidden left-1/2  shrink-0 -translate-x-1/2 "
        alt=""
        src={light}
      />

      <Image
        src={light2}
        alt="elipse"
        className=" z-30 w-full absolute  !m-[0] top-[-300.87px]  max-w-full left-1/2   -translate-x-1/2   h-[1221px] shrink-0  "
      />
      <div className="  flex flex-col justify-center gap-4 items-center ">
        <div className=" w-fit shadow-[0px_3px_4px_rgba(142,_142,_142,_0.25)_inset,_0px_0px_0px_1px_rgba(44,_64,_94,_0.06),_0px_1px_1px_rgba(44,_64,_94,_0.04),_0px_2px_4px_rgba(44,_64,_94,_0.08)] rounded-[900px] bg-black box-border  flex flex-row items-center justify-center py-1 px-2.5 gap-[6px] text-left text-[14px] text-white font-geist border-[1px] border-solid border-gray">
          <div className="w-2 relative shadow-[0px_0px_0px_4px_rgba(241,_102,_58,_0.24)] rounded-[50%] bg-[#fc4f2d] h-2" />
          <p className="relative leading-[20px] opacity-[0.8]">Deoxys state-of-the-art features blockchain</p>
        </div>
        <div className=" flex flex-col gap-6">
          <h1 className="text-[48px]  lg:text-[55.9px]  tracking-[-1.09px] leading-[58px] font-medium font-aeonik text-transparent !bg-clip-text [background:linear-gradient(177.7deg,_#fff,_rgba(255,_255,_255,_0.66))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center inline-block">
            Deoxys Performance
          </h1>
          <p className=" text-[17px] leading-[24px] md:max-w-[571px] text-white text-center inline-block opacity-[0.6]">
            Lorem ipsum dolor sit amet consectetur. Laoreet magna fermentum ut mi bibendum euismod varius quis odio. Vitae vestibulum adipi
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-5  lg:max-w-6xl">
        {/*  bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/*  card 1 */}
          <div className="bento-box md:col-span-2 lg:col-span-2 ">
            <div className=" flex flex-col w-full rounded-xl h-[400px]   bg-[#171717] box-border  overflow-hidden shrink-0 text-left  text-[#eff8ff] border-[1px] border-solid  border-gray  [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.11),_rgba(1,_1,_1,_0.11))] ">
              <div className="flex bg-[#171717] flex-col gap-4 p-4 z-20 ">
                <h3 className="  text-[24px] leading-[32px] font-medium">Entiere State</h3>
                <p className="self-stretch  text-[16px] leading-[24px] font-inter opacity-[0.7] lg:pr-20">
                  With full support for Starknet JSON-RPC specs, Deoxys efficiently handles all 27 available methods
                </p>
              </div>
              <div className="oveflow-hidden relative bg-[#232323] h-full">
                <Lottie
                  loop
                  animationData={entierestatefinal}
                  play
                  speed={1.5}
                  className="absolute top-[-150px] w-[200%]  left-[-50%] md:w-full md:left-0 inset-0  md:top-[-200px] md:scale-125      "
                />
              </div>
            </div>
          </div>
          {/*  card 2 */}
          <div className="bento-box lg:col-span-1">
            <div className=" flex flex-col w-full rounded-xl h-[400px]     bg-[#171717] box-border  overflow-hidden shrink-0 text-left  text-[#eff8ff] border-[1px] border-solid  border-gray  [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.11),_rgba(1,_1,_1,_0.11))] ">
              <div className="flex bg-[#171717]  flex-col gap-4 p-4 ">
                <h3 className="  text-[24px] leading-[32px] font-medium">Full Synchronization</h3>
                <p className="self-stretch  text-[16px] leading-[24px] font-inter opacity-[0.7] ">
                  Lorem ipsum dolor sit amet consectetur. Leo nec sit quis.
                </p>
              </div>
              <div className="oveflow-hidden relative bg-[#232323] h-full">
                <Lottie loop animationData={fullsync2} play speed={1.5} className=" absolute top-[-150px] inset-0 w-full   " />
              </div>
            </div>
          </div>
          {/*  card 3 */}
          <div className="bento-box">
            <div className=" flex flex-col w-full rounded-xl   bg-[#171717] box-border h-[400px]   overflow-hidden shrink-0 text-left  text-[#eff8ff] border-[1px] border-solid  border-gray  [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.11),_rgba(1,_1,_1,_0.11))] ">
              <div className="flex bg-[#171717]  flex-col gap-4 p-4 ">
                <h3 className="  text-[24px] leading-[32px] font-medium">Available Data</h3>
                <p className="self-stretch  text-[16px] leading-[24px] font-inter opacity-[0.7] lg:pr-10">
                  With full support for Starknet JSON-RPC specs, Deoxys handles all 27 available methods
                </p>
              </div>
              <div className="oveflow-hidden relative bg-[#232323] h-full">
                <Lottie loop animationData={available2} play speed={1.5} className="absolute top-[-150px] scale-125 inset-0 w-full " />
              </div>
            </div>
          </div>
          {/*  card 4 */}
          <div className="bento-box">
            <div className=" flex flex-col w-full rounded-xl h-[400px]    bg-[#171717] box-border   overflow-hidden shrink-0 text-left  text-[#eff8ff] border-[1px] border-solid  border-gray  [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.11),_rgba(1,_1,_1,_0.11))] ">
              <div className="flex bg-[#171717] flex-col gap-4 p-4 ">
                <h3 className="  text-[24px] leading-[32px] font-medium">Lightning Fast</h3>
                <p className="self-stretch  text-[16px] leading-[24px] font-inter opacity-[0.7] lg:pr-20">
                  Lorem ipsum dolor sit amet consectetur. Purus nunc mollis feugiat.
                </p>
              </div>
              <div className="oveflow-hidden relative bg-[#232323] h-full">
                <Lottie
                  loop
                  animationData={lightning2}
                  play
                  speed={1.5}
                  className=" absolute top-[-150px] md:top-[-150px] scale-110 inset-0 w-full "
                />
              </div>
            </div>
          </div>
          {/*  card 5 */}
          <div className="bento-box ">
            <div className=" flex flex-col w-full rounded-xl h-[400px]  bg-[#171717] box-border   overflow-hidden shrink-0 text-left  text-[#eff8ff] border-[1px] border-solid  border-gray  [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.11),_rgba(1,_1,_1,_0.11))] ">
              <div className="flex bg-[#171717] flex-col gap-4 p-4 ">
                <h3 className="  text-[24px] leading-[32px] font-medium">Call Speed</h3>
                <p className="self-stretch  text-[16px] leading-[24px] font-inter opacity-[0.7] lg:pr-20">
                  Lorem ipsum dolor sit amet consectetur. Purus nunc mollis feugiat.
                </p>
              </div>
              <div className="oveflow-hidden relative bg-[#232323] h-full">
                <Lottie
                  loop
                  animationData={callspeed2}
                  play
                  speed={1.5}
                  className=" absolute top-[-170px] md:top-[-120px] scale-150 md:scale-125 inset-0 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
