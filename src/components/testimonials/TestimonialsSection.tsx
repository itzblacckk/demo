import React from 'react';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    name: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150',
    rating: 5,
    text: 'Found the perfect anniversary gift for my husband. The quality and packaging were exceptional!',
    date: 'March 15, 2024'
  },
  {
    name: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150',
    rating: 5,
    text: 'Amazing selection of unique gifts. The personalization options made my gift extra special.',
    date: 'March 12, 2024'
  },
  {
    name: 'Emily Davis',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150',
    rating: 4,
    text: 'Great customer service and fast shipping. Will definitely shop here again!',
    date: 'March 10, 2024'
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="mt-4 text-gray-600">Real reviews from happy gift-givers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}