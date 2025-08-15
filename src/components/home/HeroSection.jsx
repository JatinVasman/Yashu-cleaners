import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Premium Cleaning Solutions</h1>
        <p>Discover our range of high-quality cleaning products. Visit our store for offline purchases.</p>
        <button className="cta-button">View Products</button>
      </div>
      <div className="hero-image">
        <img src="/images/hero/hero-image.jpg" alt="Cleaning Products" />
      </div>
    </section>
  );
};

export default HeroSection;
