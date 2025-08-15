import React from 'react';

const WholesaleProducts = () => {
  const products = [
    { name: "WHITE PHENYL 5L", price: 130 },
    { name: "TOILET CLEANER 5L", price: 220 },
    { name: "GLASS CLEANER 5L", price: 220 },
    { name: "FLOOR CLEANER 5L", price: 280 },
    { name: "MULTIPURPOSE 5L", price: 220 },
    { name: "HANDWASH 5L", price: 250 },
    { name: "MOPE CLOTH", price: 30 },
    { name: "DUST CONTROL", price: 260 },
    { name: "HANDMOP", price: 200 },
    { name: "TABLE CLOTH", price: 13 },
    { name: "MICROFIBER CLOTH", price: 80 },
    { name: "SOFT BROOM", price: 90 },
    { name: "HARD BROOM", price: 70 },
    { name: "WIPER 21\"", price: 130 },
    { name: "WIPER 16\"", price: 110 },
    { name: "NAPKINS", price: 25 },
    { name: "TOILET PAPER", price: 18 },
    { name: "TISSUE BOX", price: 40 },
    { name: "GLASS WIPERS", price: 550 },
    { name: "SPRAY BOTTLES", price: 35 },
    { name: "SOAP DISPENSERS", price: 35 },
    { name: "TOILET BRUSH", price: 40 },
    { name: "DUSTPAN", price: 20 },
    { name: "TILE BRUSH", price: 40 },
    { name: "HIT 400ml", price: 180 },
    { name: "ODONIL", price: 40 },
    { name: "ROOM FRESHNER", price: 140 },
    { name: "SANITIZER 5L", price: 550 },
    { name: "GARBAGE BAG", price: 50 },
    { name: "NAPHTHALENE BALLS", price: 35 },
    { name: "BLACK PHENYL GENDA 5L", price: 330 },
    { name: "FOAM SCRUB", price: 15 },
    { name: "WHITE PHENYL GENDA 5L", price: 180 },
    { name: "DETTOL HANDWASH", price: 109 },
    { name: "SAVLON HANDWASH", price: 99 },
    { name: "HARPIC 1L", price: 235 },
    { name: "TRISHUL TOILET CLEANER 1L", price: 170 },
    { name: "COLIN", price: 115 },
    { name: "TRISHUL GLASS CLEANER", price: 90 },
    { name: "LUVLAP BABY WIPES", price: 115 },
    { name: "FENA DETERGENT", price: 71 },
    { name: "ITENS STICKS", price: 50 },
    { name: "TIDE DETERGENT", price: 79 },
    { name: "LIZOL 2L", price: 492 }
  ];

  // Calculate MRP (Wholesale Price + 20%)
  const calculateMRP = (wholesalePrice) => {
    return Math.round(wholesalePrice * 1.2);
  };

  const handleBuyInBulk = (productName) => {
    const message = encodeURIComponent(`Hi! I'm interested in bulk ordering ${productName}. Can you provide more details about quantity discounts and availability?`);
    window.open(`https://wa.me/919557342093?text=${message}`, '_blank');
  };

  return (
    <section className="wholesale-products">
      <div className="container">
        <div className="section-header">
          <h2>Wholesale Products</h2>
          <p>Professional cleaning supplies at wholesale prices for your business needs</p>
        </div>
        
        <div className="products-grid">
          {products.map((product, index) => {
            const mrp = calculateMRP(product.price);
            return (
              <div key={index} className="product-card">
                <div className="product-content">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="pricing">
                    <span className="mrp">₹{mrp}</span>
                    <span className="wholesale-price">₹{product.price}</span>
                  </div>
                  <button 
                    className="buy-bulk-btn"
                    onClick={() => handleBuyInBulk(product.name)}
                  >
                    Buy in Bulk
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="bulk-contact">
          <div className="bulk-info">
            <h3>Need Larger Quantities?</h3>
            <p>Contact us for custom bulk pricing and delivery options</p>
            <a href="tel:+919557342093" className="contact-phone">+91 95573 42093</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WholesaleProducts;
