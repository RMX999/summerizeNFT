/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import HeroSection from "../components/Hero/Hero";
import NavComponent from "../components/Navigation/NavComponent";
import Footer from "../components/Footer/Footer"
import Mint from "../components/Mint/mint"

export default function Home() {
  return (
    <div className=" text-black font-poppins bg-gradient-to-br from-[#FFDC83] via-[#FFB9B9] to-[#00C5E8] ">
      <NavComponent />
      <Mint />
      <Footer />
    </div>
  );
}
