import Image from "next/image";

import Link from "next/link";
import styles from "./styles.module.css";

export default function NavBar() {
  return (
    <nav className=" absolute z-30 left-0 right-0 mx-4 md:mx-auto mt-12   min-w-[361px] md:max-w-3xl lg:max-w-4xl h-[60px] px-2 py-1.5 bg-zinc-600 bg-opacity-20 rounded-xl shadow border-2 border-white border-opacity-10 backdrop-blur-sm justify-between items-center inline-flex">
      <div className="flex justify-between items-center w-full">
        <Image src="/logo.png" alt="logo" width={65} height={44} className="object-cover" />
        <ul className=" hidden md:flex text-sm text-white md:gap-6 font-normal">
          <Link href="#features">Features</Link>
          <Link href="#architecture">Architecture</Link>
          <Link href="#performance">Performance</Link>
          <Link href="#steps">How it works</Link>
          <Link href="#faq">FAQ</Link>
        </ul>

        <Link
          href="/"
          className={` flex w-22 h-full py-2.5 px-5  bg-white bg-gradient-to-b from-white/30 to-[#1B1A1A]/30 rounded-lg gap-2.5 justify-center items-center border border-1 border-black ${styles.heroButtonShadow} hover:opacity-95 hover:ring-1 transition-transform duration-300 hover:ring-white/60 `}
        >
          <p className="text-zinc-900  text-sm font-medium  leading-tight">Launch App</p>
          <Image src="/buton-decoration.png" alt="arrow" width={17.73} height={20.35} className="object-cover" />
        </Link>
      </div>
    </nav>
  );
}
