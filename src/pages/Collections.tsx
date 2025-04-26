
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

const Collections = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf1f4] to-[#f8e6ea]">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#530c2c]">Our Collections</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Link to="/collections/sarees">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-video bg-[#f8e6ea] rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-2xl text-[#530c2c]">Sarees Collection</p>
                </div>
                <p className="text-gray-600">Discover our elegant collection of traditional and modern sarees</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/collections/kurtas">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-video bg-[#f8e6ea] rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-2xl text-[#530c2c]">Kurtas Collection</p>
                </div>
                <p className="text-gray-600">Explore our beautiful range of kurtas for every occasion</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collections;
