
import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, Users, MapPin, Star } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <h1 
              className="text-2xl font-bold"
              style={{
                background: `linear-gradient(to right, #530c2c, #c6576f)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              D Fashions
            </h1>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/collections" className="flex items-center gap-2 text-gray-600 hover:text-[#530c2c]">
              <LayoutGrid size={18} />
              Collections
            </Link>
            <Link to="/about" className="flex items-center gap-2 text-gray-600 hover:text-[#530c2c]">
              <Users size={18} />
              About Us
            </Link>
            <Link to="/contact" className="flex items-center gap-2 text-gray-600 hover:text-[#530c2c]">
              <MapPin size={18} />
              Contact
            </Link>
            <Link to="/reviews" className="flex items-center gap-2 text-gray-600 hover:text-[#530c2c]">
              <Star size={18} />
              Reviews
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
