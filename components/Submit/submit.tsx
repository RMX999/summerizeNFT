import { Button, Grid } from "@nextui-org/react";
import { useState } from "react";

export default function Submit() {
  const [Scan, setScan] = useState(false);

  return (
    <div className=" items-center relative mb-[150px] flex justify-around  space-y-[90px] flex-wrap px-5">
    <div className="max-w-2xl relative">
      <div className="flex flex-col  bg-white bg-opacity-70 rounded-xl  px-[24px] pt-[24px] pb-[40px] relative">
        <div className="relative">
          <img src="./img/nft4.png" alt="nft-gif" className="rounded-xl" />
        </div>
        <div className="py-4"></div>
      </div>
      <div className="absolute pl-[25px] ">
        <div className="relative flex justify-evenly w-[400px] h-[100px] bg-white rounded-xl bottom-[40px] pt-[23px]">
          <div className="">
            <p className="pl-5 font-Poppins text-[14px] font-[500] text-[#888888]">Status</p>
            <img className="inline pb-2" alt="" src="mint/open.svg" />
            {!Scan ? (
    <p className="inline font-Poppins text-[25px] font-[600] text-[#2E2E2E]">
       Not Scanned    
    </p>
) : (
<>

<p className="inline font-Poppins text-[25px] font-[600] text-[#2E2E2E]">
            Scanned
</p>
</>
)}
          </div>
          <img className="pb-[25px]" alt="" src="mint/line.png" />
          <div className="">
            <p className="font-Poppins text-[14px] font-[500] text-[#888888]">Item</p>
            <p className="font-Poppins text-[25px] font-[600] text-[#2E2E2E]">ID: 1</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col max-w-[750px] bg-white bg-opacity-70 rounded-xl p-4 relative">
      <div className="relative">
        <div className="relative pt-[36px] pl-[46px] pr-[60px]">
          <p className="font-Poppins text-[41px] font-[600] pb-[14px] ">Summerize.NFT</p>
          <p className="font-Poppins text-[20px] font-[600] pb-[14px] ">ChainID : Polygon</p>
          <p className="font-Poppins text-[20px] font-[600] pb-[14px] ">Holders : 1</p>
          <p className="font-Poppins text-[20px] font-[600] pb-[14px] ">Contract : <a href="https://polygonscan.com/address/0xecf16a42b41dbfc9307f76f32e3f29057d6bea10">0xecf16a4...ea10</a></p>
          <p className="font-Poppins text-[20px] font-[600] pb-[14px] ">IPFS : Verified</p>
        </div>
          <div>
          <Grid.Container gap={2} justify="center">
          {!Scan ? (
           <Grid>
           <Button shadow color="success" auto onClick={() => setScan(true)}>
               Accept
           </Button>
           </Grid>
      ) : (
        <>

<Grid>
<Button shadow color="warning" auto>
  Scanned
</Button>
</Grid>
        </>
      )}
          </Grid.Container>
          </div>
        </div>
      </div>
    </div>
  );
}
