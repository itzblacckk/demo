import React from 'react';
import { ProductCard } from './ProductCard';

const products = [
  {
    id: '1',
    name: 'Handcrafted Ceramic Vase',
    price: 49.99,
    image:
      'data:image/jpeg;base64,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',
    rating: 4.5,
    reviewCount: 12,
  },
  {
    id: '2',
    name: 'Artisan Chocolate Box',
    price: 29.99,
    image:
      'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=600',
    rating: 5,
    reviewCount: 28,
  },
  {
    id: '3',
    name: 'Scented Candle Set',
    price: 34.99,
    image:
      'https://images.unsplash.com/photo-1608263153703-caa6b0fd7bc7?auto=format&fit=crop&w=600',
    rating: 4,
    reviewCount: 18,
  },
  {
    id: '4',
    name: 'Leather Journal',
    price: 24.99,
    image:
      'data:image/jpeg;base64,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',
    rating: 4.5,
    reviewCount: 15,
  },
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
