import { QuantityAction } from '@/src/types';
import { Minus, Plus } from 'lucide-react';

interface QuantityControlProps {
  itemQuantity: number;
  onQuantityUpdate: (value: number) => void;
}

export const QuantityControl = ({ onQuantityUpdate, itemQuantity }: QuantityControlProps) => {
  const handleQuantityUpdate = (action: QuantityAction) => {
    const newQuantity = action === 'increase' ? itemQuantity + 1 : Math.max(1, itemQuantity - 1);
    onQuantityUpdate(newQuantity);
  };

  return (
    <div className="flex flex-col gap-2 text-sm">
      <span className="text-gray-500">Quantity</span>
      <div className="flex items-center gap-2">
        <button
          className="cursor-pointer border border-gray-300 p-1"
          onClick={() => handleQuantityUpdate('decrease')}>
          <Minus className="w-4 h-4" />
        </button>
        <span>{itemQuantity}</span>
        <button
          className="cursor-pointer border border-gray-300 p-1"
          onClick={() => handleQuantityUpdate('increase')}>
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
