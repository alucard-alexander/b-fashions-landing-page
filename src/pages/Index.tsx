
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroBanner from '@/components/HeroBanner';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf1f4] to-[#f8e6ea] flex flex-col">
      <Navigation />
      <HeroBanner />
      <Footer />
    </div>
  );
};

export default Index;
