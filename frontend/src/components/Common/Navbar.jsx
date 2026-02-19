import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2";
import { Searchbar } from './Searchbar';
import { CartDrawer } from '../Layout/CartDrawer';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {

  const[drawerOpen,setDrawerOpen]=useState(false);
  const [navDrawerOpen,setNavDrawerOpen]=useState(false);

  const toggleNavDrawer=()=>{
    setNavDrawerOpen(!navDrawerOpen);
  };
    const toggleCartDrawer=()=>{
        setDrawerOpen(!drawerOpen);

    };
  return (<>
    <nav>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">Agora</Link>
        </div>

        {/* Center navigation links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-gray-500">Men</Link>
          <Link to="/products" className="hover:text-gray-500">Women</Link>
          <Link to="/about" className="hover:text-gray-500">Top Wear</Link>
          <Link to="/contact" className="hover:text-gray-500">Bottom Wear</Link>
        </div>

        {/* Right icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button onClick={toggleCartDrawer} className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-0.5">
              0
            </span>
          </button>
          {/*search*/}
          <div className="overflow-hidden">
          <Searchbar/>
            </div>
          <button onClick={toggleNavDrawer}className='md:hidden'>
            <HiBars3BottomRight className='h-6 w-6 text-gray-700'/>
          </button>
        </div>
      </div>
    </nav>
    <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>
    {/* Mobilenavigation  */}
    <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50
  ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>

      <div className='flex justify-end p-4'>
        <button onClick={toggleNavDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600"/>
        </button>
      </div>
      <div className='p-4'>
        <h2 className='p-text-xl font-semiboldmb-4'>Menu</h2>
        <nav className="space-y-4">
          <Link to="#" onClick={toggleNavDrawer} 
          className="block text-gray-600 hover:text-black">
            Men
          </Link>

          <Link to="#" onClick={toggleNavDrawer} 
          className="block text-gray-600 hover:text-black">
            Woen
          </Link>

          <Link to="#" onClick={toggleNavDrawer} 
          className="block text-gray-600 hover:text-black">
            Top Wear
          </Link>

          <Link to="#" onClick={toggleNavDrawer} 
          className="block text-gray-600 hover:text-black">
            Bottom Wear
          </Link>
        </nav>
      </div>
    </div>

    </>
  );
};

export default Navbar;
