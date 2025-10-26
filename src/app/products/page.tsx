import { ProductList } from '@/src/components/organisms/ProductList';

interface ProductsProps {
  searchParams: Promise<{ category: string }>;
}

const Products = async ({ searchParams }: ProductsProps) => {
  const category = (await searchParams).category;

  return (
    <ProductList
      category={category}
      params="products"
    />
  );
};

export default Products;
