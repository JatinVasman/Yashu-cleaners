import React, { useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import WhatsAppChat from './components/ui/WhatsAppChat';
import ScrollToTop from './components/ui/ScrollToTop';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import './styles/globals.css';
import './styles/components.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'products':
        return <Products />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  // Simple routing without React Router (for basic setup)
  React.useEffect(() => {
    const handleNavigation = (e) => {
      const anchor = e.target.closest && e.target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;

      // Only intercept internal app links (e.g., "/", "/products", "/contact")
      if (href.startsWith('/')) {
        e.preventDefault();
        const page = href.slice(1) || 'home';
        setCurrentPage(page);
        window.history.pushState(null, '', href);
      }
      // Do not prevent default for mailto:, tel:, http(s): or other protocols
    };

    document.addEventListener('click', handleNavigation);

    // Handle browser back/forward buttons
    const handlePopState = () => {
      const path = window.location.pathname.slice(1) || 'home';
      setCurrentPage(path);
    };

    window.addEventListener('popstate', handlePopState);

    // Set initial page based on URL
    const initialPath = window.location.pathname.slice(1) || 'home';
    setCurrentPage(initialPath);

    return () => {
      document.removeEventListener('click', handleNavigation);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <WhatsAppChat />
  <ScrollToTop />
    </div>
  );
}

export default App;
