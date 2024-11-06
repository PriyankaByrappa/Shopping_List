// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/login'
import Register from './components/register'
import { CartProvider } from './components/CartContext'; // Import the CartProvider

function App() {
  return (
    <CartProvider> {/* Wrap the entire app with CartProvider */}
      <Router>
        <div className="App">
          
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
