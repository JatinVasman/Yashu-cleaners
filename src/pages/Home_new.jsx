import React from 'react';
import Hero from '../components/ui/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import { products } from '../data/products';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <FeaturedProducts products={products} />
    </div>
  );
};

export default Home;
