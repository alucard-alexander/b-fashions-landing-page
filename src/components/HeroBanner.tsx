
import React from 'react';
import { Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center flex flex-col items-center justify-center flex-grow">
      <div className="max-w-2xl">
        <h1 
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{
            background: `linear-gradient(to right, #530c2c, #c6576f)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          D Fashions
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Elegant Sarees & Kurtas - Coming Soon
        </p>
        
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-md mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Timer className="w-6 h-6 mr-2 text-[#530c2c]" />
            <h2 className="text-xl font-semibold text-[#530c2c]">Coming Soon</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            Our online shopping experience is being crafted with care and will be available soon. 
            We're excited to bring you the finest collection of traditional Indian wear.
          </p>
          
          <Button 
            className="w-full bg-gradient-to-r from-[#530c2c] to-[#c6576f] hover:from-[#3b081f] hover:to-[#a8485d] text-white py-3"
            disabled
          >
            Online Shopping Coming Soon
          </Button>
          
          <p className="mt-4 text-sm text-gray-500">
            Follow us on social media for updates
          </p>
        </div>
        
        <div className="mt-12 text-sm text-gray-500">
          <p>📦 Nationwide Shipping</p>
          <p>🚚 Quality Guaranteed</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
