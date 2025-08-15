import React from 'react';
import Hero from '../components/ui/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Testimonials from '../components/home/Testimonials';
import { products } from '../data/products';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <FeaturedProducts products={products} />
      <Testimonials />
    </div>
  );
};

export default Home;
