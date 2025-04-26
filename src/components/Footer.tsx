
import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand and Address */}
          <div className="text-center md:text-left">
            <h3 
              className="text-xl font-bold mb-2"
              style={{
                background: `linear-gradient(to right, #530c2c, #c6576f)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              D Fashions
            </h3>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={18} />
              <span>123 Fashion Street, Style City</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 text-gray-600">
              <Phone size={18} />
              <span>+1 234 567 8900</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail size={18} />
              <span>contact@dfashions.com</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#530c2c] transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#530c2c] transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#530c2c] transition-colors"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} D Fashions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
