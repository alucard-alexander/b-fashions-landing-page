
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Star, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'I purchased a Banarasi silk saree for my wedding and was absolutely blown away by the quality. The craftsmanship is exquisite, and the attention to detail in the embroidery is remarkable. The team was also incredibly helpful in helping me select the perfect piece.',
    product: 'Banarasi Silk Wedding Saree',
    date: 'October 15, 2024'
  },
  {
    id: 2,
    name: 'Arjun Patel',
    location: 'Ahmedabad, India',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Ordered a kurta set for my sister's wedding and the quality exceeded my expectations. The fabric is premium and the fit is perfect. Shipping was also faster than expected. Would definitely recommend!',
    product: 'Chanderi Silk Kurta Set',
    date: 'September 22, 2024'
  },
  {
    id: 3,
    name: 'Anjali Reddy',
    location: 'Bangalore, India',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'I've been searching for authentic Kalamkari sarees for years and finally found them at सारीKurta. The natural dyes and traditional patterns are exactly what I was looking for. The customer service was exceptional as well.',
    product: 'Pure Cotton Kalamkari Saree',
    date: 'August 5, 2024'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    location: 'Delhi, India',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'The Anarkali kurta I purchased for my wife was stunning. The embroidery work is intricate and the fabric quality is superior. She received so many compliments at the family gathering!',
    product: 'Embroidered Anarkali Kurta',
    date: 'July 18, 2024'
  },
  {
    id: 5,
    name: 'Lakshmi Iyer',
    location: 'Chennai, India',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'I love the fusion of traditional designs with contemporary styles. The cotton saree I bought is perfect for everyday wear - comfortable and elegant at the same time. The colors are vibrant even after multiple washes.',
    product: 'Contemporary Cotton Saree',
    date: 'June 30, 2024'
  },
  {
    id: 6,
    name: 'Rahul Mehta',
    location: 'Jaipur, India',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'As someone who appreciates traditional craftsmanship, I'm impressed by the quality of the handwoven kurta I received. You can truly feel the difference in texture and comfort compared to mass-produced garments.',
    product: 'Handloom Cotton Kurta',
    date: 'June 12, 2024'
  },
];

const Reviews = () => {
  const { toast } = useToast();

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Review Submitted!",
      description: "Thank you for sharing your feedback with us.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#fdf1f4] to-[#f8e6ea]">
      <Navigation />
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#530c2c]">Customer Reviews</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Hear what our customers have to say about their experiences with सारीKurta
          </p>
          <div className="flex justify-center items-center mt-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                className="w-6 h-6 text-yellow-500 fill-yellow-500" 
              />
            ))}
            <span className="ml-2 text-lg font-semibold text-gray-800">4.8 out of 5</span>
          </div>
          <p className="text-gray-700 mt-1">Based on 243 reviews</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((review) => (
            <div key={review.id} className="bg-white/80 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-500">{review.date}</span>
              </div>
              <p className="text-gray-700 mb-3">{review.text}</p>
              <div className="text-sm text-[#c6576f] font-medium">
                Product: {review.product}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur rounded-lg p-8 shadow-lg mb-16">
          <div className="flex items-center mb-6">
            <MessageSquare className="w-6 h-6 text-[#c6576f] mr-2" />
            <h2 className="text-2xl font-bold text-[#530c2c]">Share Your Experience</h2>
          </div>
          <form onSubmit={handleSubmitReview} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="reviewName" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <Input
                  id="reviewName"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="reviewEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="reviewEmail"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="reviewProduct" className="block text-sm font-medium text-gray-700 mb-1">
                Product Purchased
              </label>
              <Input
                id="reviewProduct"
                placeholder="Which product are you reviewing?"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rating
              </label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="p-1"
                  >
                    <Star className="w-6 h-6 text-gray-300 hover:text-yellow-500 hover:fill-yellow-500" />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700 mb-1">
                Your Review
              </label>
              <Textarea
                id="reviewText"
                placeholder="Share your experience with this product..."
                rows={5}
                required
                className="resize-none"
              />
            </div>
            <Button
              type="submit"
              className="bg-gradient-to-r from-[#530c2c] to-[#c6576f] hover:from-[#3b081f] hover:to-[#a8485d] text-white"
            >
              Submit Review
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
