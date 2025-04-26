
import React from 'react';
import { Check } from 'lucide-react';

const promises = [
  'Authentic fabrics sourced directly from weavers',
  'Handcrafted with precision and care',
  'Rigorous quality checks before shipping',
  'Supporting traditional Indian craftsmanship',
];

const QualityPromise = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#530c2c]">Our Quality Promise</h2>
        <p className="text-gray-600 mb-8">
          At सारीKurta, we are committed to delivering uncompromised quality. Our products are crafted by skilled artisans 
          using premium materials, ensuring that each piece not only looks beautiful but also stands the test of time.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {promises.map((promise) => (
            <div key={promise} className="flex items-center gap-2 text-left">
              <Check className="text-[#530c2c]" />
              <span>{promise}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityPromise;
