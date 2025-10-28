import { CartItemEntity } from '@/src/types';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';

interface CartItemProps {
  item: CartItemEntity;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { images, name, selectedColor, selectedSize, quantity, price } = item;

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-8">
        <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
          <Image
            src={images[selectedColor]}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">{name}</p>
            <p className="text-xs text-gray-500">Quantity: {quantity}</p>
            <p className="text-xs text-gray-500">Size: {selectedSize}</p>
            <p className="text-xs text-gray-500">Color: {selectedColor}</p>
          </div>
          <p className="font-medium">${price.toFixed(2)}</p>
        </div>
      </div>
      <button className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center cursor-pointer">
        <Trash2 className="w-3 h-3" />
      </button>
    </div>
  );
};
