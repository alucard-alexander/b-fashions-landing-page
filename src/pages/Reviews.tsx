
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ReviewsHeader from '@/components/reviews/ReviewsHeader';
import ReviewCard from '@/components/reviews/ReviewCard';
import ReviewForm from '@/components/reviews/ReviewForm';
import testimonials from '@/data/testimonials';

const Reviews = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#fdf1f4] to-[#f8e6ea]">
      <Navigation />
      <div className="flex-grow container mx-auto px-4 py-8">
        <ReviewsHeader />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <ReviewForm />
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
