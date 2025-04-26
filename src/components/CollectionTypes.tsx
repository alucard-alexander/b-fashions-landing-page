
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const collections = [
  {
    title: 'Wedding Collection',
    description: 'Stunning attire for your special day',
  },
  {
    title: 'Festival Collection',
    description: 'Celebrate traditions in style',
  },
  {
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
          <Card key={collection.title} className="bg-white/80 backdrop-blur hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{collection.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{collection.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CollectionTypes;
