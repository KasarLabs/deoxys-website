import Image from "next/image";
import gridfeature from "../assets/grid-feature.svg";
import monitor from "../assets/monitor.svg";
import unlock from "../assets/unlock.png";
import insight from "../assets/insight.png";
import onclick from "../assets/onclick.png";
import light from "../assets/light1feature.svg";
import light2 from "../assets/llight2feature.svg";

export default function Benefits() {
  return (
    <div className=" bg-[#040201] relative flex flex-col justify-center items-center w-full px-4 md:px-6 gap-14 py-20  overflow-visible  ">
      <Image
        className=" z-20 absolute top-[-150.71px] pointer-events-none  w-[1180px] h-[1221px] overflow-x-hidden left-1/2  shrink-0 -translate-x-1/2 "
        alt=""
        src={light}
      />

      <Image
        src={light2}
        alt="elipse"
        className=" z-30 w-full absolute pointer-events-none  !m-[0] top-[-300.87px]  max-w-full left-1/2   -translate-x-1/2   h-[1221px] shrink-0  "
      />
      <div className="  flex flex-col justify-center gap-4 items-center ">
        <div className=" w-fit shadow-[0px_3px_4px_rgba(142,_142,_142,_0.25)_inset,_0px_0px_0px_1px_rgba(44,_64,_94,_0.06),_0px_1px_1px_rgba(44,_64,_94,_0.04),_0px_2px_4px_rgba(44,_64,_94,_0.08)] rounded-[900px] bg-black box-border  flex flex-row items-center justify-center py-1 px-2.5 gap-[6px] text-left text-[14px] text-white font-geist border-[1px] border-solid border-gray">
          <div className="w-2 relative shadow-[0px_0px_0px_4px_rgba(241,_102,_58,_0.24)] rounded-[50%] bg-[#fc4f2d] h-2" />
          <p className="relative leading-[20px] opacity-[0.8]">Deoxys state-of-the-art features blockchain</p>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-[48px]  lg:text-[55.9px]  tracking-[-1.09px] leading-[58px] font-medium font-aeonik text-transparent !bg-clip-text [background:linear-gradient(177.7deg,_#fff,_rgba(255,_255,_255,_0.66))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center inline-block">
            Easy to use, powerful to deploy
          </h1>
          <p className=" text-[17px] leading-[24px] md:max-w-[571px] text-white text-center inline-block opacity-[0.6]">
            Lorem ipsum dolor sit amet consectetur. Laoreet magna fermentum ut mi bibendum euismod varius quis odio. Vitae vestibulum adipi
          </p>
        </div>
      </div>

      {/* bento */}
      <div className="w-full flex flex-col md:flex-row gap-5 md:max-w-4xl justify-center items-center flex-wrap  lg:max-w-6xl">
        {/*  card 1*/}
        <div className="w-full lg:max-w-[390px] transition duration-500 ease-in-out transform hover:scale-[1.02] cursor-pointer   relative rounded-xl bg-[#1f1f1f] box-border flex flex-col items-center justify-start py-8 px-6 gap-[24px] text-left text-[24px] text-white font-aeonik border-[1px] border-solid border-gray">
          <Image
            className="w-[153px] absolute !m-[0] top-0 left-1/2 transform  translate-x-[-50%] h-[153px] opacity-[0.8] z-[0]"
            alt=""
            src={gridfeature}
          />
          <div className="w-[85.5px] shadow-[0px_-4.275000095367432px_0px_#000_inset,_0px_5.700000286102295px_1.43px_rgba(255,_255,_255,_0.08)_inset,_0px_0px_0px_2.15px_#000,_0px_8.58328628540039px_8.58px_rgba(0,_0,_0,_0.25)] rounded-[11.4px] bg-dimgray h-[85.5px] flex flex-row items-center justify-center z-[1]">
            <Image className="w-[45.6px] relative h-[45.6px] overflow-hidden shrink-0" alt="" src={monitor} />
          </div>
          <div className="w-[298.7px] flex flex-col items-center justify-start gap-[4px] z-[2]">
            <div className="relative leading-[35px] font-medium">Monitor with precision</div>
            <div className="w-[262px] relative text-[17px] leading-[27px] font-geist text-gray3 text-center [display:-webkit-inline-box] items-center justify-center overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
              Seamlessly monitor your nodes health and network activity in real-time.
            </div>
          </div>
        </div>
        {/*  card 2*/}
        <div className="w-full lg:max-w-[390px] transition duration-500 ease-in-out transform hover:scale-[1.02] cursor-pointer   relative rounded-xl bg-[#1f1f1f] box-border flex flex-col items-center justify-start py-8 px-6 gap-[24px] text-left text-[24px] text-white font-aeonik border-[1px] border-solid border-gray">
          <Image
            className="w-[153px] absolute !m-[0] top-0 left-1/2 transform  translate-x-[-50%] h-[153px] opacity-[0.8] z-[0]"
            alt=""
            src={gridfeature}
          />
          <div className="w-[85.5px] shadow-[0px_-4.275000095367432px_0px_#000_inset,_0px_5.700000286102295px_1.43px_rgba(255,_255,_255,_0.08)_inset,_0px_0px_0px_2.15px_#000,_0px_8.58328628540039px_8.58px_rgba(0,_0,_0,_0.25)] rounded-[11.4px] bg-dimgray h-[85.5px] flex flex-row items-center justify-center z-[1]">
            <Image className="w-[45.6px] relative h-[45.6px] overflow-hidden shrink-0" alt="" src={onclick} />
          </div>
          <div className="w-[298.7px] flex flex-col items-center justify-start gap-[4px] z-[2]">
            <div className="relative leading-[35px] font-medium">One-Click Setup</div>
            <div className="w-[262px] relative text-[17px] leading-[27px] font-geist text-gray3 text-center [display:-webkit-inline-box] items-center justify-center overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
              Easily deploy your full node with a simple, user-friendly application.
            </div>
          </div>
        </div>
        {/*  card 3*/}
        <div className="w-full lg:max-w-[390px]  relative rounded-xl transition duration-500 ease-in-out transform hover:scale-[1.02] cursor-pointer bg-[#1f1f1f] box-border flex flex-col items-center justify-start py-8 px-6 gap-[24px] text-left text-[24px] text-white font-aeonik border-[1px] border-solid border-gray">
          <Image
            className="w-[153px] absolute !m-[0] top-0 left-1/2 transform  translate-x-[-50%] h-[153px] opacity-[0.8] z-[0]"
            alt=""
            src={gridfeature}
          />
          <div className="w-[85.5px] shadow-[0px_-4.275000095367432px_0px_#000_inset,_0px_5.700000286102295px_1.43px_rgba(255,_255,_255,_0.08)_inset,_0px_0px_0px_2.15px_#000,_0px_8.58328628540039px_8.58px_rgba(0,_0,_0,_0.25)] rounded-[11.4px] bg-dimgray h-[85.5px] flex flex-row items-center justify-center z-[1]">
            <Image className="w-[45.6px] relative h-[45.6px] overflow-hidden shrink-0" alt="" src={insight} />
          </div>
          <div className="w-[298.7px] flex flex-col items-center justify-start gap-[4px] z-[2]">
            <div className="relative leading-[35px] font-medium">Real-time Insights</div>
            <div className="w-[262px] relative text-[17px] leading-[27px] font-geist text-gray3 text-center [display:-webkit-inline-box] items-center justify-center overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
              Dive into your nodes live status and operations with our sleek TUI.
            </div>
          </div>
        </div>
        {/*  card 4*/}
        <div className="w-full lg:max-w-[390px] h-full  relative transition duration-500 ease-in-out transform hover:scale-[1.02] cursor-pointer rounded-xl  bg-[#1f1f1f] box-border flex flex-col items-center justify-start py-8 px-6 gap-[24px] text-left text-[24px] text-white font-aeonik border-[1px] border-solid border-gray">
          <Image
            className="w-[153px] absolute !m-[0] top-0 left-1/2 transform  translate-x-[-50%] h-[153px] opacity-[0.8] z-[0]"
            alt=""
            src={gridfeature}
          />
          <div className="w-[85.5px] shadow-[0px_-4.275000095367432px_0px_#000_inset,_0px_5.700000286102295px_1.43px_rgba(255,_255,_255,_0.08)_inset,_0px_0px_0px_2.15px_#000,_0px_8.58328628540039px_8.58px_rgba(0,_0,_0,_0.25)] rounded-[11.4px] bg-dimgray h-[85.5px] flex flex-row items-center justify-center z-[1]">
            <Image className="w-[45.6px] relative h-[45.6px] overflow-hidden shrink-0" alt="" src={unlock} />
          </div>
          <div className="w-[298.7px] flex flex-col items-center justify-start gap-[4px] z-[2]">
            <div className="relative leading-[35px] font-medium">Unlock Expertise</div>
            <div className="w-[262px] relative text-[17px] leading-[27px] font-geist text-gray3 text-center [display:-webkit-inline-box] items-center justify-center overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
              Master your node effortlessly with our detailed, and comprehensive guides.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
