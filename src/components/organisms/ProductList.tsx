import { ViewAllLink } from '@/src/components/atoms/ViewAllLink';
import { Categories } from '@/src/components/molecules/Categories';
import { Filter } from '@/src/components/molecules/Filter';
import { ProductCard } from '@/src/components/molecules/ProductCard';
import { PRODUCT_LIST } from '@/src/constants';
import { ProductListParam } from '@/src/types';

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
      <ViewAllLink category={category} />
    </div>
  );
};
