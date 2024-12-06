import React from 'react';

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=2000"
          alt="Gift wrapping"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Find the Perfect Gift
        </h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
          Discover unique and thoughtful gifts for every occasion. From handcrafted items to luxury presents,
          we have something special for everyone you care about.
        </p>
        <div className="mt-10">
          <a
            href="#featured"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-rose-600 bg-white hover:bg-gray-50"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}