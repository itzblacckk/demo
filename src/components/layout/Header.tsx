import React from 'react';
import { Search, ShoppingCart, Heart, Menu } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { useWishlist } from '../../hooks/useWishlist';

export function Header() {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md lg:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-serif font-bold text-rose-600">GiftHaven</h1>
            </div>
            <nav className="hidden lg:flex lg:ml-10 space-x-8">
              {['Home', 'New Arrivals', 'Collections', 'Sale'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-rose-600 px-3 py-2 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-xs lg:max-w-lg">
              <input
                type="text"
                placeholder="Search gifts..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <button className="relative p-2">
              <Heart className="h-6 w-6 text-gray-600" />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 text-xs bg-rose-500 text-white rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>
            
            <button className="relative p-2">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 text-xs bg-rose-500 text-white rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}