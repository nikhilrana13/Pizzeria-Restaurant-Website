
import React, { useState } from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import navlogo from '../../assets/pizzeria-template-site-logo-red.svg';
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-col">
      {/* Top Bar */}
      <div className="flex justify-between items-center py-6 px-8 sm:px-6 md:px-12">
        <div className="hidden lg:flex gap-5">
          <FaTwitter className="text-2xl text-white" />
          <FaInstagram className="text-2xl text-white" />
          <FaFacebook className="text-2xl text-white" />
        </div>
        
        {/* Logo */}
        <div>
          <img src={navlogo} alt="Pizzeria Logo" />
        </div>

        {/* Order Online Button */}
        <div className='hidden lg:block'>
          <button 
            type="button" 
            className="py-2.5 px-5 text-sm font-medium text-white bg-transparent border border-gray-200 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:hover:bg-gray-700 dark:text-gray-400 dark:border-gray-6000 hover:text-black"
          >
            Order Online
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {
              isMenuOpen ? (
                <IoIosCloseCircleOutline className="text-3xl text-white" />
              ) : (
                <GiHamburgerMenu className="text-3xl text-white" />
              )
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu (Toggled) */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#fff] py-2 transition duration-300 ease-in-out`}>
        <ul className="flex flex-col gap-3 items-center">
          <NavLink to="/" className="text-black py-2" onClick={toggleMenu}>HOME</NavLink>
          <NavLink to="/menu" className="text-black py-2" onClick={toggleMenu}>MENU</NavLink>
          <NavLink to="/about" className="text-black py-2" onClick={toggleMenu}>ABOUT</NavLink>
          <NavLink to="/contact" className="text-black py-2" onClick={toggleMenu}>CONTACT</NavLink>
        </ul>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-center py-4">
        <ul className="flex gap-10">
          <NavLink to="/" className="text-[1rem] font-[500] text-gray-300 hover:text-white focus:text-white">HOME</NavLink>
          <NavLink to="/menu" className="text-[1rem] font-[500] text-gray-300 hover:text-white focus:text-white">MENU</NavLink>
          <NavLink to="/about" className="text-[1rem] font-[500] text-gray-300 hover:text-white focus:text-white">ABOUT</NavLink>
          <NavLink to="/contact" className="text-[1rem] font-[500] text-gray-300 hover:text-white focus:text-white">CONTACT</NavLink>
          <li className="text-[1rem] font-[500] text-gray-300 hover:text-white focus:text-white">OFFERS</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
