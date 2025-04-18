import { useState } from "react";
import "./App.css";
import AuctionItems from "./components/auctionitems/AuctionItems";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Navber from "./components/navber/Navber";
import { CiHeart } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notifyRemove = () => toast.warn("Item removed from favorites😓!");
  const notifyAdd = () => toast.success("Item added to favorites😊!");

  const [favorites, setFavorites] = useState([]);

  const handelFavorite = (item) => {
    const isAlreadyFav = favorites.some((fav) => fav.id === item.id);
    if (!isAlreadyFav) {
      setFavorites([...favorites, item]);
      notifyAdd();
    }
  };

  const removeFavorite = (indexToRemove) => {
    const updated = favorites.filter((_, i) => i !== indexToRemove);
    setFavorites(updated);
    notifyRemove();
  };

  const totalBidAmount = favorites.reduce(
    (total, item) => total + parseFloat(item.currentBidPrice),
    0
  );

  return (
    <>
      <Navber />
      <Banner />
      <ToastContainer />
      <div className="flex gap-4 main-container bg-slate-300 ">
        <div className="left-side-container w-[70%]">
          <AuctionItems handelFavorite={handelFavorite} favorites={favorites} />
        </div>

        <div className="right-side-container W-[30%] my-21 pr-4">
          <div className="text-black shadow-xl card bg-base-100">
            <div className="items-center text-center card-body">
              <h2 className="card-title text-[#0E2954] text-xl font-bold ">
                <CiHeart size={30} />
                Favorite Items
              </h2>
              <hr className="w-full my-2 border-t-2 border-gray-200" />

              {favorites.length === 0 ? (
                <>
                  <p className="font-bold">No favorites yet</p>
                  <p>
                    Click the heart icon on any item to add it to your favorites
                  </p>
                </>
              ) : (
                favorites.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4 p-2 mb-2 bg-white border rounded-lg shadow-md"
                  >
                    <div className="w-16 h-16">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-full rounded-md"
                      />
                    </div>

                    <div className="flex-1 ml-2 text-left">
                      <h3 className="font-semibold text-[#0E2954]">
                        {item.title}
                      </h3>
                      {/* <p className="text-sm text-gray-600 ">
                        Bid: {item.bidsCount}
                        <div className="text-sm text-gray-600 ">
                        Bid: {item.bidsCount}
                        </div>
                      </p> */}
                      <div className="flex flex-row gap-3 text-sm text-gray-600">
                        <div>
                          Current Bid: ${item.currentBidPrice}
                        </div>
                        <div>
                        Bid: {item.bidsCount}
                        </div>
                        </div>
                      <p className="text-sm text-gray-500">
                        Time left: {item.timeLeft}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFavorite(index)}
                      className="text-xl"
                    >
                      ❌
                    </button>
                  </div>
                ))
              )}

              <hr className="w-full my-2 border-t-2 border-gray-200" />
              <h2 className="card-title">
                Total Bids Amount: ${totalBidAmount.toFixed(2)}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
