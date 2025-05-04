
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroBanner from '@/components/HeroBanner';
import Footer from '@/components/Footer';
import FeaturedCollections from '@/components/FeaturedCollections';
import CategorySection from '@/components/CategorySection';
import CollectionTypes from '@/components/CollectionTypes';
import CustomerReviews from '@/components/CustomerReviews';
import QualityPromise from '@/components/QualityPromise';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#fdf1f4] to-[#f8e6ea]">
      <Navigation />
      <div className="flex-grow">
        <CategorySection />
        <FeaturedCollections />
        <CollectionTypes />
        <CustomerReviews />
        <QualityPromise />
        <HeroBanner />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
