
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const kurtaProducts = [
  {
    id: 1,
    name: 'Chanderi Silk Kurta Set',
    price: 5999,
    originalPrice: 7499,
    discount: '20% OFF',
    description: 'Elegant Chanderi silk kurta with intricate embroidery and matching palazzo pants',
    tags: ['New Arrival', 'Premium']
  },
  {
    id: 2,
    name: 'Embroidered Anarkali Kurta',
    price: 8999,
    originalPrice: 11999,
    discount: '25% OFF',
    description: 'Beautiful anarkali kurta with detailed embroidery and flared silhouette',
    tags: ['Bestseller']
  },
  {
    id: 3,
    name: 'Cotton Straight Cut Kurta',
    price: 2999,
    originalPrice: 3499,
    discount: '14% OFF',
    description: 'Comfortable cotton kurta with minimal design, perfect for everyday wear',
    tags: ['Casual']
  },
  {
    id: 4,
    name: 'Silk Jacquard Kurta Set',
    price: 7499,
    originalPrice: 8999,
    discount: '17% OFF',
    description: 'Luxurious silk jacquard kurta with golden detailing and matching pants',
    tags: ['Wedding']
  },
  {
    id: 5,
    name: 'Printed Cotton Kurta',
    price: 2499,
    originalPrice: 2999,
    discount: '17% OFF',
    description: 'Vibrant printed cotton kurta with stylish neck design and side slits',
    tags: ['Casual']
  },
  {
    id: 6,
    name: 'Designer Party Wear Kurta',
    price: 9999,
    originalPrice: 12999,
    discount: '23% OFF',
    description: 'Designer party wear kurta with heavy embellishments and contemporary styling',
    tags: ['Party Wear', 'Premium']
  }
];

const Kurtas = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#fdf1f4] to-[#f8e6ea]">
      <Navigation />
      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#530c2c]">Kurtas Collection</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our exquisite range of kurtas blending traditional craftsmanship with contemporary designs for every occasion.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button variant="outline" className="rounded-full">All Kurtas</Button>
          <Button variant="outline" className="rounded-full">Casual</Button>
          <Button variant="outline" className="rounded-full">Party Wear</Button>
          <Button variant="outline" className="rounded-full">Wedding</Button>
          <Button variant="outline" className="rounded-full">Premium</Button>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {kurtaProducts.map((product) => (
            <Card key={product.id} className="relative group overflow-hidden">
              <Badge className="absolute top-2 right-2 bg-[#530c2c] z-10">
                {product.discount}
              </Badge>
              <div className="absolute top-2 left-2 z-10">
                <Button size="icon" variant="ghost" className="rounded-full bg-white/80 hover:bg-white">
                  <Heart className="size-4" />
                </Button>
              </div>
              <div className="h-60 sm:h-72 bg-[#f8e6ea] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xl text-[#530c2c]/70">Product Image</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent h-24 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-[#f8e6ea] text-[#530c2c]">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
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
      </div>
      <Footer />
    </div>
  );
};

export default Kurtas;
