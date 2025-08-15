import React from 'react';
import ProductCard from './ProductCard';

const CategorySection = ({ category, products }) => {
  const categoryProducts = products?.filter(product => product.category === category) || [];

  if (categoryProducts.length === 0) {
    return null;
  }

  return (
    <section className="category-section">
      <div className="container">
        <h2>{category}</h2>
        <div className="category-grid">
          {categoryProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
