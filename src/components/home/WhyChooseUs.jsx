import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Premium Quality",
      description: "Only the finest cleaning products that deliver exceptional results.",
      icon: "🌟"
    },
    {
      title: "Eco-Friendly",
      description: "Environmentally safe products that protect your family and the planet.",
      icon: "🌱"
    },
    {
      title: "Fast Delivery",
      description: "Quick and reliable delivery to your doorstep within 24-48 hours.",
      icon: "🚚"
    },
    {
      title: "Expert Support",
      description: "Professional guidance and customer support whenever you need it.",
      icon: "💬"
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2>Why Choose Yashu Cleaners?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
