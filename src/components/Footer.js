// src/components/Footer.js
import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>ShopEasy</h3>
          <p>Your one-stop shop for quality products. We offer a variety of items to meet all your needs with the best prices and reliable customer support.</p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/product">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#facebook"><img src="facebook-icon.png" alt="Facebook" /></a>
            <a href="#twitter"><img src="twitter-icon.png" alt="Twitter" /></a>
            <a href="#instagram"><img src="instagram-icon.png" alt="Instagram" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 ShopEasy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
