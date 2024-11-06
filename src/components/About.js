// src/components/About.js
import React from 'react';
import '../css/About.css'; // Import a CSS file for styling
import Navbar from './NavBar';
import Footer from './Footer';
// import farmImage from '../assets/farm.jpg'; // Example image path if you want to add a farm or vegetable-related image

const About = () => {
  return (
    <div>
      <Navbar/>
      <div className="about-container">
      <h1>About ShopEasy</h1>
      {/* <img src={farmImage} alt="Our Farm" className="farm-image" /> */}
      <p>
        Welcome to FreshHarvest! We are committed to bringing farm-fresh vegetables straight to your doorstep. 
        Our mission is to provide you with high-quality, organic, and sustainably sourced vegetables for a healthier lifestyle. 
        From the farm to your table, we ensure that every vegetable is fresh, nutritious, and handled with care.
      </p>
      <h2>Our Vision</h2>
      <p>
        At FreshHarvest, we envision a world where access to fresh, wholesome produce is available to everyone. 
        We aim to promote healthier eating habits by making fresh vegetables easily accessible to all our customers.
      </p>
      <h2>Our Values</h2>
      <ul className="values-list">
        <li>Quality & Freshness: We guarantee that every vegetable is hand-picked and fresh from the farm.</li>
        <li>Sustainability: We partner with local farms that use eco-friendly and sustainable farming practices.</li>
        <li>Health & Wellness: We believe in the power of nutritious food to fuel a healthier lifestyle.</li>
        <li>Community Support: We support local farmers and contribute to the communities we serve.</li>
      </ul>
      <h2>Meet Our Farmers</h2>
      <p>
        Our dedicated team of farmers works hard to ensure that you receive only the best produce. 
        With years of experience in sustainable farming, they are passionate about growing vegetables that are both delicious and nutritious.
      </p>
    </div>
      <Footer/>
    </div>
  );
};

export default About;
