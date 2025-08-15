import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeaderOffset = () => {
      const el = document.querySelector('.header');
      if (el) {
        const height = el.getBoundingClientRect().height;
        document.documentElement.style.setProperty('--header-height', `${Math.ceil(height)}px`);
      }
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      updateHeaderOffset();
    };

    // Run on mount and on resize to keep padding in sync with header size
    updateHeaderOffset();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateHeaderOffset);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeaderOffset);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={`${import.meta.env.BASE_URL}images/logo/WebLogo.jpg`} alt="Yashu Cleaners" className="logo-image" />
          </a>
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
