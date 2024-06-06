import Image from "next/image";
import styles from "../components/styles.module.css";
import light from "../assets/light1feature.svg";
import light2 from "../assets/llight2feature.svg";
import windows from "../assets/window.svg";
import linux from "../assets/linux.svg";
import mac from "../assets/apple.svg";
import qr1 from "../assets/qr1.svg";
import { Snippet } from "@geist-ui/core";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Steps() {
  return (
    <div id="steps" className=" bg-[#040201] relative flex flex-col justify-center items-center w-full px-4 md:px-6 gap-14 py-20  overflow-visible  ">
      <Image
        className=" z-20 absolute pointer-events-none top-[-150.71px]  w-[1180px] h-[1221px] overflow-x-hidden left-1/2  shrink-0 -translate-x-1/2 "
        alt=""
        src={light}
      />

      <Image
        src={light2}
        alt="elipse"
        className=" z-30 pointer-events-none w-full absolute  !m-[0] top-[-300.87px]  max-w-full left-1/2   -translate-x-1/2   h-[1221px] shrink-0  "
      />

      <div className="  flex flex-col justify-center gap-4 items-center ">
        <div className=" w-fit shadow-[0px_3px_4px_rgba(142,_142,_142,_0.25)_inset,_0px_0px_0px_1px_rgba(44,_64,_94,_0.06),_0px_1px_1px_rgba(44,_64,_94,_0.04),_0px_2px_4px_rgba(44,_64,_94,_0.08)] rounded-[900px] bg-black box-border  flex flex-row items-center justify-center py-1 px-2.5 gap-[6px] text-left text-[14px] text-white font-geist border-[1px] border-solid border-gray">
          <div className="w-2 relative shadow-[0px_0px_0px_4px_rgba(241,_102,_58,_0.24)] rounded-[50%] bg-[#fc4f2d] h-2" />
          <p className="relative leading-[20px] opacity-[0.8]">Deoxys state-of-the-art features blockchain</p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-[48px]  lg:text-[55.9px]  tracking-[-1.09px] leading-[58px] font-medium font-aeonik text-transparent !bg-clip-text [background:linear-gradient(177.7deg,_#fff,_rgba(255,_255,_255,_0.66))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center inline-block">
            Launch your App
          </h1>
          <p className=" text-[17px] leading-[24px] md:max-w-[571px] text-white text-center inline-block opacity-[0.6]">
            Lorem ipsum dolor sit amet consectetur. Laoreet magna fermentum ut mi bibendum euismod varius quis odio. Vitae vestibulum adipi
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="high" className=" flex flex-col justify-center items-center  rounded-lg  box-border  w-full  text-white ">
          <TabsList className="   [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.12),_rgba(255,_255,_255,_0)),_linear-gradient(180deg,_rgba(255,_255,_255,_0.01),_rgba(255,_255,_255,_0)_34.5%,_rgba(255,_255,_255,_0.12)),_#000]  w-[80%] h-fit gap-2 box-border border-solid border-[1px] border-gray  bg-[#353434] md:w-m-2xl  ">
            <TabsTrigger className="" value="low">
              Low Level
            </TabsTrigger>
            <TabsTrigger value="mid">Mid Level</TabsTrigger>
            <TabsTrigger value="high">High Level</TabsTrigger>
          </TabsList>
          <TabsContent value="low">
            <div className="w-full flex flex-col gap-5 mt-12  lg:max-w-2xl">
              {/*  card 1*/}
              <div className=" overflow-hidden relative bg-[#1f1f1f] flex flex-col md:flex-row gap-6 p-6 rounded-xl items-start border-[1px] border-solid border-gray">
                {/*  Number*/}
                <div className=" pointer-events-none lg:w-[80px] w-[60px] h-[60px] relative shadow-[0px_-3px_0px_#000_inset,_0px_4px_1px_rgba(255,_255,_255,_0.08)_inset,_0px_0px_0px_1.51px_#000,_0px_6.023358345031738px_6.02px_rgba(0,_0,_0,_0.25)] rounded-lg bg-gray flex flex-row items-center justify-center text-left text-[24px] text-white ">
                  <p className="relative leading-[32px] font-medium [text-shadow:1px_0_0_#474747,_0_1px_0_#474747,_-1px_0_0_#474747,_0_-1px_0_#474747]">
                    01
                  </p>
                </div>
                <Image src={qr1} alt="qr1" className="w-full absolute !m-[0] top-[-291px] left-[65px] h-[850px] object-contain opacity-[0.9]" />
                <div className="md:flex md:flex-col space-y-6 ">
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl text-white font-medium">Install Dependencies</h3>
                    <p className=" text-base text-white [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:9] [-webkit-box-orient:vertical] opacity-[0.6]">
                      Lorem ipsum dolor sit amet consectetur. Et suscipit cras arcu vestibulum dui vivamus hendrerit sem.
                    </p>
                  </div>
                  <div className=" max-w-[350px] md:max-w-7xl ">
                    <Snippet
                      text={["cd <your-destination-path>", "git clone https://github.com/KasarLab/deoxys"]}
                      type="secondary"
                      toastText="Code copied!"
                      toastType="secondary"
                      filled
                      className="overflow-hidden "
                    />
                  </div>
                </div>
              </div>
              {/*  card 2*/}
              <div className=" relative overflow-hidden  bg-[#1f1f1f] flex flex-col md:flex-row gap-6 p-6 rounded-xl items-start border-[1px] border-solid border-gray">
                {/*  Number*/}
                <div className=" pointer-events-none lg:w-[80px] w-[60px] h-[60px] relative shadow-[0px_-3px_0px_#000_inset,_0px_4px_1px_rgba(255,_255,_255,_0.08)_inset,_0px_0px_0px_1.51px_#000,_0px_6.023358345031738px_6.02px_rgba(0,_0,_0,_0.25)] rounded-lg bg-gray flex flex-row items-center justify-center text-left text-[24px] text-white ">
                  <p className="relative leading-[32px] font-medium [text-shadow:1px_0_0_#474747,_0_1px_0_#474747,_-1px_0_0_#474747,_0_-1px_0_#474747]">
                    02
                  </p>
                </div>
                <Image className="w-full absolute !m-[0] top-[-271px] left-[25px] h-[850px] object-contain opacity-[0.9]" alt="" src={qr1} />
                <div className="md:flex md:flex-col space-y-6">
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl text-white font-medium">Get code</h3>
                    <p className=" text-base text-white [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:9] [-webkit-box-orient:vertical] opacity-[0.6]">
                      Lorem ipsum dolor sit amet consectetur. Et suscipit cras arcu vestibulum dui vivamus hendrerit sem.
                    </p>
                  </div>
                  <div className=" max-w-[350px] md:max-w-7xl ">
                    <Snippet
                      text={["cd <your-destination-path>", "git clone https://github.com/KasarLab/deoxys"]}
                      type="secondary"
                      toastText="Code copied!"
                      toastType="secondary"
                      filled
                      className="overflow-hidden "
                    />
                  </div>
                </div>
              </div>
              {/*  card 3*/}
              <div className=" relative overflow-hidden  bg-[#1f1f1f] flex flex-col md:flex-row gap-6 p-6 rounded-xl items-start border-[1px] border-solid border-gray">
                {/*  Number*/}
                <div className=" pointer-events-none lg:w-[80px] w-[60px] h-[60px] relative shadow-[0px_-3px_0px_#000_inset,_0px_4px_1px_rgba(255,_255,_255,_0.08)_inset,_0px_0px_0px_1.51px_#000,_0px_6.023358345031738px_6.02px_rgba(0,_0,_0,_0.25)] rounded-lg bg-gray flex flex-row items-center justify-center text-left text-[24px] text-white ">
                  <p className="relative leading-[32px] font-medium [text-shadow:1px_0_0_#474747,_0_1px_0_#474747,_-1px_0_0_#474747,_0_-1px_0_#474747]">
                    03
                  </p>
                </div>
                <Image src={qr1} alt="qr1" className="w-full absolute !m-[0] top-[-291px] left-[65px] h-[850px] object-contain opacity-[0.9]" />
                <div className="flex flex-col  gap-6">
                  <h3 className="text-2xl text-white font-medium">Build Program</h3>
                  <p className=" text-base text-white [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:9] [-webkit-box-orient:vertical] opacity-[0.6]">
                    Lorem ipsum dolor sit amet consectetur. Et suscipit cras arcu vestibulum dui vivamus hendrerit sem.
                  </p>
                  <div className=" max-w-[350px] md:max-w-7xl ">
                    <Snippet
                      text={["cd <your-destination-path>", "git clone https://github.com/KasarLab/deoxys"]}
                      type="secondary"
                      toastText="Code copied!"
                      toastType="secondary"
                      filled
                      className="overflow-hidden "
                    />
                  </div>
                </div>
              </div>
              {/*  card 4*/}
              <div className=" relative overflow-hidden bg-[#1f1f1f] flex flex-col md:flex-row gap-6 p-6 rounded-xl items-start border-[1px] border-solid border-gray">
                {/*  Number*/}
                <div className=" pointer-events-none lg:w-[80px] w-[60px] h-[60px] relative shadow-[0px_-3px_0px_#000_inset,_0px_4px_1px_rgba(255,_255,_255,_0.08)_inset,_0px_0px_0px_1.51px_#000,_0px_6.023358345031738px_6.02px_rgba(0,_0,_0,_0.25)] rounded-lg bg-gray flex flex-row items-center justify-center text-left text-[24px] text-white ">
                  <p className="relative leading-[32px] font-medium [text-shadow:1px_0_0_#474747,_0_1px_0_#474747,_-1px_0_0_#474747,_0_-1px_0_#474747]">
                    04
                  </p>
                </div>
                <Image src={qr1} alt="qr1" className="w-full absolute !m-[0] top-[-281px] left-[65px] h-[850px] object-contain opacity-[0.9]" />
                <div className="   md:flex md:flex-col space-y-6">
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl text-white font-medium">Run deoxys</h3>
                    <p className=" text-base text-white [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:9] [-webkit-box-orient:vertical] opacity-[0.6]">
                      Lorem ipsum dolor sit amet consectetur. Et suscipit cras arcu vestibulum dui vivamus hendrerit sem.
                    </p>
                  </div>
                  <div className=" max-w-[350px] md:max-w-7xl ">
                    <Snippet
                      text={["cd <your-destination-path>", "git clone https://github.com/KasarLab/deoxys"]}
                      type="secondary"
                      toastText="Code copied!"
                      toastType="secondary"
                      filled
                      className="overflow-hidden "
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="mid">
            <div className="w-full flex flex-col gap-5 mt-12  lg:max-w-2xl">
              {/*  card 1*/}
              <div className=" overflow-hidden relative bg-[#1f1f1f] flex flex-col md:flex-row gap-6 p-6 rounded-xl items-start border-[1px] border-solid border-gray">
                {/*  Number*/}
                <div className=" pointer-events-none lg:w-[80px] w-[60px] h-[60px] relative shadow-[0px_-3px_0px_#000_inset,_0px_4px_1px_rgba(255,_255,_255,_0.08)_inset,_0px_0px_0px_1.51px_#000,_0px_6.023358345031738px_6.02px_rgba(0,_0,_0,_0.25)] rounded-lg bg-gray flex flex-row items-center justify-center text-left text-[24px] text-white ">
                  <p className="relative leading-[32px] font-medium [text-shadow:1px_0_0_#474747,_0_1px_0_#474747,_-1px_0_0_#474747,_0_-1px_0_#474747]">
                    01
                  </p>
                </div>
                <Image src={qr1} alt="qr1" className="w-full absolute !m-[0] top-[-291px] left-[65px] h-[850px] object-contain opacity-[0.9]" />
                <div className="md:flex md:flex-col space-y-6">
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl text-white font-medium">Install App</h3>
                    <p className=" text-base text-white [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:9] [-webkit-box-orient:vertical] opacity-[0.6]">
                      Lorem ipsum dolor sit amet consectetur. Et suscipit cras arcu vestibulum dui vivamus hendrerit sem.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-6">
                    <div className="w-[130px] relative shadow-[0px_0px_9px_4px_rgba(241,_102,_58,_0.1),_0px_0px_0px_1px_#000,_0px_0px_5px_4px_rgba(247,_61,_45,_0.07),_0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_2px_0px_rgba(255,_255,_255,_0.08)_inset] rounded-lg [background:linear-gradient(2.72deg,_),_linear-gradient(0deg,_)] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-5 gap-[8px] text-center text-[14px] text-[#f2f4f7] font-geist border-[1px] border-solid border-gray1">
                      <Image className="w-5 relative h-5 overflow-hidden shrink-0" alt="" src={mac} />
                      <div className="relative leading-[20px] font-medium [text-shadow:0px_2px_6px_rgba(0,_0,_0,_0.25)]">Download</div>
                      <div className="w-5 relative h-5 hidden" />
                    </div>
                    <div className="w-[130px] relative shadow-[0px_0px_9px_4px_rgba(241,_102,_58,_0.1),_0px_0px_0px_1px_#000,_0px_0px_5px_4px_rgba(247,_61,_45,_0.07),_0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_2px_0px_rgba(255,_255,_255,_0.08)_inset] rounded-lg [background:linear-gradient(2.72deg,_),_linear-gradient(0deg,_)] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-5 gap-[8px] text-center text-[14px] text-[#f2f4f7] font-geist border-[1px] border-solid border-gray1">
                      <Image className="w-5 relative h-5 overflow-hidden shrink-0" alt="" src={windows} />
                      <div className="relative leading-[20px] font-medium [text-shadow:0px_2px_6px_rgba(0,_0,_0,_0.25)]">Download</div>
                      <div className="w-5 relative h-5 hidden" />
                    </div>
                    <div className="w-[130px] relative shadow-[0px_0px_9px_4px_rgba(241,_102,_58,_0.1),_0px_0px_0px_1px_#000,_0px_0px_5px_4px_rgba(247,_61,_45,_0.07),_0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_2px_0px_rgba(255,_255,_255,_0.08)_inset] rounded-lg [background:linear-gradient(2.72deg,_),_linear-gradient(0deg,_)] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-5 gap-[8px] text-center text-[14px] text-[#f2f4f7] font-geist border-[1px] border-solid border-gray1">
                      <Image className="w-5 relative h-5 overflow-hidden shrink-0" alt="" src={linux} />
                      <div className="relative leading-[20px] font-medium [text-shadow:0px_2px_6px_rgba(0,_0,_0,_0.25)]">Download</div>
                      <div className="w-5 relative h-5 hidden" />
                    </div>
                  </div>
                </div>
              </div>
              {/*  card 2*/}
              <div className=" relative overflow-hidden  bg-[#1f1f1f] flex flex-col md:flex-row gap-6 p-6 rounded-xl items-start border-[1px] border-solid border-gray">
                {/*  Number*/}
                <div className=" pointer-events-none lg:w-[80px] w-[60px] h-[60px] relative shadow-[0px_-3px_0px_#000_inset,_0px_4px_1px_rgba(255,_255,_255,_0.08)_inset,_0px_0px_0px_1.51px_#000,_0px_6.023358345031738px_6.02px_rgba(0,_0,_0,_0.25)] rounded-lg bg-gray flex flex-row items-center justify-center text-left text-[24px] text-white ">
                  <p className="relative leading-[32px] font-medium [text-shadow:1px_0_0_#474747,_0_1px_0_#474747,_-1px_0_0_#474747,_0_-1px_0_#474747]">
                    02
                  </p>
                </div>
                <Image className="w-full absolute !m-[0] top-[-271px] left-[25px] h-[850px] object-contain opacity-[0.9]" alt="" src={qr1} />
                <div className="md:flex md:flex-col space-y-6">
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl text-white font-medium">Launch</h3>
                    <p className=" text-base text-white [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:9] [-webkit-box-orient:vertical] opacity-[0.6]">
                      Lorem ipsum dolor sit amet consectetur. Et suscipit cras arcu vestibulum dui vivamus hendrerit sem.
                    </p>
                  </div>
                  <div className="w-full relative shadow-[0px_0px_0px_1px_#000,_0px_0px_5px_4px_rgba(247,_61,_45,_0.07),_0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_2px_0px_rgba(255,_255,_255,_0.08)_inset] rounded-lg [background:linear-gradient(2.72deg,_),_linear-gradient(0deg,_)] box-border overflow-hidden shrink-0 flex flex-col items-end justify-start py-3 px-5 gap-[16px] text-left text-[14px] text-warning font-dm-mono border-[1px] border-solid border-gray">
                    <div className="self-stretch relative leading-[20px] [text-shadow:0px_2px_6px_rgba(0,_0,_0,_0.25)]">{`Ready to Install.. `}</div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                      <div className="w-[80%] relative rounded-xl bg-gainsboro h-[11px] opacity-[0.2]" />
                      <div className="self-stretch w-[90%] relative rounded-xl bg-gainsboro h-[11px] opacity-[0.2]" />
                      <div className="self-stretch relative w-[80%] rounded-xl bg-gainsboro h-[11px] opacity-[0.2]" />
                    </div>
                    <div className="w-5 relative h-5 hidden" />
                    <div className="w-[98px] rounded box-border overflow-hidden flex flex-row items-center justify-center py-1 px-4 gap-[8px] opacity-[0.8] text-center text-[12px] font-geist border-[1px] border-solid border-warning-500">
                      <div className="w-5 relative h-5 hidden" />
                      <div className="relative leading-[20px] font-medium">Instal Now</div>
                      <div className="w-5 relative h-5 hidden" />
                    </div>
                  </div>
                </div>
              </div>
              {/*  card 3*/}
              <div className=" relative overflow-hidden  bg-[#1f1f1f] flex flex-col md:flex-row gap-6 p-6 rounded-xl items-start border-[1px] border-solid border-gray">
                {/*  Number*/}
                <div className=" pointer-events-none lg:w-[80px] w-[60px] h-[60px] relative shadow-[0px_-3px_0px_#000_inset,_0px_4px_1px_rgba(255,_255,_255,_0.08)_inset,_0px_0px_0px_1.51px_#000,_0px_6.023358345031738px_6.02px_rgba(0,_0,_0,_0.25)] rounded-lg bg-gray flex flex-row items-center justify-center text-left text-[24px] text-white ">
                  <p className="relative leading-[32px] font-medium [text-shadow:1px_0_0_#474747,_0_1px_0_#474747,_-1px_0_0_#474747,_0_-1px_0_#474747]">
                    03
                  </p>
                </div>
                <Image src={qr1} alt="qr1" className="w-full absolute !m-[0] top-[-291px] left-[65px] h-[850px] object-contain opacity-[0.9]" />
                <div className="flex flex-col  gap-6">
                  <h3 className="text-2xl text-white font-medium">Setup parameters</h3>
                  <p className=" text-base text-white [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:9] [-webkit-box-orient:vertical] opacity-[0.6]">
                    Lorem ipsum dolor sit amet consectetur. Et suscipit cras arcu vestibulum dui vivamus hendrerit sem.
                  </p>
                  <div className="w-full  relative shadow-[0px_0px_0px_1px_#000,_0px_0px_5px_4px_rgba(247,_61,_45,_0.07),_0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_2px_0px_rgba(255,_255,_255,_0.08)_inset] rounded-lg [background:linear-gradient(2.72deg,_),_linear-gradient(0deg,_)] box-border overflow-hidden flex flex-col items-end justify-start py-3 px-5 gap-[16px] text-left text-[14px] text-positive font-dm-mono border-[1px] border-solid border-gray">
                    <div className="self-stretch relative leading-[20px] [text-shadow:0px_2px_6px_rgba(0,_0,_0,_0.25)]">Setup customize</div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                      <div className="w-[80%] relative rounded-xl bg-gainsboro h-[11px] opacity-[0.2]" />
                      <div className="self-stretch w-[60%] relative rounded-xl bg-gainsboro h-[11px] opacity-[0.2]" />
                      <div className="self-stretch w-[70%] relative rounded-xl bg-gainsboro h-[11px] opacity-[0.2]" />
                    </div>
                    <div className="w-5 relative h-5 hidden" />
                    <div className="w-[98px] rounded box-border overflow-hidden flex flex-row items-center justify-center py-1 px-4 gap-[8px] opacity-[0.8] text-center text-[12px] font-geist border-[1px] border-solid border-positive-300">
                      <div className="w-5 relative h-5 hidden" />
                      <div className="relative leading-[20px] font-medium">Confirm</div>
                      <div className="w-5 relative h-5 hidden" />
                    </div>
                  </div>
                </div>
              </div>
              {/*  card 4*/}
              <div className=" relative overflow-hidden bg-[#1f1f1f] flex flex-col md:flex-row gap-6 p-6 rounded-xl items-start border-[1px] border-solid border-gray">
                {/*  Number*/}
                <div className=" pointer-events-none lg:w-[80px] w-[60px] h-[60px] relative shadow-[0px_-3px_0px_#000_inset,_0px_4px_1px_rgba(255,_255,_255,_0.08)_inset,_0px_0px_0px_1.51px_#000,_0px_6.023358345031738px_6.02px_rgba(0,_0,_0,_0.25)] rounded-lg bg-gray flex flex-row items-center justify-center text-left text-[24px] text-white ">
                  <p className="relative leading-[32px] font-medium [text-shadow:1px_0_0_#474747,_0_1px_0_#474747,_-1px_0_0_#474747,_0_-1px_0_#474747]">
                    04
                  </p>
                </div>
                <Image src={qr1} alt="qr1" className="w-full absolute !m-[0] top-[-281px] left-[65px] h-[850px] object-contain opacity-[0.9]" />
                <div className="   md:flex md:flex-col space-y-6">
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl text-white font-medium">Launch App</h3>
                    <p className=" text-base text-white [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:9] [-webkit-box-orient:vertical] opacity-[0.6]">
                      Lorem ipsum dolor sit amet consectetur. Et suscipit cras arcu vestibulum dui vivamus hendrerit sem.
                    </p>
                  </div>
                  <button
                    className={` flex w-fit h-full py-2.5 px-5  bg-white bg-gradient-to-b from-white/30 to-[#1B1A1A]/30 rounded-lg gap-2.5 justify-center items-center border border-1 border-black ${styles.heroButtonShadow} `}
                  >
                    <p className="text-zinc-900  text-sm font-medium  leading-tight">Launch App</p>
                    <Image src="/buton-decoration.png" alt="arrow" width={17.73} height={20.35} className="object-cover" />
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="high">
            <div className="w-full flex flex-col gap-5 mt-12  lg:max-w-2xl">
              {/*  card 1*/}
              <div className=" overflow-hidden relative bg-[#1f1f1f] flex flex-col md:flex-row gap-6 p-6 rounded-xl items-start border-[1px] border-solid border-gray">
                {/*  Number*/}
                <div className=" pointer-events-none lg:w-[80px] w-[60px] h-[60px] relative shadow-[0px_-3px_0px_#000_inset,_0px_4px_1px_rgba(255,_255,_255,_0.08)_inset,_0px_0px_0px_1.51px_#000,_0px_6.023358345031738px_6.02px_rgba(0,_0,_0,_0.25)] rounded-lg bg-gray flex flex-row items-center justify-center text-left text-[24px] text-white ">
                  <p className="relative leading-[32px] font-medium [text-shadow:1px_0_0_#474747,_0_1px_0_#474747,_-1px_0_0_#474747,_0_-1px_0_#474747]">
                    01
                  </p>
                </div>
                <Image src={qr1} alt="qr1" className="w-full absolute !m-[0] top-[-291px] left-[65px] h-[850px] object-contain opacity-[0.9]" />
                <div className="md:flex md:flex-col space-y-6">
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl text-white font-medium">Install App</h3>
                    <p className=" text-base text-white [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:9] [-webkit-box-orient:vertical] opacity-[0.6]">
                      Lorem ipsum dolor sit amet consectetur. Et suscipit cras arcu vestibulum dui vivamus hendrerit sem.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-6">
                    <div
                      className="w-[130px] relative shadow-[0px_0px_0px_1px_#000,_0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_2px_0px_rgba(255,_255,_255,_0.08)_inset] rounded-lg [background:linear-gradient(2.72deg,_),_linear-gradient(0deg,_)]
 rounded-lg [background:linear-gradient(2.72deg,_),_linear-gradient(0deg,_)] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-5 gap-[8px] text-center text-[14px] text-[#f2f4f7] font-geist border-[1px] border-solid border-gray1"
                    >
                      <Image className="w-5 relative h-5 overflow-hidden shrink-0" alt="" src={mac} />
                      <div className="relative leading-[20px] font-medium [text-shadow:0px_2px_6px_rgba(0,_0,_0,_0.25)]">Download</div>
                      <div className="w-5 relative h-5 hidden" />
                    </div>
                    <div
                      className="w-[130px] relative shadow-[0px_0px_0px_1px_#000,_0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_2px_0px_rgba(255,_255,_255,_0.08)_inset] rounded-lg [background:linear-gradient(2.72deg,_),_linear-gradient(0deg,_)]
 rounded-lg [background:linear-gradient(2.72deg,_),_linear-gradient(0deg,_)] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-5 gap-[8px] text-center text-[14px] text-[#f2f4f7] font-geist border-[1px] border-solid border-gray1"
                    >
                      <Image className="w-5 relative h-5 overflow-hidden shrink-0" alt="" src={windows} />
                      <div className="relative leading-[20px] font-medium [text-shadow:0px_2px_6px_rgba(0,_0,_0,_0.25)]">Download</div>
                      <div className="w-5 relative h-5 hidden" />
                    </div>
                    <div
                      className="w-[130px] relative shadow-[0px_0px_0px_1px_#000,_0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_2px_0px_rgba(255,_255,_255,_0.08)_inset] rounded-lg [background:linear-gradient(2.72deg,_),_linear-gradient(0deg,_)]
 rounded-lg [background:linear-gradient(2.72deg,_),_linear-gradient(0deg,_)] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-5 gap-[8px] text-center text-[14px] text-[#f2f4f7] font-geist border-[1px] border-solid border-gray1"
                    >
                      <Image className="w-5 relative h-5 overflow-hidden shrink-0" alt="" src={linux} />
                      <div className="relative leading-[20px] font-medium [text-shadow:0px_2px_6px_rgba(0,_0,_0,_0.25)]">Download</div>
                      <div className="w-5 relative h-5 hidden" />
                    </div>
                  </div>
                </div>
              </div>
              {/*  card 2*/}
              <div className=" relative overflow-hidden  bg-[#1f1f1f] flex flex-col md:flex-row gap-6 p-6 rounded-xl items-start border-[1px] border-solid border-gray">
                {/*  Number*/}
                <div className=" pointer-events-none w-[60px] lg:w-[80px] h-[60px] relative shadow-[0px_-3px_0px_#000_inset,_0px_4px_1px_rgba(255,_255,_255,_0.08)_inset,_0px_0px_0px_1.51px_#000,_0px_6.023358345031738px_6.02px_rgba(0,_0,_0,_0.25)] rounded-lg bg-gray flex flex-row items-center justify-center text-left text-[24px] text-white ">
                  <p className="relative leading-[32px] font-medium [text-shadow:1px_0_0_#474747,_0_1px_0_#474747,_-1px_0_0_#474747,_0_-1px_0_#474747]">
                    02
                  </p>
                </div>
                <Image className="w-full absolute !m-[0] top-[-271px] left-[25px] h-[850px] object-contain opacity-[0.9]" alt="" src={qr1} />
                <div className="md:flex md:flex-col space-y-6">
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl text-white font-medium">Launch</h3>
                    <p className=" text-base text-white [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:9] [-webkit-box-orient:vertical] opacity-[0.6]">
                      Lorem ipsum dolor sit amet consectetur. Et suscipit cras arcu vestibulum dui vivamus hendrerit sem.
                    </p>
                  </div>
                  <div
                    className="w-full relative shadow-[0px_0px_0px_1px_#000,_0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_2px_0px_rgba(255,_255,_255,_0.08)_inset]
 rounded-lg [background:linear-gradient(2.72deg,_),_linear-gradient(0deg,_)] box-border overflow-hidden shrink-0 flex flex-col items-end justify-start py-3 px-5 gap-[16px] text-left text-[14px] text-warning  border-[1px] border-solid border-gray"
                  >
                    <div className="self-stretch relative leading-[20px] [text-shadow:0px_2px_6px_rgba(0,_0,_0,_0.25)]">{`Ready to Install.. `}</div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                      <div className="w-[80%] relative rounded-xl bg-gainsboro h-[11px] opacity-[0.2]" />
                      <div className="self-stretch w-[90%] relative rounded-xl bg-gainsboro h-[11px] opacity-[0.2]" />
                      <div className="self-stretch relative w-[80%] rounded-xl bg-gainsboro h-[11px] opacity-[0.2]" />
                    </div>
                    <div className="w-5 relative h-5 hidden" />
                    <div className="w-[98px] rounded box-border overflow-hidden flex flex-row items-center justify-center py-1 px-4 gap-[8px] opacity-[0.8] text-center text-[12px] font-geist border-[1px] border-solid border-warning-500">
                      <div className="w-5 relative h-5 hidden" />
                      <div className="relative leading-[20px] font-medium">Instal Now</div>
                      <div className="w-5 relative h-5 hidden" />
                    </div>
                  </div>
                </div>
              </div>
              {/*  card 3*/}
              <div className=" relative overflow-hidden  bg-[#1f1f1f] flex flex-col md:flex-row gap-6 p-6 rounded-xl items-start border-[1px] border-solid border-gray">
                {/*  Number*/}
                <div className=" pointer-events-none  w-[60px] lg:w-[80px] h-[60px] relative shadow-[0px_-3px_0px_#000_inset,_0px_4px_1px_rgba(255,_255,_255,_0.08)_inset,_0px_0px_0px_1.51px_#000,_0px_6.023358345031738px_6.02px_rgba(0,_0,_0,_0.25)] rounded-lg bg-gray flex flex-row items-center justify-center text-left text-[24px] text-white ">
                  <p className="relative leading-[32px] font-medium [text-shadow:1px_0_0_#474747,_0_1px_0_#474747,_-1px_0_0_#474747,_0_-1px_0_#474747]">
                    03
                  </p>
                </div>
                <Image src={qr1} alt="qr1" className="w-full absolute !m-[0] top-[-291px] left-[65px] h-[850px] object-contain opacity-[0.9]" />
                <div className="flex flex-col  gap-6">
                  <h3 className="text-2xl text-white font-medium">Setup parameters</h3>
                  <p className=" text-base text-white [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:9] [-webkit-box-orient:vertical] opacity-[0.6]">
                    Lorem ipsum dolor sit amet consectetur. Et suscipit cras arcu vestibulum dui vivamus hendrerit sem.
                  </p>
                  <div
                    className="w-full  relative shadow-[0px_0px_0px_1px_#000,_0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_2px_0px_rgba(255,_255,_255,_0.08)_inset]
 rounded-lg [background:linear-gradient(2.72deg,_),_linear-gradient(0deg,_)] box-border overflow-hidden flex flex-col items-end justify-start py-3 px-5 gap-[16px] text-left text-[14px] text-positive  border-[1px] border-solid border-gray"
                  >
                    <div className="self-stretch relative leading-[20px] [text-shadow:0px_2px_6px_rgba(0,_0,_0,_0.25)]">Setup customize</div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                      <div className="w-[80%] relative rounded-xl bg-gainsboro h-[11px] opacity-[0.2]" />
                      <div className="self-stretch w-[60%] relative rounded-xl bg-gainsboro h-[11px] opacity-[0.2]" />
                      <div className="self-stretch w-[70%] relative rounded-xl bg-gainsboro h-[11px] opacity-[0.2]" />
                    </div>
                    <div className="w-5 relative h-5 hidden" />
                    <div className="w-[98px] rounded box-border overflow-hidden flex flex-row items-center justify-center py-1 px-4 gap-[8px] opacity-[0.8] text-center text-[12px] font-geist border-[1px] border-solid border-positive-300">
                      <div className="w-5 relative h-5 hidden" />
                      <div className="relative leading-[20px] font-medium">Confirm</div>
                      <div className="w-5 relative h-5 hidden" />
                    </div>
                  </div>
                </div>
              </div>
              {/*  card 4*/}
              <div className=" relative overflow-hidden bg-[#1f1f1f] flex flex-col md:flex-row  gap-6 p-6  rounded-xl items-start border-[1px] border-solid border-gray">
                {/*  Number*/}
                <div className=" pointer-events-none w-[60px] lg:w-[80px] h-[60px] relative shadow-[0px_-3px_0px_#000_inset,_0px_4px_1px_rgba(255,_255,_255,_0.08)_inset,_0px_0px_0px_1.51px_#000,_0px_6.023358345031738px_6.02px_rgba(0,_0,_0,_0.25)] rounded-lg bg-gray flex flex-row  items-center justify-center text-left text-[24px] text-white ">
                  <p className="relative font-medium [text-shadow:1px_0_0_#474747,_0_1px_0_#474747,_-1px_0_0_#474747,_0_-1px_0_#474747]">04</p>
                </div>
                <Image src={qr1} alt="qr1" className="w-full absolute !m-[0] top-[-281px] left-[65px] h-[850px] object-contain opacity-[0.9]" />
                <div className="   md:flex md:flex-col space-y-6">
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl text-white font-medium">Launch App</h3>
                    <p className=" text-base text-white [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:9] [-webkit-box-orient:vertical] opacity-[0.6]">
                      Lorem ipsum dolor sit amet consectetur. Et suscipit cras arcu vestibulum dui vivamus hendrerit sem.
                    </p>
                  </div>
                  <button
                    className={` flex w-fit h-full py-2.5 px-5  bg-white bg-gradient-to-b from-white/30 to-[#1B1A1A]/30 rounded-lg gap-2.5 justify-center items-center border border-1 border-black ${styles.heroButtonShadow} `}
                  >
                    <p className="text-zinc-900  text-sm font-medium  leading-tight">Launch App</p>
                    <Image src="/buton-decoration.png" alt="arrow" width={17.73} height={20.35} className="object-cover" />
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
