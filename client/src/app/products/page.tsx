import { ProductList } from '@/src/components/organisms/ProductList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gocart | Products',
  description: 'Browse our wide range of products across various categories.',
};

interface ProductsProps {
  searchParams: Promise<{ category: string }>;
}

const Products = async ({ searchParams }: ProductsProps) => {
  const { category } = await searchParams;

  return (
    <ProductList
      category={category}
      params="products"
    />
  );
};

export default Products;
