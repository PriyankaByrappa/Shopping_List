// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import products from './products'; // Import products for bestseller section
import Navbar from './NavBar';
import Footer from './Footer';

function Home() {
  // Filter bestsellers from products array
  const bestsellers = products.filter((product) => product.bestseller);

  return (
    <div className="home-container">
      <Navbar />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ShopEasy</h1>
          <p>Your one-stop shop for fresh, organic vegetables delivered to your door.</p>
          <Link to="/product" className="shop-now-button">Shop Now</Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Explore Our Categories</h2>
        <div className="category-grid">
          <Link to="/home" className="category-card">Leafy Greens</Link>
          <Link to="/home" className="category-card">Root Vegetables</Link>
          <Link to="/home" className="category-card">Herbs</Link>
          <Link to="/home" className="category-card">Seasonal Picks</Link>
        </div>
      </section>

      {/* Special Deals Section */}
      <section className="special-deals">
        <h2>Special Deals</h2>
        <p>Get fresh, high-quality vegetables at unbeatable prices.</p>
        <div className="deals-content">
          <img src="/images/special-deal.jpg" alt="Special Deal" className="deal-image" />
          <div className="deal-info">
            <h3>Buy 1 kg of Carrots, Get 500g Free!</h3>
            <p>Offer valid until the end of the month. Don’t miss out on our fresh produce deals!</p>
            <Link to="/product" className="view-deals-button">View Deals</Link>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="bestsellers">
        <h2>Bestsellers</h2>
        <div className="bestseller-grid">
          {bestsellers.map((product) => (
            <div className="bestseller-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">₹{product.price.toFixed(2)} per kg</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>"ShopEasy offers the best quality vegetables. I love their fresh and organic produce!"</p>
            <span>- Rahul, Delhi</span>
          </div>
          <div className="testimonial">
            <p>"I always find amazing deals here. The vegetables are always fresh and well-packaged."</p>
            <span>- Priya, Mumbai</span>
          </div>
          <div className="testimonial">
            <p>"Their delivery is super fast! I always get my veggies on time."</p>
            <span>- Amit, Bangalore</span>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="home-footer">
        <p>Join ShopEasy today and enjoy the convenience of fresh vegetables delivered to your door.</p>
        <Link to="/about" className="learn-more-button">Learn More About Us</Link>
      </footer>
      <Footer />
    </div>
  );
}

export default Home;
