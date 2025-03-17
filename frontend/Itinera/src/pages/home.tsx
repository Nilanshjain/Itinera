import React from 'react';
import { Navbar } from '../components/navbar';
import { Hero } from '../components/hero';
import { Features } from '../components/features';
import { PopularDestinations } from '../components/popular-destinations';
import { SearchComponent } from '../components/search-component';
import { Testimonials } from '../components/testimonials';
import { Footer } from '../components/footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SearchComponent />
        <PopularDestinations />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage; 