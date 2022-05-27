import * as React from "react";
import { useState } from "react";

import NavComponent from "../components/Navigation/NavComponent";
import Footer from "../components/Footer/Footer"
import ProfileCarousel from "../components/Profile/ProfileCarousel/ProfileCarousel"
import ProfileHero from "../components/Profile/ProfileHero/ProfileHero"

//web3auth imports
import { CHAIN_CONFIG_TYPE } from "../config/chainConfig";
import { WEB3AUTH_NETWORK_TYPE } from "../config/web3AuthNetwork";
import { Web3AuthProvider } from "../services/web3auth"

export default function Home() {
  const [web3AuthNetwork, setWeb3AuthNetwork] = useState<WEB3AUTH_NETWORK_TYPE>("mainnet");
  const [chain, setChain] = useState<CHAIN_CONFIG_TYPE>("mainnet");

  return (
    <div className=" text-black font-poppins bg-gradient-to-br from-[#FFDC83] via-[#FFB9B9] to-[#00C5E8] ">
       <Web3AuthProvider chain={chain} web3AuthNetwork={web3AuthNetwork}>
      <NavComponent />
      <ProfileHero />
      <ProfileCarousel />
      <Footer />
      </Web3AuthProvider>
    </div>
  );
}
