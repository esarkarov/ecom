'use client';

import { ColorOptions } from '@/src/components/molecules/ColorOptions';
import { SizeSelect } from '@/src/components/molecules/SizeSelect';
import { ProductEntity, SelectionType } from '@/src/types';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProductCardProps {
  product: ProductEntity;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { sizes, colors, id, name, images, shortDescription, price } = product;
  const [selectedOptions, setSelectedOptions] = useState({
    size: sizes[0],
    color: colors[0],
  });

  const handleOptionChange = ({ type, value }: { type: SelectionType; value: string }) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <Link href={`/products/${id}`}>
        <div className="relative aspect-[2/3]">
          <Image
            className="object-cover hover:scale-105 transition-all duration-300"
            src={images[selectedOptions.color]}
            alt={name}
            fill
          />
        </div>
      </Link>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{name}</h1>
        <p className="text-sm text-gray-500">{shortDescription}</p>
        <div className="flex items-center gap-4 text-xs">
          <SizeSelect
            sizes={sizes}
            onChange={handleOptionChange}
          />
          <ColorOptions
            colors={colors}
            onChange={handleOptionChange}
            selectedColor={selectedOptions.color}
            shape="circle"
            size={16}
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="font-medium">${price.toFixed(2)}</p>
          <button className="ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-gray-800 transition-all duration-300 flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
