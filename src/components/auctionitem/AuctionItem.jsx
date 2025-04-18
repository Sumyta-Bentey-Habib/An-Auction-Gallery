import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";

const AuctionItem = ({ item, handelFavorite, isFavorite }) => {
  return (
    <tr>
      <td className="text-[#0E2954]">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-12 h-12 mask mask-squircle">
              <img src={item.image} alt="item image" />
            </div>
          </div>
          <div>
            <div>{item.title}</div>
          </div>
        </div>
      </td>
      <td>${item.currentBidPrice}</td>
      <td>{item.timeLeft}</td>
      <td>
        <button
          onClick={() => {
            if (!isFavorite) {
              handelFavorite(item);
            }
          }}
          className={`btn btn-ghost btn-xs ${
            isFavorite ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {isFavorite ? (
            <FaHeart size={30} className="text-red-500" /> 
          ) : (
            <CiHeart size={30} /> 
          )}
        </button>
      </td>
    </tr>
  );
};

export default AuctionItem;
