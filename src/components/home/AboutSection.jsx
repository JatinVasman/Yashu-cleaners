import React, { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    products: 0,
    satisfaction: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const aboutRef = useRef(null);

  const statistics = [
    { key: 'years', label: 'Years of Excellence', value: 20, suffix: '+' },
    { key: 'clients', label: 'Happy Clients', value: 500, suffix: '+' },
    { key: 'products', label: 'Quality Products', value: 40, suffix: '+' },
    { key: 'satisfaction', label: 'Client Satisfaction', value: 99, suffix: '%' }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Hotel Maharaja Palace",
      text: "Yashu Cleaners has been our trusted partner for 5 years. Their consistent quality and reliable service help us maintain our hotel's high standards.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Sharma Restaurant Chain",
      text: "The bulk pricing and quality products from Yashu Cleaners have significantly improved our operations. Highly recommended for businesses!",
      rating: 5
    },
    {
      name: "Amit Patel",
      company: "Office Complex Manager",
      text: "Professional service, transparent pricing, and excellent product quality. Yashu Cleaners understands business needs perfectly.",
      rating: 5
    }
  ];

  const timeline = [
    { year: '2005', title: 'Humble Beginnings', description: 'Founded as local cleaning supplies provider with focus on quality' },
    { year: '2010', title: 'Business Growth', description: 'Expanded to serve 100+ businesses across the region' },
    { year: '2015', title: 'Digital Innovation', description: 'Introduced online catalog and streamlined bulk ordering system' },
    { year: '2020', title: 'Pandemic Adaptation', description: 'Adapted for hygiene-focused post-pandemic business needs' },
    { year: '2025', title: 'Industry Leader', description: 'Serving 500+ clients with 40+ premium product range' }
  ];

  const values = [
    {
      icon: '💎',
      title: 'Transparency',
      description: 'Clear pricing with no hidden costs. What you see is what you pay, building trust through honesty.'
    },
    {
      icon: '🛡️',
      title: 'Reliability',
      description: 'Consistent quality and on-time delivery. Your business can count on us every single time.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'Long-term business relationships built on mutual trust, growth, and shared success.'
    }
  ];

  const differentiators = [
    {
      icon: '⭐',
      title: 'Premium Quality',
      description: 'Only the finest cleaning products that deliver exceptional results for your business.',
      highlight: 'Quality Assured'
    },
    {
      icon: '💰',
      title: 'Competitive Pricing',
      description: 'Best value for money with transparent bulk pricing and no hidden charges.',
      highlight: '18% GST Included'
    },
    {
      icon: '🚀',
      title: 'Expert Service',
      description: 'Professional guidance and prompt customer support for all your cleaning needs.',
      highlight: '24/7 Support'
    }
  ];

  // Animate counters when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    statistics.forEach(stat => {
      let current = 0;
      const increment = stat.value / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [stat.key]: Math.floor(current)
        }));
      }, 30);
    });
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleContactPartnership = () => {
    const message = encodeURIComponent("Hi! I'm interested in discussing a business partnership with Yashu Cleaners. Can we schedule a meeting?");
    window.open(`https://wa.me/919557342093?text=${message}`, '_blank');
  };

  return (
    <section className="about-section" ref={aboutRef}>
      {/* Hero About */}
      <div className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-text">
              <h2>About Yashu Cleaners</h2>
              <h3>Two Decades of Cleaning Excellence</h3>
              <p>
                Since 2005, Yashu Cleaners has been the trusted partner for businesses 
                seeking premium cleaning solutions. What started as a local supplier has 
                grown into a leading provider serving 500+ clients across the region.
              </p>
              <p>
                Our commitment to quality, transparency, and long-term partnerships has 
                made us the preferred choice for hotels, restaurants, offices, and 
                commercial establishments nationwide.
              </p>
            </div>
            <div className="about-hero-image">
              <img src="/images/logo/WebLogo.jpg" alt="Yashu Cleaners Founder" />
              <div className="founder-info">
                <h4>Founded with Vision</h4>
                <p>Committed to excellence since day one</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Differentiators */}
      <div className="differentiators-section">
        <div className="container">
          <h2>Why Businesses Choose Us</h2>
          <div className="differentiators-grid">
            {differentiators.map((item, index) => (
              <div key={index} className="differentiator-card">
                <div className="diff-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="highlight-badge">{item.highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="statistics-section">
        <div className="container">
          <h2>Our Impact in Numbers</h2>
          <div className="stats-grid">
            {statistics.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">
                  {counters[stat.key]}{stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="timeline-section">
        <div className="container">
          <h2>Our Journey of Growth</h2>
          <div className="timeline">
            {timeline.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-carousel">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-mark">"</div>
                <p>{testimonials[currentTestimonial].text}</p>
                <div className="testimonial-author">
                  <h4>{testimonials[currentTestimonial].name}</h4>
                  <span>{testimonials[currentTestimonial].company}</span>
                  <div className="rating">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="trust-section">
        <div className="container">
          <h2>Your Trusted Business Partner</h2>
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon">📋</div>
              <h3>GST Registered</h3>
              <p>Fully compliant business with proper documentation</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🏆</div>
              <h3>Certified Quality</h3>
              <p>All products meet industry standards and certifications</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">📞</div>
              <h3>Verified Contact</h3>
              <p>Accessible business with verified phone and address</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">⭐</div>
              <h3>Proven Track Record</h3>
              <p>20 years of consistent service and client satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="partnership-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Partner with Us?</h2>
            <p>Join 500+ satisfied businesses who trust Yashu Cleaners for their cleaning needs</p>
            <div className="cta-buttons">
              <button onClick={handleContactPartnership} className="cta-primary">
                Discuss Partnership
              </button>
              <a href="tel:+919557342093" className="cta-secondary">
                Call Now: +91 95573 42093
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
