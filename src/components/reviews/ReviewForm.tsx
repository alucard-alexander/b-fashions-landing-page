
import React, { useState } from "react";
import { MessageSquare, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const ReviewForm = () => {
  const { toast } = useToast();
  const [rating, setRating] = useState(0);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Review Submitted!",
      description: "Thank you for sharing your feedback with us.",
    });
  };

  return (
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
                onClick={() => setRating(star)}
              >
                <Star 
                  className={`w-6 h-6 ${
                    star <= rating 
                      ? "text-yellow-500 fill-yellow-500" 
                      : "text-gray-300 hover:text-yellow-500 hover:fill-yellow-500"
                  }`} 
                />
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
  );
};

export default ReviewForm;
