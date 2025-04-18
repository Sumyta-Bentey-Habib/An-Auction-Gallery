import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-[#FFFFFF] text-black p-10">
  <aside>
    
      
    <p className="text-2xl">
    Auction <span className='text-[#FFD337]'>Gallery</span>
      <br />
      Bid . Win. Own.
      <br />
     <div className='gap-5 text-sm flex flex-row list-none'>
        <li>Home</li>
        <li>Auctions</li>
        <li>Categories</li>   
        <li>How to works</li>
     </div>
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  
</footer>
        </div>
    );
};

export default Footer;