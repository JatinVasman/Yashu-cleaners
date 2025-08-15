import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-hero">
          <h1>Contact Us</h1>
          <p>Have questions about our products or want to make a purchase? Visit our store or get in touch!</p>
        </div>

        <div className="contact-content">
          <div className="contact-grid">
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <ContactForm />
            </div>
            
            <div className="contact-info-section">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
