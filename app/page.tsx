"use client";
import NavBar from "./components/NavBar";
import LogoList from "./components/LogoList";
import Feature from "./components/FeaturesBento";
import Architecture from "./components/Architecture";
import Steps from "./components/Steps";
import Faq from "./components/Faq";
import PerformanceBento from "./components/PerformanceBento";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="bg-black relative   ">
      <NavBar />
      <HeroSection />
      <LogoList />
      <Feature />
      <Architecture />
      <PerformanceBento />
      <Steps />
      <Benefits />
      <Faq />
      <Footer />
    </main>
  );
}
