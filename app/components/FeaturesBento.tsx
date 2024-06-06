import Image from "next/image";

import light from "../assets/light1feature.svg";
import light2 from "../assets/llight2feature.svg";
import griddeco from "../assets/griddeco.svg";
import griddecohover from "../assets/griddecohover.svg";
import img4 from "../assets/img4.svg";
import img4hover from "../assets/img4hover.svg";
import qrcodedeco from "../assets/qrcodedeco.svg";
import qrcodedecohover from "../assets/qrcodedecohover.svg";
import numberdeco from "../assets/numberdeco.svg";
import numberdecohover from "../assets/numberdecohover.svg";
import lightworld from "../assets/lightworld.svg";
import worldtest1 from "../assets/worldtest1.svg";
import worldhover from "../assets/worldhover.svg";
import img1 from "../assets/img1.png";
import img1hover from "../assets/img1hover.png";
import img22 from "../assets/img22.png";
import img22hover from "../assets/img22hover.png";
import img33 from "../assets/img33.png";
import img33hover from "../assets/img33hover.png";

export default function FeaturesBento() {
  return (
    <div
      id="features"
      className=" bg-[#040201] relative flex flex-col justify-center items-center w-full px-4 md:px-6 gap-14 py-20  overflow-visible  "
    >
      <Image
        className=" pointer-events-none z-20 absolute top-[-150.71px]  w-[1180px] h-[1221px] overflow-x-hidden left-1/2  shrink-0 -translate-x-1/2 "
        alt=""
        src={light}
      />

      <Image
        src={light2}
        alt="elipse"
        className=" pointer-events-none z-30 w-full absolute  !m-[0] top-[-300.87px]  max-w-full left-1/2   -translate-x-1/2   h-[1221px] shrink-0  "
      />
      <div className="  flex flex-col justify-center gap-4 items-center ">
        <div className=" w-fit shadow-[0px_3px_4px_rgba(142,_142,_142,_0.25)_inset,_0px_0px_0px_1px_rgba(44,_64,_94,_0.06),_0px_1px_1px_rgba(44,_64,_94,_0.04),_0px_2px_4px_rgba(44,_64,_94,_0.08)] rounded-[900px] bg-black box-border  flex flex-row items-center justify-center py-1 px-2.5 gap-[6px] text-left text-[14px] text-white font-geist border-[1px] border-solid border-gray">
          <div className="w-2 relative shadow-[0px_0px_0px_4px_rgba(241,_102,_58,_0.24)] rounded-[50%] bg-[#fc4f2d] h-2" />
          <p className="relative leading-[20px] opacity-[0.8]">Deoxys state-of-the-art features blockchain</p>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-[48px]  lg:text-[55.9px]  tracking-[-1.09px] leading-[58px] font-medium font-aeonik text-transparent !bg-clip-text [background:linear-gradient(177.7deg,_#fff,_rgba(255,_255,_255,_0.66))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center inline-block">
            Unveiling Deoxys 2.0
          </h1>
          <p className=" text-[17px] leading-[24px] md:max-w-[571px] text-white text-center inline-block opacity-[0.6]">
            Lorem ipsum dolor sit amet consectetur. Laoreet magna fermentum ut mi bibendum euismod varius quis odio. Vitae vestibulum adipi
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5  lg:max-w-6xl">
        {/* bento 1/2*/}
        {/*  card 1*/}
        <div className="flex flex-col md:flex-row  gap-5">
          <div className=" md:w-1/2 lg:w-[60%] relative group bg-[#171717] rounded-xl border-[1px] border-solid border-gray/10 ">
            <Image
              src={img1hover}
              alt="img1"
              quality={100}
              className="z-20 lg:w-[90%] absolute opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visibility-visible group-hover:scale-105 transition-all duration-700 ease-in-out transform left-1/2 -translate-x-1/2 top-[60%] -translate-y-1/2"
            />

            {/* Image normale qui disparaît au survol */}
            <Image
              src={img1}
              quality={100}
              alt="img1"
              className="z-20 absolute lg:w-[90%] opacity-100 visibility-visible group-hover:opacity-0 group-hover:visibility-hidden transition-opacity transition-visibility duration-700 ease-in-out left-1/2 -translate-x-1/2 top-[60%] -translate-y-1/2"
            />

            <div className="w-full rounded-xl px-3  py-4 lg:px-5 lg:py-6 bg-[#171717] box-border h-[514px] overflow-hidden shrink-0 text-left  text-[#eff8ff] border-[1px] border-solid border-[#171717]  [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.11),_rgba(1,_1,_1,_0.11))] ">
              <div className="flex flex-col gap-4 ">
                <h3 className="  text-[24px] leading-[32px] font-medium">Fully Updated</h3>
                <p className="self-stretch  text-[16px] leading-[24px] font-inter opacity-[0.7] lg:pr-20">
                  Deoxys syncs seamlessly with Starknet latest, offering full compatibility with version 0.13.0.
                </p>
              </div>

              <div className="relative">
                <Image
                  src={griddeco}
                  alt="griddeco"
                  className="absolute inset-0 w-full max-w-full h-[442px] opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-in-out"
                />
                <Image
                  src={griddecohover}
                  alt="griddeco"
                  className="absolute inset-0 w-full max-w-full h-[442px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
                />
              </div>
            </div>
          </div>
          {/*  card 2*/}
          <div className=" md:w-1/2 w- lg:w-[40%] relative group bg-[#171717] rounded-xl border-[1px] border-solid border-gray/10 ">
            <Image
              src={img22}
              quality={100}
              alt="img1"
              className="z-20 w-[60%] md:w-[80%] absolute opacity-100 visibility-visible group-hover:opacity-0 group-hover:visibility-hidden transition-all duration-700 ease-in-out left-1/2 -translate-x-1/2 top-[60%] -translate-y-1/2"
            />

            {/* Image de survol qui apparaît lors du survol */}
            <Image
              src={img22hover}
              quality={100}
              alt="img1"
              className="z-20 w-[60%] md:w-[80%] absolute opacity-0 visibility-hidden group-hover:opacity-100 group-hover:scale-110 group-hover:visibility-visible transition-all duration-700 ease-in-out left-1/2 -translate-x-1/2 top-[60%] -translate-y-1/2"
            />
            <div className="w-full rounded-xl px-3 py-4 lg:px-5 lg:py-6 bg-[#171717] box-border h-[514px] overflow-hidden shrink-0 text-left  text-[#eff8ff] border-[1px] border-solid border-[#171717]  [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.11),_rgba(1,_1,_1,_0.11))] ">
              <div className="flex flex-col gap-4">
                <h3 className="  text-[24px] leading-[32px] font-medium">RPC Complete</h3>
                <p className="self-stretch  text-[16px] leading-[24px] font-inter opacity-[0.7]">
                  With full support for Starknet JSON-RPC specs, Deoxys efficiently handles all 27 available methods
                </p>
              </div>

              <div className="relative group">
                {/* Image normale qui disparaît au survol */}
                <Image
                  src={qrcodedeco}
                  alt="griddeco"
                  className="w-full max-w-full  h-[442px] absolute inset-0 opacity-100 visibility-visible group-hover:opacity-0 group-hover:visibility-hidden transition-all transition-visibility duration-700 ease-in-out"
                />

                {/* Image de survol qui apparaît lors du survol */}
                <Image
                  src={qrcodedecohover}
                  alt="griddeco"
                  className="w-full max-w-full  h-[442px] absolute inset-0 opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visibility-visible transition-all transition-visibility duration-700 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
        {/* bento 1/2*/}
        {/*  card 3*/}
        <div className="flex flex-col md:flex-row gap-5">
          <div className=" md:w-1/2 lg:w-[40%] relative group bg-[#171717] rounded-xl border-[1px] border-solid border-gray/10 ">
            <Image
              src={img33}
              alt="img1"
              quality={100}
              className="z-20 absolute lg:w-[80%] opacity-100 visibility-visible transition-all duration-700 ease-in-out w-[50%] left-1/2 -translate-x-1/2 top-[60%] -translate-y-1/2 group-hover:opacity-0 group-hover:visibility-hidden"
            />

            {/* Image de survol qui apparaît et s'agrandit lors du survol */}
            <Image
              quality={100}
              src={img33hover}
              alt="img1"
              className="z-20 absolute opacity-0 lg:w-[80%] visibility-hidden transition-all duration-700 ease-in-out transform scale-100 w-[50%] left-1/2 -translate-x-1/2 top-[60%] -translate-y-1/2 group-hover:opacity-100 group-hover:visibility-visible group-hover:scale-105"
            />
            <div className="w-full rounded-xl px-3 py-4 lg:px-5 lg:py-6 bg-[#171717] box-border h-[514px] overflow-hidden shrink-0 text-left  text-[#eff8ff] border-[1px] border-solid border-[#171717]  [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.11),_rgba(1,_1,_1,_0.11))] ">
              <div className="flex flex-col gap-4">
                <h3 className="  text-[24px] leading-[32px] font-medium">L1 Verified</h3>
                <p className="self-stretch  text-[16px] leading-[24px] font-inter opacity-[0.7]">
                  Deoxys state undergoes continuous Ethereum-based verification, ensuring data integrity within the network.
                </p>
              </div>

              <div className="relative ">
                <Image src={numberdeco} alt="griddeco" className="w-full  group-hover:hidden  max-w-full overflow-hidden h-[442px] opacity-[0.8]" />
                <Image
                  src={numberdecohover}
                  alt="griddeco"
                  className="w-full hidden group-hover:block  max-w-full overflow-hidden h-[442px] opacity-[0.8]"
                />
              </div>
            </div>
          </div>
          {/*  card 4*/}
          <div className=" md:w-1/2 relative group lg:w-[60%]  bg-[#171717] rounded-xl border-[1px] border-solid border-gray overflow-y-hidden ">
            <Image
              quality={100}
              src={img4}
              alt="img1"
              className="z-40 absolute  opacity-100 visibility-visible group-hover:opacity-0 group-hover:visibility-hidden transition-all duration-700 ease-in-out left-1/2 -translate-x-1/2 top-[50%] lg:top-[65%] -translate-y-1/2"
            />

            {/* Image de survol qui apparaît et s'agrandit lors du survol */}
            <Image
              quality={100}
              src={img4hover}
              alt="img1"
              className="z-40 absolute opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visibility-visible group-hover:scale-105 transition-all duration-700 ease-in-out left-1/2 -translate-x-1/2 top-[50%] lg:top-[65%] -translate-y-1/2"
            />
            <Image src={lightworld} alt="griddeco" className=" pointer-events-none absolute w-full  max-w-full overflow-hidden h-fit opacity-[0.8]" />
            <div className="w-full  rounded-xl px-3 py-4 lg:px-5 lg:py-6 bg-[#171717] box-border h-[514px] overflow-hidden shrink-0 text-left  text-[#eff8ff] border-[1px] border-solid border-[#171717]  [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.11),_rgba(1,_1,_1,_0.11))] ">
              <div className="flex flex-col gap-4">
                <h3 className="  text-[24px] leading-[32px] font-medium">P2P Supported</h3>
                <p className="self-stretch  text-[16px] leading-[24px] font-inter opacity-[0.7] lg:pr-20">
                  Deoxys P2P capabilities mean rapid syncing and future-proofing for the next wave of Starknet network evolution.
                </p>
              </div>

              <Image
                src={worldtest1}
                alt="griddeco"
                className=" group-hover:hidden w-full pt-20  left-1/2  top-10 max-w-full overflow-hidden h-[442px] opacity-[0.8]  visibility-visible group-hover:opacity-0 group-hover:visibility-hidden transition-all duration-700 ease-in-out"
              />
              <Image
                src={worldhover}
                alt="griddeco"
                className=" hidden group-hover:block pt-20  w-full left-1/2  top-10  max-w-full overflow-hidden h-[442px] opacity-[0.8] visibility-hidden group-hover:opacity-100 group-hover:visibility-visible transition-all duration-700 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
