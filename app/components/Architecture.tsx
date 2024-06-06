import Image from "next/image";
import dynamic from "next/dynamic";
import light from "../assets/light1feature.svg";
import light2 from "../assets/llight2feature.svg";
import architecture from "../assets/architecture.json";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

export default function Architecture() {
  return (
    <div id="architecture" className=" bg-[#040201] relative flex flex-col justify-center items-center w-full  gap-8 py-20  overflow-visible  ">
      <Image
        className=" z-20 absolute top-[-150.71px] w-fit h-fit overflow-x-hidden left-1/2 pointer-events-none shrink-0 -translate-x-1/2 "
        alt=""
        src={light}
      />

      <Image
        src={light2}
        alt="elipse"
        className=" z-30 w-full absolute  !m-[0] top-[-300.87px] pointer-events-none  max-w-full left-1/2   -translate-x-1/2   h-[1221px] shrink-0  "
      />
      <div className="  flex flex-col justify-center gap-4 items-center px-2 ">
        <div className=" w-fit shadow-[0px_3px_4px_rgba(142,_142,_142,_0.25)_inset,_0px_0px_0px_1px_rgba(44,_64,_94,_0.06),_0px_1px_1px_rgba(44,_64,_94,_0.04),_0px_2px_4px_rgba(44,_64,_94,_0.08)] rounded-[900px] bg-black box-border  flex flex-row items-center justify-center py-1 px-2.5 gap-[6px] text-left text-[14px] text-white font-geist border-[1px] border-solid border-gray">
          <div className="w-2 relative shadow-[0px_0px_0px_4px_rgba(241,_102,_58,_0.24)] rounded-[50%] bg-[#fc4f2d] h-2" />
          <p className="relative leading-[20px] opacity-[0.8]">Deoxys state-of-the-art features blockchain</p>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-[48px]  lg:text-[55.9px]  tracking-[-1.09px] leading-[58px] font-medium font-aeonik text-transparent !bg-clip-text [background:linear-gradient(177.7deg,_#fff,_rgba(255,_255,_255,_0.66))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center inline-block">
            How Deoxys Operates
          </h1>
          <p className=" mx-4 text-[17px] leading-[24px] md:max-w-[571px] text-white text-center inline-block opacity-[0.6]">
            Lorem ipsum dolor sit amet consectetur. Laoreet magna fermentum ut mi bibendum euismod varius quis odio. Vitae vestibulum adipi
          </p>
        </div>
      </div>
      {/*  architectire 3*/}
      <div className=" overflow-hidden flex flex-col justify-center items-center   lg:max-w-6xl  ">
        <Lottie
          loop
          animationData={architecture}
          play
          speed={1.5}
          className="scale-110 mt-[-70px] py-4 md:py-O  mb-[-20px] md:mt-[-100px] md:mb-[-30px] lg:mt-[-150px]"
        />
        {/* legend*/}
        <div className=" text-xs md:text-base flex justify-around md:justify-center items-center gap-4 md:gap-24 md:px-4">
          <div className=" flex justify-center gap-4 items-center">
            <div className="w-10 relative rounded-sm bg-[#2ec596] h-2.5"></div>
            <p className=" leading-[24px]  text-[#eff8ff]  opacity-[0.7]">State Update</p>
          </div>
          <div className=" flex justify-center gap-4 items-center">
            <div className="w-10 relative rounded-sm bg-[#c1791d] h-2.5"></div>
            <p className=" leading-[24px]  text-[#eff8ff]  opacity-[0.7]">Block</p>
          </div>
          <div className=" flex justify-center gap-4 items-center">
            <div className="w-10 relative rounded-sm bg-[#b6383c] h-2.5"></div>
            <p className=" leading-[24px]  text-[#eff8ff]  opacity-[0.7]">Commitment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
