import { useState } from 'react';

export function useWishlist() {
  const [wishlistCount, setWishlistCount] = useState(0);
  
  const addToWishlist = () => setWishlistCount((prev) => prev + 1);
  const removeFromWishlist = () => setWishlistCount((prev) => Math.max(0, prev - 1));
  
  return { wishlistCount, addToWishlist, removeFromWishlist };
}