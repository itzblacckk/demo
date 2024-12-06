import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  image: string;
  itemCount: number;
}

export function CategoryCard({ name, image, itemCount }: CategoryCardProps) {
  return (
    <div className="relative group cursor-pointer">
      <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm opacity-90">{itemCount} items</span>
          <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}