import GetQR from "../Mint/qr";

interface Props {
  image: string;
}

export const OwnedCard = ({ image }: Props) => {
  return (
    <div className="bg-white relative w-[300px]   shadow-2xl rounded-xl ">
      <img
        src={image}
        alt="title"
        max-width="284px"
        max-height="179px"
        className="max-w-[284px] max-h-[195px] pt-2 mx-auto rounded-t-xl sm:rounded-none rounded-lg"
      />
      <h1 className="pl-2 mb-4 font-Poppins font-semibold">Jacob Jones</h1>

      <div className="px-2 flex justify-between">
        <div className="py-2">
          <img
            src="./NftCard/artist.png"
            alt="title"
            className="inline-block pb-4 pr-2 rounded-t-xl sm:rounded-none rounded-lg "
          />
          <div className="inline-block font-Poppins">
            <p className="text-xs">Creator</p>
            <p className="text-xs">Roger Herwitz</p>
          </div>
          <div className="text-white bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-8 py-2 rounded-lg text-xl font-Poppins font-bold flex items-center">
          <GetQR/>
          </div>
        </div>

        <div className="inline">
          <img
            src="../NftCard/cryp.png"
            alt="title"
            className="inline-block pb-4  pr-2 rounded-t-xl sm:rounded-none rounded-lg"
          />
          <div className="inline-block font-Poppins">
            <h2 className="text-right text-xs text-[#52575C]">Price</h2>
            <h1 className="text-xs text-black">10.50 SMR</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
