import Image from "next/image";

import styles from "./styles.module.css";

import avnu from "../assets/logo/avnu.png";
import kakarot from "../assets/logo/kakarot.png";
import kasar from "../assets/logo/kasar.png";
import madara from "../assets/logo/madara.png";
import onlydust from "../assets/logo/onlydust.png";
import stackware from "../assets/logo/stackware.png";
import starknet from "../assets/logo/starknet.png";

export default function LogoList() {
  return (
    <div className="w-full  bg-[#040201] flex flex-col items-center justify-center py-[100px] px-[120px] box-border text-center text-xl text-white overflow-hidden ">
      <div className="flex flex-col items-center justify-start gap-[48px] overflow-x-hidden">
        <div className="w-[1077px] relative leading-[28px] inline-block opacity-[0.5]">Supported by</div>
        <div className={`h-[72px] flex flex-row gap-[50px] overflow-x-auto ${styles.scrollContainer}`}>
          <div className="w-[208.9px] h-[58.5px] flex flex-col items-center justify-center">
            <Image src={kakarot} className="w-[194.6px] relative h-[51px] object-cover " alt="" />
          </div>
          <div className="w-[208.9px] h-[58.5px] flex flex-col items-center justify-center">
            <Image src={avnu} className="w-full relative max-w-full overflow-hidden h-[35.5px] shrink-0 object-cover mix-blend-luminosity" alt="" />
          </div>
          <div className="w-[208.9px] h-[58.5px] flex flex-col items-center justify-center">
            <Image src={starknet} className="w-full relative max-w-full overflow-hidden h-full shrink-0 object-cover opacity-[0.9]" alt="" />
          </div>
          <div className="w-[208.9px] h-[58.5px] flex flex-col items-center justify-center">
            <Image src={kasar} className=" mix-blend-luminosity w-[194.6px] relative h-[44.6px] object-cover" alt="" />
          </div>
          <div className={`w-[208.9px] h-[58.5px] flex flex-col items-center justify-center opacity-[0.9]`}>
            <Image src={onlydust} className="w-[194.6px] relative h-11 object-cover " alt="" />
          </div>
          <div className="w-[208.9px] h-[58.5px] flex flex-col items-center justify-center">
            <Image src={madara} className="w-[194.6px] relative h-[57.3px] object-cover" alt="" />
          </div>
          <div className="w-[208.9px] h-[58.5px] flex flex-col items-center justify-center">
            <Image src={stackware} className="w-full relative max-w-full overflow-hidden h-11 shrink-0 object-cover mix-blend-luminosity" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
