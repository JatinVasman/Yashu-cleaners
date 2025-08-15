import React, { useState, useEffect } from 'react';
import ProductGrid from '../components/products/ProductGrid';
import ProductFilter from '../components/products/ProductFilter';
import { products, categories, searchProducts } from '../data/products';

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentFilters, setCurrentFilters] = useState({
    category: 'all'
  });

  useEffect(() => {
    applyFilters();
  }, [currentFilters, searchQuery]);

  const applyFilters = () => {
    let filtered = [...products];

    // First apply search filter
    if (searchQuery.trim()) {
      filtered = searchProducts(searchQuery);
    }

    // Filter by category
    if (currentFilters.category !== 'all') {
      filtered = filtered.filter(product => product.category === currentFilters.category);
    }

    // Sort products alphabetically by name (default)
    filtered.sort((a, b) => a.name.localeCompare(b.name));

    setFilteredProducts(filtered);
  };

  const handleFilterChange = (filters) => {
    setCurrentFilters(prev => ({
      ...prev,
      ...filters
    }));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="products-page">
      <div className="container">
        <h1>Our Products</h1>
        <p>Discover our complete range of high-quality cleaning solutions.</p>
        
        {/* Search Bar Section */}
        <div className="search-section">
          <div className="search-bar">
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Search products by name, description, or category..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
              />
              {searchQuery && (
                <button onClick={clearSearch} className="clear-search">
                  ×
                </button>
              )}
            </div>
            <div className="search-icon">
              🔍
            </div>
          </div>
          {searchQuery && (
            <div className="search-results-info">
              Showing results for "{searchQuery}"
            </div>
          )}
        </div>
        
        <div className="products-layout">
          <aside className="products-sidebar">
            <ProductFilter
              categories={categories}
              onFilterChange={handleFilterChange}
            />
          </aside>
          
          <main className="products-main">
            <div className="products-header">
              <p>{filteredProducts.length} products found</p>
            </div>
            <ProductGrid products={products} filteredProducts={filteredProducts} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
