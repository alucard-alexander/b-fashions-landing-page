
import React from 'react';
import { Mail } from 'lucide-react';

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
        
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto">
          <p className="text-gray-600 mb-4">
            Be the first to know when we launch
          </p>
          
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-4 py-2 focus:outline-none"
            />
            <button 
              className="bg-[#530c2c] text-white px-4 py-2 hover:bg-[#c6576f] transition-colors"
            >
              <Mail size={20} />
            </button>
          </div>
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
