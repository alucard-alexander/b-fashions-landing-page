
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const collections = [
  {
    id: 'sarees',
    name: 'Sarees Collection',
    description: 'Discover our elegant collection of traditional and modern sarees',
    images: ['traditional', 'wedding', 'casual']
  },
  {
    id: 'kurtas',
    name: 'Kurtas Collection',
    description: 'Explore our beautiful range of kurtas for every occasion',
    images: ['formal', 'casual', 'party']
  },
  {
    id: 'wedding',
    name: 'Wedding Collection',
    description: 'Stunning attire for your special day',
    images: ['bride', 'ceremony', 'reception']
  },
  {
    id: 'festival',
    name: 'Festival Collection',
    description: 'Celebrate traditions in style',
    images: ['diwali', 'holi', 'navratri']
  },
  {
    id: 'office',
    name: 'Office Collection',
    description: 'Elegant ethnic wear for work',
    images: ['formal', 'meeting', 'conference']
  }
];

const Collections = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#fdf1f4] to-[#f8e6ea]">
      <Navigation />
      <div className="container mx-auto px-4 py-16 flex-grow">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-[#530c2c]">Our Collections</h1>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Explore our curated collections of premium ethnic wear, designed with attention to tradition and crafted for the modern woman.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {collections.map((collection) => (
            <Link to={`/collections/${collection.id}`} key={collection.id}>
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#f8e6ea] to-[#fdf1f4] flex items-center justify-center">
                    <p className="text-2xl text-[#530c2c] font-medium">{collection.name}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{collection.description}</p>
                    <div className="flex items-center text-[#530c2c] font-medium group-hover:translate-x-1 transition-transform">
                      View Collection <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collections;
