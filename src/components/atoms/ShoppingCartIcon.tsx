'use client';

import { useCartStore } from '@/src/stores/cartStore';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export const ShoppingCartIcon = () => {
  const { cart, hasHydrated } = useCartStore();

  if (!hasHydrated) return null;
  return (
    <Link
      href="/cart"
      className="relative">
      <ShoppingCart className="w-4 h-4 text-gray-600" />
      <span className="absolute -top-3 -right-3 bg-amber-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
        {cart.reduce((acc, item) => acc + item.itemQuantity, 0)}
      </span>
    </Link>
  );
};
