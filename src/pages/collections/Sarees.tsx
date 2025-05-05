
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';

const featuredSarees = [
  {
    id: 1,
    name: 'Banarasi Silk Wedding Saree',
    price: 15999,
    originalPrice: 19999,
    discount: '20% OFF',
    description: 'Luxurious Banarasi silk saree with rich golden zari work and intricate borders',
    tags: ['Wedding', 'Premium']
  },
  {
    id: 2,
    name: 'Pure Cotton Kalamkari Saree',
    price: 3999,
    originalPrice: 4599,
    discount: '13% OFF',
    description: 'Handcrafted Kalamkari saree with traditional motifs on pure cotton fabric',
    tags: ['Casual', 'Handloom']
  },
  {
    id: 3,
    name: 'Designer Party Wear Saree',
    price: 12999,
    originalPrice: 16999,
    discount: '24% OFF',
    description: 'Contemporary designer saree with modern embellishments perfect for parties',
    tags: ['Party Wear', 'Designer']
  }
];

const sareeProducts = [
  {
    id: 4,
    name: 'Kanjivaram Silk Saree',
    price: 18999,
    originalPrice: 23999,
    discount: '21% OFF',
    description: 'Traditional Kanjivaram silk saree with temple border and vibrant colors',
    tags: ['Wedding', 'Premium']
  },
  {
    id: 5,
    name: 'Linen Handloom Saree',
    price: 4999,
    originalPrice: 5999,
    discount: '17% OFF',
    description: 'Lightweight linen saree with contemporary stripe patterns, perfect for summers',
    tags: ['Casual', 'Handloom']
  },
  {
    id: 6,
    name: 'Chiffon Printed Saree',
    price: 2499,
    originalPrice: 2999,
    discount: '17% OFF',
    description: 'Elegant chiffon saree with modern prints and easy-to-drape fabric',
    tags: ['Casual', 'Everyday']
  },
  {
    id: 7,
    name: 'Tussar Silk Embroidered Saree',
    price: 8999,
    originalPrice: 11999,
    discount: '25% OFF',
    description: 'Rich tussar silk saree with detailed hand embroidery and festive appeal',
    tags: ['Festival', 'Premium']
  },
  {
    id: 8,
    name: 'Organza Floral Saree',
    price: 7499,
    originalPrice: 8999,
    discount: '17% OFF',
    description: 'Lightweight organza saree with delicate floral embroidery and scalloped border',
    tags: ['Party Wear', 'Designer']
  },
  {
    id: 9,
    name: 'Cotton Silk Saree',
    price: 3999,
    originalPrice: 4499,
    discount: '11% OFF',
    description: 'Comfortable cotton silk blend with traditional temple border design',
    tags: ['Casual', 'Everyday']
  }
];

const Sarees = () => {
  const isMobile = useIsMobile();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const filteredProducts = activeFilter === 'All' 
    ? sareeProducts 
    : sareeProducts.filter(product => product.tags.includes(activeFilter));

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#fdf1f4] to-[#f8e6ea]">
      <Navigation />
      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#530c2c]">Sarees Collection</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our exquisite collection of traditional and contemporary sarees crafted from premium fabrics and designed with meticulous attention to detail.
          </p>
        </div>

        {/* Featured Sarees Carousel */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#530c2c]">Featured Sarees</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {featuredSarees.map((saree) => (
                <CarouselItem key={saree.id} className={isMobile ? "basis-full" : "basis-1/2 lg:basis-1/3"}>
                  <div className="p-1">
                    <Card className="relative group overflow-hidden">
                      <Badge className="absolute top-2 right-2 bg-[#530c2c] z-10">
                        {saree.discount}
                      </Badge>
                      <div className="absolute top-2 left-2 z-10">
                        <Button size="icon" variant="ghost" className="rounded-full bg-white/80 hover:bg-white">
                          <Heart className="size-4" />
                        </Button>
                      </div>
                      <div className="h-60 sm:h-72 bg-[#f8e6ea] relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-xl text-[#530c2c]/70">Featured Image</p>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{saree.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{saree.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {saree.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-[#f8e6ea] text-[#530c2c]">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-xl font-bold">₹{saree.price.toLocaleString()}</p>
                            <p className="text-sm text-gray-500 line-through">₹{saree.originalPrice.toLocaleString()}</p>
                          </div>
                          <Button size="sm">
                            <ShoppingCart className="mr-2" size={16} />
                            Add to Cart
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-4 bg-white" />
              <CarouselNext className="-right-4 bg-white" />
            </div>
          </Carousel>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button 
            variant={activeFilter === 'All' ? "default" : "outline"} 
            className={`rounded-full ${activeFilter === 'All' ? 'bg-[#530c2c]' : ''}`}
            onClick={() => handleFilterClick('All')}
          >
            All Sarees
          </Button>
          <Button 
            variant={activeFilter === 'Wedding' ? "default" : "outline"} 
            className={`rounded-full ${activeFilter === 'Wedding' ? 'bg-[#530c2c]' : ''}`}
            onClick={() => handleFilterClick('Wedding')}
          >
            Wedding
          </Button>
          <Button 
            variant={activeFilter === 'Casual' ? "default" : "outline"} 
            className={`rounded-full ${activeFilter === 'Casual' ? 'bg-[#530c2c]' : ''}`}
            onClick={() => handleFilterClick('Casual')}
          >
            Casual
          </Button>
          <Button 
            variant={activeFilter === 'Party Wear' ? "default" : "outline"} 
            className={`rounded-full ${activeFilter === 'Party Wear' ? 'bg-[#530c2c]' : ''}`}
            onClick={() => handleFilterClick('Party Wear')}
          >
            Party Wear
          </Button>
          <Button 
            variant={activeFilter === 'Handloom' ? "default" : "outline"} 
            className={`rounded-full ${activeFilter === 'Handloom' ? 'bg-[#530c2c]' : ''}`}
            onClick={() => handleFilterClick('Handloom')}
          >
            Handloom
          </Button>
        </div>
        
        {/* Saree Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((saree) => (
              <Card key={saree.id} className="relative group overflow-hidden">
                <Badge className="absolute top-2 right-2 bg-[#530c2c] z-10">
                  {saree.discount}
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
                  <CardTitle className="text-lg">{saree.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{saree.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {saree.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-[#f8e6ea] text-[#530c2c]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xl font-bold">₹{saree.price.toLocaleString()}</p>
                      <p className="text-sm text-gray-500 line-through">₹{saree.originalPrice.toLocaleString()}</p>
                    </div>
                    <Button size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ShoppingCart className="mr-2" size={16} />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-lg text-gray-600">No products found matching the selected filter.</p>
              <Button 
                variant="outline" 
                className="mt-4" 
                onClick={() => handleFilterClick('All')}
              >
                View All Sarees
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sarees;
