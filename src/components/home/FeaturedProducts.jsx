import React from 'react';
import ProductCard from '../products/ProductCard';

const FeaturedProducts = ({ products }) => {
  const featuredProducts = products?.slice(0, 6) || [];

  return (
    <section className="featured-products">
      <div className="hero-background">
        <div className="floating-icon icon-1">🧽</div>
        <div className="floating-icon icon-2">🧴</div>
        <div className="floating-icon icon-3">🧹</div>
        <div className="floating-icon icon-4">🧼</div>
        <div className="floating-icon icon-5">🧽</div>
        <div className="floating-icon icon-6">🧴</div>
      </div>
      <div className="container">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
