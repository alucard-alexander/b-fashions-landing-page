
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const products = [
  {
    id: 1,
    name: 'Banarasi Silk Wedding Saree',
    price: 15999,
    originalPrice: 19999,
    discount: '20% OFF',
    type: 'saree',
  },
  {
    id: 2,
    name: 'Chanderi Silk Kurta Set',
    price: 5999,
    originalPrice: 7499,
    discount: '20% OFF',
    type: 'kurta',
  },
  {
    id: 3,
    name: 'Pure Cotton Kalamkari Saree',
    price: 3999,
    originalPrice: 4599,
    discount: '13% OFF',
    type: 'saree',
  },
  {
    id: 4,
    name: 'Embroidered Anarkali Kurta',
    price: 8999,
    originalPrice: 11999,
    discount: '25% OFF',
    type: 'kurta',
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-16 container mx-auto px-4 bg-white/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#530c2c] mb-4">Featured Collections</h2>
        <p className="text-gray-600">Discover our curated selection of premium ethnic wear</p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="relative group">
            <Badge className="absolute top-2 right-2 bg-[#530c2c]">
              {product.discount}
            </Badge>
            <CardHeader>
              <div className="h-48 bg-gray-100 rounded-t-lg mb-4"></div>
              <CardTitle className="text-lg">{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-xl font-bold">₹{product.price.toLocaleString()}</p>
                  <p className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</p>
                </div>
                <Button size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingCart className="mr-2" size={16} />
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Button variant="outline" asChild>
          <Link to="/collections">View All Collections</Link>
        </Button>
      </div>
    </section>
  );
};

export default FeaturedCollections;
