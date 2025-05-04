
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GoogleMap from '@/components/GoogleMap';
import { MapPin, Users } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#fdf1f4] to-[#f8e6ea]">
      <Navigation />
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#530c2c]">About सारीKurta</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover our journey of bringing traditional Indian craftsmanship to the modern world
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#530c2c] flex items-center">
              <Users className="mr-2" /> Our Story
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-4">
                Founded in 2015, सारीKurta began with a simple vision: to celebrate and preserve the rich 
                tradition of Indian textiles while making them accessible to the modern consumer.
              </p>
              <p className="mb-4">
                Our founder, Meera Sharma, grew up watching her grandmother weave intricate patterns 
                on traditional looms in a small village in Rajasthan. This early exposure to craftsmanship 
                ignited a passion that would later become सारीKurta.
              </p>
              <p className="mb-4">
                Today, we work directly with over 200 artisan families across India, bringing their 
                exceptional creations to customers worldwide while ensuring fair compensation and 
                sustainable practices.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1531884070720-875c7622d4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Artisan weaving a traditional saree"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1603031456824-f29c8e3c1921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Traditional Indian garments displayed in our store"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-[#530c2c]">Our Mission</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-4">
                At सारीKurta, we believe that traditional craftsmanship doesn't have to be at odds 
                with modern design sensibilities. Our mission is to bridge this gap, creating pieces 
                that honor age-old techniques while appealing to contemporary aesthetics.
              </p>
              <p className="mb-4">
                We are committed to:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>Preserving traditional Indian textile arts</li>
                <li>Supporting artisan communities through fair trade practices</li>
                <li>Creating sustainable, timeless garments that reduce fashion waste</li>
                <li>Bringing the rich heritage of Indian craftsmanship to a global audience</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#530c2c] flex items-center justify-center">
            <MapPin className="mr-2" /> Visit Our Flagship Store
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Experience our collections in person at our flagship store in Delhi
          </p>
          <GoogleMap />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
