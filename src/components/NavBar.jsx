import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import homeLogo from "../assets/home Logo.webp"
const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [ 
    { id: 1, text: 'Home' },
    { id: 2, text: 'About' },
    { id: 3, text: 'Contact' },
  ];

  return (
    <div className='bg-black  min-w-max'>   
        <div className='flex justify-between items-center h-24 w-11/12 mx-auto px-4 text-white'>
        {/* Logo */}
        {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>MR.VEGG</h1> */}
        <img src={homeLogo}  width={220}/>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex'>
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-4 hover:bg-[#37a150] rounded-2xl m-2 cursor-pointer duration-300 hover:text-black'
            >
              {item.text}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? ' fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10'
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }
        >
          {/* Mobile Logo */}
          {/* <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1> */}
          <img src={homeLogo}  width={170}/>

          {/* Mobile Navigation Items */}
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
            >
              {item.text}
            </li>
          ))}
        </ul>
        </div>
   </div>
  );
};

export default Navbar;