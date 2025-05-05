
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './ui/carousel';
import { AspectRatio } from './ui/aspect-ratio';
import { Skeleton } from './ui/skeleton';

const products = [
  {
    id: 1,
    name: 'Banarasi Silk Wedding Saree',
    price: 15999,
    originalPrice: 19999,
    discount: '20% OFF',
    type: 'saree',
    featured: true,
  },
  {
    id: 2,
    name: 'Chanderi Silk Kurta Set',
    price: 5999,
    originalPrice: 7499,
    discount: '20% OFF',
    type: 'kurta',
    featured: true,
  },
  {
    id: 3,
    name: 'Pure Cotton Kalamkari Saree',
    price: 3999,
    originalPrice: 4599,
    discount: '13% OFF',
    type: 'saree',
    featured: true,
  },
  {
    id: 4,
    name: 'Embroidered Anarkali Kurta',
    price: 8999,
    originalPrice: 11999,
    discount: '25% OFF',
    type: 'kurta',
    featured: true,
  },
  {
    id: 5,
    name: 'Kanjeevaram Silk Saree',
    price: 12999,
    originalPrice: 16999,
    discount: '23% OFF',
    type: 'saree',
    featured: true,
  },
  {
    id: 6,
    name: 'Jacquard Woven Kurta Set',
    price: 4599,
    originalPrice: 5999,
    discount: '23% OFF',
    type: 'kurta',
    featured: true,
  },
  {
    id: 7,
    name: 'Organza Embroidered Saree',
    price: 6999,
    originalPrice: 8499,
    discount: '18% OFF',
    type: 'saree',
    featured: false,
  },
  {
    id: 8,
    name: 'Sequin Embellished Kurta',
    price: 7299,
    originalPrice: 9999,
    discount: '27% OFF',
    type: 'kurta',
    featured: false,
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-12 md:py-16 bg-white/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl font-bold text-[#530c2c] mb-4">Featured Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our curated selection of premium ethnic wear, handpicked for unmatched quality and design</p>
        </div>
        
        {/* Mobile view - simple grid */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Desktop view - carousel */}
        <div className="hidden md:block">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-4 md:basis-1/3 lg:basis-1/4">
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white" />
            <CarouselNext className="right-4 bg-white" />
          </Carousel>
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" asChild className="px-6">
            <Link to="/collections" className="flex items-center gap-2">
              View All Collections <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice: number;
    discount: string;
    type: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => (
  <Card className="relative group hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
    <Badge className="absolute top-2 right-2 bg-[#530c2c] z-10">
      {product.discount}
    </Badge>
    <CardHeader className="p-0">
      <AspectRatio ratio={1 / 1} className="bg-gray-100">
        <Skeleton className="w-full h-full" />
      </AspectRatio>
    </CardHeader>
    <CardContent className="p-4">
      <CardTitle className="text-base font-medium line-clamp-2 mb-2 h-12">{product.name}</CardTitle>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-bold text-[#530c2c]">₹{product.price.toLocaleString()}</p>
          <p className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</p>
        </div>
        <Button size="sm" variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity">
          <ShoppingCart className="mr-2" size={16} />
          Add
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default FeaturedCollections;
