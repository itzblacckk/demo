import React from 'react';
import { CategoryCard } from './CategoryCard';

const categories = [
  {
    name: 'Birthday Gifts',
    image: 'https://images.unsplash.com/photo-1577998474517-7eeeed4e448a?auto=format&fit=crop&w=800',
    itemCount: 48
  },
  {
    name: 'Anniversary',
    image: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8zMF8yZF9hZXN0aGV0aWNfZmxhdF92ZWN0b3JfaWxsdXN0cmF0aW9uX3NjZW5lX181YTA1ZjRlMC1iODI3LTQyOWMtYTBjMC0yYzFmNTNkZmU4YTBfMS5qcGc.jpg',
    itemCount: 36
  },
  {
    name: 'Wedding',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800',
    itemCount: 52
  },
  {
    name: 'Corporate',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2wUjyGg6XNSoT1LLIYDsEWMy0RtOX9JloQ&s',
    itemCount: 29
  }
];

export function CategoriesSection() {
  return (
    <section className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
        <p className="mt-4 text-gray-600">Find the perfect gift for every occasion</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.name} {...category} />
        ))}
      </div>
    </section>
  );
}