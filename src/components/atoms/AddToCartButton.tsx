import { ShoppingCart } from 'lucide-react';

export const AddToCartButton = () => {
  return (
    <button className="ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-gray-800 transition-all duration-300 flex items-center gap-2">
      <ShoppingCart className="w-4 h-4" />
      Add to Cart
    </button>
  );
};
