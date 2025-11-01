import { Categories } from '@/src/components/molecules/Categories';
import { Filter } from '@/src/components/molecules/Filter';
import { ProductCard } from '@/src/components/molecules/ProductCard';
import { PRODUCT_LIST } from '@/src/constants';
import { ProductListParam } from '@/src/types';
import Link from 'next/link';

interface ProductListProps {
  category: string;
  params: ProductListParam;
}

export const ProductList = ({ category, params }: ProductListProps) => {
  return (
    <div className="w-full">
      <Categories />
      {params === 'products' && <Filter />}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {PRODUCT_LIST.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
      <Link
        href={category ? `/products/?category=${category}` : '/products'}
        className="flex justify-end mt-4 underline text-sm text-gray-500">
        View all products
      </Link>
    </div>
  );
};
