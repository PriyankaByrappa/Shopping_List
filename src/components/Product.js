// src/components/Product.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import '../css/Product.css';
import products from './products'; // Ensure you have a products.js file that exports an array of product objects
import Navbar from './NavBar';
import Footer from './Footer';

function Product() {
  const { addToCart } = useContext(CartContext); // Get addToCart function from context

  return (
    <div>
      <Navbar/>
    <div className="product-page">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">₹{product.price.toFixed(2)} per kg</p>
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
      <Footer/>
    </div>
    
  );
}

export default Product;
