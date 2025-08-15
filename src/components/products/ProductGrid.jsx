import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, filteredProducts }) => {
  const displayProducts = filteredProducts || products || [];

  return (
    <div className="product-grid">
      {displayProducts.length > 0 ? (
        displayProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="no-products">
          <p>No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
