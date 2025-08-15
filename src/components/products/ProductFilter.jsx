import React, { useState, useEffect, useRef } from 'react';

const ProductFilter = ({ categories, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCategoryDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsCategoryDropdownOpen(false);
    onFilterChange && onFilterChange({ category });
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  const getCategoryDisplayName = (category) => {
    return category === 'all' ? 'All Categories' : category;
  };

  return (
    <div className="product-filter">
      <div className="filter-section">
        <h3>Categories</h3>
        <div className="category-dropdown" ref={dropdownRef}>
          <button 
            className="category-dropdown-toggle"
            onClick={toggleCategoryDropdown}
            aria-expanded={isCategoryDropdownOpen}
          >
            <span>{getCategoryDisplayName(selectedCategory)}</span>
            <span className={`dropdown-arrow ${isCategoryDropdownOpen ? 'open' : ''}`}>
              ▼
            </span>
          </button>
          
          {isCategoryDropdownOpen && (
            <div className="category-dropdown-menu">
              <div className="category-options-scroll">
                <button
                  className={`category-option ${selectedCategory === 'all' ? 'active' : ''}`}
                  onClick={() => handleCategoryChange('all')}
                >
                  All Categories
                </button>
                {categories?.map(category => (
                  <button
                    key={category}
                    className={`category-option ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
