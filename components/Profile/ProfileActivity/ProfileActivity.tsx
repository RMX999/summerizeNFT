interface Props {
  image: string;
  item: string;
  status: string;
  price: string;
  quant: string;
  seller: string;
  date: string;
}

const data = [
  {
    image: "./Profile/ActItem.png",
    item: "Art of Tulunad",
    status: "Minted",
    price: "120.20 USDC",
    quant: "x1",
    seller: "Mart De Lore",
    date: "March 16 2022, 01:26 pm",
  },
  {
    image: "./Profile/ActItem.png",
    item: "Art of Tulunad",
    status: "Minted",
    price: "120.20 USDC",
    quant: "x1",
    seller: "Mart De Lore",
    date: "March 16 2022, 01:26 pm",
  },
  {
    image: "./Profile/ActItem.png",
    item: "Art of Tulunad",
    status: "Minted",
    price: "120.20 USDC",
    quant: "x1",
    seller: "Mart De Lore",
    date: "March 16 2022, 01:26 pm",
  },
  {
    image: "./Profile/ActItem.png",
    item: "Art of Tulunad",
    status: "Minted",
    price: "120.20 USDC",
    quant: "x1",
    seller: "Mart De Lore",
    date: "March 16 2022, 01:26 pm",
  },
  {
    image: "./Profile/ActItem.png",
    item: "Art of Tulunad",
    status: "Minted",
    price: "120.20 USDC",
    quant: "x1",
    seller: "Mart De Lore",
    date: "March 16 2022, 01:26 pm",
  },
  {
    image: "./Profile/ActItem.png",
    item: "Art of Tulunad",
    status: "Minted",
    price: "120.20 USDC",
    quant: "x1",
    seller: "Mart De Lore",
    date: "March 16 2022, 01:26 pm",
  },
  {
    image: "./Profile/ActItem.png",
    item: "Art of Tulunad",
    status: "Minted",
    price: "120.20 USDC",
    quant: "x1",
    seller: "Mart De Lore",
    date: "March 16 2022, 01:26 pm",
  },
  {
    image: "./Profile/ActItem.png",
    item: "Art of Tulunad",
    status: "Minted",
    price: "120.20 USDC",
    quant: "x1",
    seller: "Mart De Lore",
    date: "March 16 2022, 01:26 pm",
  },
];

export default function ProfileActivity() {
  return (
    <div className="w-11/12 mx-auto rounded-xl mt-[25px]">
      <div className="bg-white bg-opacity-70 rounded-xl pt-1 pb-[51px]">
        <div className="flex justify-evenly items-center h-[55px] mx-4 mt-4 bg-white rounded-xl font-Poppins font-[500] text-[14px]">
          <p className="pl-12">Item</p>
          <p>Status</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Seller</p>
          <p>Date & Time</p>
        </div>
        {data.map((n, index) => {
          return (
            <div className="flex justify-evenly items-center rounded-xl font-Poppins font-[500] text-[14px] pt-[44px]">
              <div className="">
                <img
                  src={n.image}
                  alt="title"
                  className="inline max-w-[36px] max-h-[36px] mx-auto rounded-lg"
                />
                <p className="inline pl-[24px]"> 
                    {n.item}
                </p>
              </div>
              <p className="">{n.status}</p>
              <p className="">{n.price}</p>
              <p className="">{n.quant}</p>
              <p className="">{n.seller}</p>
              <p className="">{n.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
