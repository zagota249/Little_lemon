import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

export default function Homepage() {
  // Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="homepage-container">
      {/* Header */}
      <header className="header">
        <div className="logo">Little Lemon</div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/booking">Book a Table</Link></li>
            {/* Smooth scroll links */}
            <li>
              <a href="#hero" onClick={(e) => { e.preventDefault(); handleScroll("hero"); }}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll("contact"); }}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Little Lemon</h1>
          <p>
            A family-owned Mediterranean restaurant serving fresh, delicious meals
            with a modern twist.
          </p>
          <Link to="/booking" className="hero-button">Book a Table</Link>
        </div>

        <img
          src="/lemon.png"
          alt="Little Lemon Restaurant"
          className="hero-image"
        />
      </section>

      {/* Specials Section */}
      <section className="specials-section">
        <h2>Today's Specials</h2>
        <div className="specials-grid">
          <div className="special-card">
            <img src="/greek_salad.jpeg" alt="Greek Salad" />
            <h3>Greek Salad</h3>
            <p>A refreshing mix of tomatoes, cucumbers, onions, and feta cheese.</p>
          </div>
          <div className="special-card">
            <img src="/lemon dessert.jpg" alt="Lemon Dessert" />
            <h3>Lemon Dessert</h3>
            <p>A tangy and sweet lemon-flavored treat to end your meal.</p>
          </div>
          <div className="special-card">
            <img src="/pasta.jpeg" alt="Pasta" />
            <h3>Pasta</h3>
            <p>Delicious pasta with rich tomato sauce and fresh herbs.</p>
          </div>
          <div className="special-card">
            <img src="/lemon juice.jpeg" alt="Lemon Juice" />
            <h3>Lemon Juice</h3>
            <p>A refreshing and tangy lemon juice to quench your thirst.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Little Lemon. All rights reserved.</p>
        <p>123 Lemon Street, Flavor Town, USA</p>
      </footer>
    </div>
  );
}
