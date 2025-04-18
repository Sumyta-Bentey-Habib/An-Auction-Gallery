import React from 'react';
import { IoMdNotifications } from "react-icons/io";

const Navber = () => {
    return (
        <div>
            <div className="shadow-sm navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
    <a className="text-xl btn btn-ghost">Auction <span className='text-[#FFD337]'>Gallery</span></a>
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-1 menu menu-horizontal">
    <li><a>Home</a></li>
        <li><a>Auctions</a> </li>
        <li><a>Categories</a></li>
        <li><a>How to works</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    
  <div className="flex-none gap-0.5">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">

          <IoMdNotifications  size={20}/>
       
          <span className="indicator-item">7</span>
    
        </div>
      </div>
     
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>  
    </div>
  </div>

  </div>
</div>

        </div>
    );
};

export default Navber;