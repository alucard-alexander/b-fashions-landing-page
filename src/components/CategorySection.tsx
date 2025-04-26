
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const CategorySection = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#530c2c]">Shop By Category</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle>Elegant Sarees</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Discover timeless tradition in silk, cotton & more</p>
            <Button variant="outline" asChild>
              <Link to="/collections/sarees" className="flex items-center gap-2">
                Explore Collection <ArrowRight size={16} />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle>Designer Kurtas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Contemporary designs for the modern woman</p>
            <Button variant="outline" asChild>
              <Link to="/collections/kurtas" className="flex items-center gap-2">
                Explore Collection <ArrowRight size={16} />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CategorySection;
