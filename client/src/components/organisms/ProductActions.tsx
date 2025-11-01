'use client';

import { ColorOptions } from '@/src/components/molecules/ColorOptions';
import { QuantityControl } from '@/src/components/molecules/QuantityControl';
import { SizeOptions } from '@/src/components/molecules/SizeOptions';
import { useCartStore } from '@/src/stores/cartStore';
import { ProductEntity, SelectionType } from '@/src/types';
import { Plus, ShoppingCart } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

interface ProductActionsProps {
  product: ProductEntity;
  selectedSize: string;
  selectedColor: string;
}

export const ProductActions = ({ selectedSize, selectedColor, product }: ProductActionsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [itemQuantity, setItemQuantity] = useState(1);
  const { addToCart } = useCartStore();

  const handleQueryUpdate = ({ type, value }: { type: SelectionType; value: string }) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      itemQuantity,
      selectedColor,
      selectedSize,
    });

    toast.success('Product added to cart');
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      <SizeOptions
        sizes={product.sizes}
        selectedSize={selectedSize}
        onChange={handleQueryUpdate}
      />
      <ColorOptions
        colors={product.colors}
        onChange={handleQueryUpdate}
        selectedColor={selectedColor}
        shape="square"
        size={24}
      />
      <QuantityControl
        itemQuantity={itemQuantity}
        onQuantityUpdate={setItemQuantity}
      />
      <button
        onClick={handleAddToCart}
        className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm font-medium">
        <Plus className="w-4 h-4" />
        Add to Cart
      </button>
      <button className="ring-1 ring-gray-400 shadow-lg text-gray-800 px-4 py-2 rounded-md flex items-center justify-center cursor-pointer gap-2 text-sm font-medium">
        <ShoppingCart className="w-4 h-4" />
        Buy this Item
      </button>
    </div>
  );
};
