import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  image: string;
  rating: number;
  text: string;
  date: string;
}

export function TestimonialCard({ name, image, rating, text, date }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="font-medium text-gray-900">{name}</h4>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? 'text-yellow-400' : 'text-gray-200'
                }`}
                fill={i < rating ? 'currentColor' : 'none'}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-2">{text}</p>
      <span className="text-sm text-gray-500">{date}</span>
    </div>
  );
}