import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
  className="min-h-screen bg-cover bg-center relative"
  style={{
    backgroundImage: "url('/images/Banner-min.jpg')",
  }}
>
  <div className="absolute inset-0 bg-opacity-50"></div>

  <div className="relative z-10 flex h-full">
    <div className="text-white text-left max-w-xl px-10 mt-40">
      <h1 className="mb-5 text-5xl font-bold">
        Bid on Unique Items from Around the World
      </h1>
      <p className="mb-5">
        Discover rare collectibles, luxury goods, and <br />
        vintage treasures in our curated auctions
      </p>
      <button className="btn bg-white text-black rounded-2xl">
        Explore Auctions
      </button>
    </div>
  </div>
</div>


        </div>
    );
};

export default Banner;


