import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2";
import { Searchbar } from './Searchbar';

const Navbar = () => {
  return (
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
          <button className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-0.5">
              0
            </span>
          </button>
          {/*search*/}
          <Searchbar/>
          <button className='md:hidden'>
            <HiBars3BottomRight className='h-6 w-6 text-gray-700'/>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
