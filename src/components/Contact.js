// src/components/Contact.js
import React, { useState } from 'react';
import '../css/Contact.css'; // Import a CSS file for styling
import Navbar from './NavBar';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send to an API
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We will get back to you shortly.');
  };

  return (
    <div>
      <Navbar/>
      <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback, feel free to reach out to us!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
      <Footer/>
    </div>
  );
};

export default Contact;
