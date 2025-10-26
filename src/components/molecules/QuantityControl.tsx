import { QuantityAction } from '@/src/types';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

export const QuantityControl = () => {
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleQuantityUpdate = (action: QuantityAction) => {
    setItemQuantity((prev) => {
      if (action === 'increase') return prev + 1;
      return Math.max(1, prev - 1);
    });
  };

  return (
    <div className="flex flex-col gap-2 text-sm">
      <span className="text-gray-500">Quantity</span>
      <div className="flex items-center gap-2">
        <button
          className="cursor-pointer border-1 border-gray-300 p-1"
          onClick={() => handleQuantityUpdate('decrease')}>
          <Minus className="w-4 h-4" />
        </button>
        <span>{itemQuantity}</span>
        <button
          className="cursor-pointer border-1 border-gray-300 p-1"
          onClick={() => handleQuantityUpdate('increase')}>
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
