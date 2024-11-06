// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../css/Cart.css'; // Make sure to create this CSS file if needed
import Navbar from './NavBar';
import Footer from './Footer';

function Cart() {
  const { cart, removeFromCart, clearCart, addToCart, subtractFromCart } = useContext(CartContext);

  return (
    <div>
      <Navbar/>
      <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <h2 className="cart-item-name">{item.name}</h2>
                <p className="cart-item-price">${item.price.toFixed(2)} x {item.quantity}</p>
                <button onClick={() => subtractFromCart(item.id)}>
                  <FontAwesomeIcon icon={faMinus} /> {/* Minus icon for subtract */}
                </button>
                <button onClick={() => addToCart(item)}>
                  <FontAwesomeIcon icon={faPlus} /> {/* Plus icon for add */}
                </button>
                <button onClick={() => removeFromCart(item.id)}>
                  <FontAwesomeIcon icon={faTrash} /> {/* Trash icon for remove */}
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button onClick={clearCart}>Clear Cart</button>
            <p>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
      <Footer/>
    </div>
  );
}

export default Cart;
