'use client';

import { AddToCartButton } from '@/src/components/atoms/AddToCartButton';
import { ColorOption } from '@/src/components/atoms/ColorOption';
import { SizeSelect } from '@/src/components/atoms/SizeSelect';
import { ProductEntity, SelectionType } from '@/src/types';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProductCardProps {
  product: ProductEntity;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { sizes, colors, id, name, images, shortDescription, price } = product;
  const [productEntities, setProductEntities] = useState({
    size: sizes[0],
    color: colors[0],
  });

  const handleProductEntity = ({ type, value }: { type: SelectionType; value: string }) => {
    setProductEntities((prev) => ({
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
            src={images[productEntities.color]}
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
            onChange={handleProductEntity}
          />
          <ColorOption
            colors={colors}
            onChange={handleProductEntity}
            productColor={productEntities.color}
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="font-medium">${price.toFixed(2)}</p>
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};
