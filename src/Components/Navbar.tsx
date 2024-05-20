
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu,AiOutlineHome, AiOutlineAppstore, AiOutlineShoppingCart, AiOutlinePhone, AiOutlineSearch } from 'react-icons/ai';
import './Navbar.css';

const Navbar = () => {
const [openMenu, setOpenMenu] = useState(false);
const toggleMenu = ()=> {
  setOpenMenu(openMenu => !openMenu);
  console.log('openMenu', openMenu)
};

  return (
    <nav className="navbar">
      <div className="navbar-menu" onClick={toggleMenu}>
        <AiOutlineMenu size={30}/>
      </div>
      {openMenu && (
        <div>
        <ul className="navbar-links" >
          <li>
            <Link to="/" >
              <AiOutlineHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/products">
              <AiOutlineAppstore /> Products
            </Link>
          </li>
          <li>
            <Link to="/cart" >
              <AiOutlineShoppingCart /> Cart
            </Link>
          </li>
          <li>
            <Link to="/contact" >
              <AiOutlinePhone />Call 
            </Link>
          </li>
        </ul>
        </div>
      )}
      <div className="navbar-search">
        <form className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <AiOutlineSearch />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;