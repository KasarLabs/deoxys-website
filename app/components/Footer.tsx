import Image from "next/image";
import Link from "next/link";
import decofooter from "../assets/deco-footer.svg";
import x from "../assets/x.png";
import telegram from "../assets/telegram.png";
import github from "../assets/github.png";

export default function Footer() {
  return (
    <div className=" bg-[#040201] overflow-y-hidden    pb-6 bg-gradient-to-b from-black to-[#373737] relative w-full px-4 md:px-6  flex flex-col lg:items-center  text-center  text-white gap-[120px] ">
      <Image src={decofooter} alt="decofooter" className="text-white  pointer-events-none w-[1557px] h-[806px] absolute bottom-[-200px]" />
      <div className="flex flex-col items-center gap-6 ">
        <div className="flex flex-col items-center gap-6">
          <h2 className="  text-[55px] leading-[60px]  md:text-[77px] md:leading-[79.06px] font-medium w-full md:max-w-4xl text-transparent !bg-clip-text [background:linear-gradient(177.7deg,_#fff,_rgba(255,_255,_255,_0.66))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block    ">
            Ready to Experience Deoxys?
          </h2>
          <p className=" px-10 text-[18px] md:text-[22px] leading-[30px]  text-center opacity-[0.6]">
            Contribute to Deoxys development on GitHub and be part of the future!
          </p>
        </div>
        <div className="  flex w-full flex-col md:flex-row md:justify-center text-[14px] leading-[20px] gap-4 font-medium text-white">
          <Link
            href="/"
            className="  [text-shadow:0px_2px_6px_rgba(0,_0,_0,_0.25)] shadow-[0px_-3px_0px_rgba(0,_0,_0,_0.36)_inset,_0px_0px_5px_4px_rgba(0,_0,_0,_0.07),_0px_2.4000000953674316px_0px_rgba(255,_255,_255,_0.14)_inset,_0px_1px_3px_rgba(143,_143,_143,_0.2),_0px_6px_13px_rgba(0,_0,_0,_0.04),_0px_53px_32px_rgba(0,_0,_0,_0.02),_0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] rounded-lg bg-[#B10000] bg-gradient-to-b from-white/30 to-[#1B1A1A]/0 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-5 gap-[8px] text-center text-[14px] text-general-white font-geist border-[1px] border-solid border-black  hover:opacity-90 hover:ring-2 transition-transform duration-300 hover:ring-black"
          >
            Get Started
          </Link>
          <Link
            href="/"
            className="shadow-[0px_-3px_0px_rgba(0,_0,_0,_0.21)_inset,_0px_0px_5px_4px_rgba(0,_0,_0,_0.07),_0px_1px_3px_rgba(143,_143,_143,_0.2),_0px_6px_13px_rgba(0,_0,_0,_0.04),_0px_53px_32px_rgba(0,_0,_0,_0.02),_0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06),_0px_2.4000000953674316px_0px_rgba(255,_255,_255,_0.14)_inset] rounded-lg [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.29),_rgba(27,_26,_26,_0)),_#fff] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-5 text-center text-[14px] text-[#1a1a1a] border-[1px] border-solid border-black  hover:opacity-90 hover:ring-2 transition-transform duration-300 hover:ring-black"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="flex z-30 border-[1px]  md:flex-row lg:flex-row lg:w-full lg:max-w-4xl  md:justify-between border-solid border-white/15 [backdrop-filter:blur(4px)] rounded-md  bg-[#202020] flex-col-reverse gap-6 p-4 text-start">
        <div className="flex flex-col lg:flex-col-reverse  gap-4 justify-center ">
          <div className="flex flex-col md:flex-row  gap-4">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms and Conditions</Link>
            <Link href="/">Cookie Settings</Link>
          </div>
          <div className="flex flex-col  gap-4 ">
            <div className="flex flex-col gap-4 md:flex-row">
              <p className="opacity-[0.54]">Powered by Kazar Labs</p>
            </div>
            <p>© 2024 DEOXYS. All Rights Reserved</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href="/">
            <Image src={x} alt="x" className="w-10 h-10" />
          </Link>
          <Link href="/">
            <Image src={telegram} alt="telegram" className="w-10 h-10" />
          </Link>
          <Link href="/">
            <Image src={github} alt="github" className="w-10 h-10" />
          </Link>
        </div>
      </div>
    </div>
  );
}
