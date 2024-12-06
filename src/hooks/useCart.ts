import { useState } from 'react';

export function useCart() {
  const [cartCount, setCartCount] = useState(0);
  
  const addToCart = () => setCartCount((prev) => prev + 1);
  const removeFromCart = () => setCartCount((prev) => Math.max(0, prev - 1));
  
  return { cartCount, addToCart, removeFromCart };
}