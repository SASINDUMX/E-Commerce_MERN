import React from 'react'
import TopBar from '../Layout/TopBar'   
import Navbar from './Navbar'
const Header = () => {
  return (
    <header>
        {/* Topbar */}
        <TopBar />
        {/* navbar */}
        <Navbar />
        {/* Cart Drawr */}
    </header>
  );
};
export default Header;