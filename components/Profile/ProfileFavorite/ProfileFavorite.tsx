import React from "react";
import { Card } from "../../Cards/Card";

const data = [
  {
    image: "./img/nft5.png",
  },
  {
    image: "./img/nft5.png",
  },
  {
    image: "./img/nft5.png",
  },
  {
    image: "./img/nft5.png",
  },
  {
    image: "./img/nft5.png",
  },
  {
    image: "./img/nft5.png",
  },
  {
    image: "./img/nft5.png",
  },
  {
    image: "./img/nft5.png",
  },
];

export default function ProfileFavorite () {
    return (
        <div className="mt-10 px-10">
      <div className="flex flex-wrap gap-6 mx-auto justify-center items-center">
        {data.map((n, index) => {
          return <Card image={n.image} key={index} />
        })}
      </div>
    </div>
    );
}