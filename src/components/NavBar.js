// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import { FaShoppingCart } from 'react-icons/fa'; // Importing an icon for the cart

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ShopEasy</div>
      <ul className="nav-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/product">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart" className="cart-link">
            <FaShoppingCart /> Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
