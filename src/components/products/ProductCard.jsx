import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-details">
          <span className="product-category">{product.category}</span>
          <span className="product-price">₹{product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
