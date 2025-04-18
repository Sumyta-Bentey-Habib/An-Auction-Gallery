import React, { useEffect, useState } from "react";
import AuctionItem from "../auctionitem/AuctionItem";

const AuctionItems = ({ handelFavorite, favorites }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      <div className="my-4 ml-2.5">
        <h2 className="text-[#0E2954] text-xl font-bold">Active Auction</h2>
        <p>Discover and bid on extraordinary items</p>
      </div>

      <div className="my-1 ml-4 overflow-x-auto">
        <table className="table mb-4 bg-white rounded-lg shadow-md">
          <thead>
            <tr className="text-black">
              <th>Items</th>
              <th>Current Bid</th>
              <th>Time Left</th>
              <th>Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <AuctionItem
                key={index}
                item={item}
                handelFavorite={handelFavorite}
                isFavorite={favorites.some((fav) => fav.id === item.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AuctionItems;
