import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <div className="footer-logo-container">
              <img src={`${import.meta.env.BASE_URL}images/logo/WebLogo.jpg`} alt="Yashu Cleaners" className="footer-logo-image" />
            </div>
            <p>Your trusted partner for all cleaning solutions.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: <a href="mailto:yashucleaners@gmail.com" className="contact-link">yashucleaners@gmail.com</a></p>
            <p>Phone: <a href="tel:+919557342093" className="contact-link">+919557342093</a></p>
            <p>Address: Durgapuram Road, Panni Nagar, Near Sugar Mill, Bulandshahr, 203001</p>
            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://www.instagram.com/yashu.cleaners?igsh=M28wNGtjbzA5cjB6" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <img src={`${import.meta.env.BASE_URL}images/social/instagram.svg`} alt="Instagram" className="social-icon" />
                </a>
                <a href="https://www.facebook.com/share/17AYm5hBzV/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <img src={`${import.meta.env.BASE_URL}images/social/facebook.svg`} alt="Facebook" className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Yashu Cleaners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
