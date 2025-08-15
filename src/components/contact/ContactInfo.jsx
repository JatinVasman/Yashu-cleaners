import React from 'react';

const ContactInfo = () => {
  const contactDetails = [
    {
      type: 'Address',
      icon: '📍',
      info: 'Durgapuram Road, Panni Nagar, Near Sugar Mill, Bulandshahr, 203001'
    },
    {
      type: 'Phone',
      icon: '📞',
      info: '+919557342093',
      link: 'tel:+919557342093'
    },
    {
      type: 'Email',
      icon: '✉️',
      info: 'yashucleaners@gmail.com',
      link: 'mailto:yashucleaners@gmail.com'
    }
  ];

  return (
    <div className="contact-info">
      <h2>Get in Touch</h2>
      <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      
      <div className="contact-details">
        {contactDetails.map((detail, index) => (
          <div key={index} className="contact-item">
            <div className="contact-icon">{detail.icon}</div>
            <div className="contact-content">
              <h3>{detail.type}</h3>
              {detail.link ? (
                <a href={detail.link} className="contact-link">
                  <p>{detail.info}</p>
                </a>
              ) : (
                <p>{detail.info}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="social-links">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/share/17AYm5hBzV/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
            <img src={`${import.meta.env.BASE_URL}images/social/facebook.svg`} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/yashu.cleaners?igsh=M28wNGtjbzA5cjB6" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
            <img src={`${import.meta.env.BASE_URL}images/social/instagram.svg`} alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
