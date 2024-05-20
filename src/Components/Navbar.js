
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu,AiOutlineHome, AiOutlineAppstore, AiOutlineShoppingCart, AiOutlinePhone, AiOutlineSearch } from 'react-icons/ai';
import './Navbar.css';

const Navbar = () => {
const [openMenu, setOpenMenu] = useState(false);
const toggleMenu = ()=> {
  setOpenMenu(!openMenu);
};



  return (
    <nav className="navbar">
      <div className="navbar-menu" onClick={toggleMenu}>
        <AiOutlineMenu size={30}/>
      </div>
      <ul className={`navbar-links ${openMenu ? 'open' : ''}`} >
        <li>
          <Link to="/" onClick={toggleMenu}>
            <AiOutlineHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/products" onClick={toggleMenu}>
            <AiOutlineAppstore /> Products
          </Link>
        </li>
        <li>
          <Link to="/cart" onClick={toggleMenu}>
            <AiOutlineShoppingCart /> Cart
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>
            <AiOutlinePhone />Call 
          </Link>
        </li>
      </ul>
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