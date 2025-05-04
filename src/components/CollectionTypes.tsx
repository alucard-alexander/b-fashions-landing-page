
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const collections = [
  {
    id: 'wedding',
    title: 'Wedding Collection',
    description: 'Stunning attire for your special day',
  },
  {
    id: 'festival',
    title: 'Festival Collection',
    description: 'Celebrate traditions in style',
  },
  {
    id: 'office',
    title: 'Office Collection',
    description: 'Elegant ethnic wear for work',
  },
];

const CollectionTypes = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#530c2c]">Explore Our Collections</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <Card 
            key={collection.title} 
            className="bg-white/80 backdrop-blur hover:shadow-lg transition-shadow h-full"
          >
            <CardHeader>
              <CardTitle>{collection.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-full">
              <p className="text-gray-600 mb-6 flex-grow">{collection.description}</p>
              <Button variant="outline" asChild className="w-full sm:w-auto mt-auto">
                <Link to={`/collections/${collection.id}`} className="flex items-center justify-center">
                  View Collection <ChevronRight className="ml-1" size={16} />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CollectionTypes;
