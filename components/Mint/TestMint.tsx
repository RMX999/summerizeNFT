import { useAddress, useMetamask, useNFTDrop } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import QR from "./qr"
import { useRouter } from "next/router";
import { useState } from "react";



const Mint: NextPage = () => {

  const [Mint, setMinted] = useState(false);

  const router = useRouter();
  // Get the currently connected wallet's address

  const address = useAddress();

  // Function to connect to the user's Metamask wallet
  const connectWithMetamask = useMetamask();

  // Get the NFT Collection contract
  const nftDropContract = useNFTDrop(
    "0xeCf16A42b41dBfc9307f76f32E3F29057d6bEA10"
  );

  async function claimNft() {
    try {
      const tx = await nftDropContract?.claim(1);
      console.log(tx);
      alert("NFT Claimed!");
      setMinted(true)
      router.push(`/mint`);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <div>
      
      {!address ? (
        <button
          
          onClick={connectWithMetamask}
        >
          Mint
        </button>
      ) : (
        <>
       {!Mint ? (
             <button
             onClick={() => claimNft()}
           >
            Mint
           </button>
      ) : (
        <>

          <button>
          <QR/>
        </button>
        </>
      )}
          
        </>
      )}
    </div>
  );
};

export default Mint;

{/* <button
            onClick={() => claimNft()}
          >
           Mint
          </button> */}