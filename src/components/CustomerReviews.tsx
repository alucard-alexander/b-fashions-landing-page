
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

const reviews = [
  {
    id: 1,
    name: 'Customer 1',
    initial: 'A',
    review: "Absolutely love the quality and craftsmanship of my new saree. The attention to detail is remarkable, and the fit is perfect. Will definitely be shopping here again!",
  },
  {
    id: 2,
    name: 'Customer 2',
    initial: 'B',
    review: "Absolutely love the quality and craftsmanship of my new kurta. The attention to detail is remarkable, and the fit is perfect. Will definitely be shopping here again!",
  },
  {
    id: 3,
    name: 'Customer 3',
    initial: 'C',
    review: "Absolutely love the quality and craftsmanship of my new kurta. The attention to detail is remarkable, and the fit is perfect. Will definitely be shopping here again!",
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-16 container mx-auto px-4 bg-white/50">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#530c2c]">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <Card key={review.id} className="bg-white/80">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarFallback>{review.initial}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{review.review}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
