import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleViewProducts = () => {
    // Navigate to products page using the app's routing system
    const link = document.createElement('a');
    link.href = '/products';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGetQuote = () => {
    // Open WhatsApp or navigate to contact
    const message = encodeURIComponent("Hi! I'm interested in bulk orders for my business. Can you provide a quote?");
    window.open(`https://wa.me/919557342093?text=${message}`, '_blank');
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="floating-icon icon-1">🧽</div>
        <div className="floating-icon icon-2">🧴</div>
        <div className="floating-icon icon-3">🧹</div>
        <div className="floating-icon icon-4">🧼</div>
        <div className="floating-icon icon-5">🧽</div>
        <div className="floating-icon icon-6">🧴</div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <div className={`hero-headline ${isVisible ? 'animate-in' : ''}`}>
              <h1>
                <span className="line-1">Stay fresh, stay clean…</span>
                <span className="line-2 highlight">because germs</span>
                <span className="line-3">don't take</span>
                <span className="line-4">holidays</span>
              </h1>
            </div>
          </div>
          
          <div className="hero-right">
            <div className={`hero-subtext ${isVisible ? 'animate-in' : ''}`}>
              <p className="hero-description">
                Your one-stop solution for all professional cleaning needs. 
                From premium cleaning liquids to essential tools, we provide 
                everything your business requires to maintain the highest 
                standards of cleanliness and hygiene.
              </p>
              
              <div className="product-categories">
                <span className="category">Liquids</span>
                <span className="separator">•</span>
                <span className="category">Tools</span>
                <span className="separator">•</span>
                <span className="category">Essentials</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`hero-actions ${isVisible ? 'animate-in' : ''}`}>
          <button 
            onClick={handleViewProducts}
            className="cta-primary"
          >
            View Products
          </button>
          <button 
            onClick={handleGetQuote}
            className="cta-secondary"
          >
            Get Bulk Quote
          </button>
        </div>
        
        <div className="hero-contact-info">
          <div className="contact-item">
            <span className="contact-label">Call for Orders:</span>
            <a href="tel:+919557342093" className="contact-link">+91 95573 42093</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
