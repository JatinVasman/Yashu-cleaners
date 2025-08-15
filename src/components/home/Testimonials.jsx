import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Kavita Teotia",
      business: "Homemaker",
      rating: 5,
      text: "Yashu Cleaners ke products use karke lagta hai jaise ghar ne nayi jaan le li ho. Floors itne shiny ho gaye ki apna reflection dekh ke khud surprise ho gayi",
      location: "Bulandshahr",
      image: "/public/images/review/kavita-teotia.jpg"
    },
    {
      id: 2,
      name: "Priya Kumari",
      business: "Homemaker",
      rating: 5,
      text: "Pehle guests aate the toh main pehle hi bol deti thi 'sorry, thoda mess hai'. Ab guests khud bolte hain 'wah, kitna clean hai!'",
      location: "Delhi",
      image: "/public/images/review/priya-kumari.jpg"
    },
    {
      id: 3,
      name: "Harsh Chaudhary",
      business: "Animator",
      rating: 5,
      text: "Bathroom cleaner itna powerful hai ki purane stains bhi chhup nahi paaye. Ab toh lagta hai hotel washroom ka feel aa raha hai",
      location: "Noida",
      image: "/public/images/review/harsh-chaudhary.jpg"
    },
    {
      id: 4,
      name: "Sharma Kiarna Store",
      business: "Shop Keeper",
      rating: 5,
      text: "Yashu Cleaner meri shop ka fast moving product ban gaya hai — halki fragrance aur zabardast safai ki wajah se customers baar-baar lene aate hain.Ek baar try karne ke baad sabki permanent demand ban jaati hai!",
      location: "Bulandshahr",
      image: "/public/images/review/sharma-kiarna-store.jpg"
    },
    {
      id: 5,
      name: "Kharak Gym",
      business: "Gym Owner",
      rating: 5,
      text: "Maine apne gym ki safaai ke liye Yashu Cleaner use karna start kiya hai — floors aur equipment dono ka shine clearly better ho gaya hai.Members bhi cleanliness notice karte hain, isliye ab Yashu Cleaner meri daily maintenance routine ka regular part ban chuka hai.",
      location: "Bulandshahr",
      image: "/public/images/review/kharak-gym.jpg"
    }
  ];

  const renderStars = (rating) => {
    return Array(rating).fill(0).map((_, i) => (
      <span key={i} className="star">⭐</span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="floating-icon test-icon-1">🧽</div>
      <div className="floating-icon test-icon-2">🧴</div>
      <div className="floating-icon test-icon-3">🧹</div>
      
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>What Our Customers Say</h2>
          <p>Trusted by businesses across India for quality cleaning solutions</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-image">
                {testimonial.image ? (
                  <img src={testimonial.image} alt={testimonial.name} className="customer-image" />
                ) : (
                  <div className="image-placeholder">
                    <span>👤</span>
                    <p>Image space ready</p>
                  </div>
                )}
              </div>
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-business">{testimonial.business}</p>
                  <p className="author-location">📍 {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
