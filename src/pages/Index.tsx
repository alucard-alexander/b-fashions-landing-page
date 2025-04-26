
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
    <div className="min-h-screen bg-gradient-to-br from-[#fdf1f4] to-[#f8e6ea] flex flex-col">
      <Navigation />
      <HeroBanner />
      <CategorySection />
      <FeaturedCollections />
      <CollectionTypes />
      <CustomerReviews />
      <QualityPromise />
      <Footer />
    </div>
  );
};

export default Index;
