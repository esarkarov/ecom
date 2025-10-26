import { PRODUCT } from '@/src/constants';
import ProductPage from '@/src/pages/ProductPage';

export const generateMetadata = async () => {
  // TODO: get the real product from api
  // TEMPORARY
  return {
    title: PRODUCT.name,
    describe: PRODUCT.description,
  };
};

interface ProductProps {
  searchParams: Promise<{ color: string; size: string }>;
}

const Product = async ({ searchParams }: ProductProps) => {
  const { size, color } = await searchParams;
  const selectedSize = size || PRODUCT.sizes[0];
  const selectedColor = color || PRODUCT.colors[0];

  return (
    <ProductPage
      selectedSize={selectedSize}
      selectedColor={selectedColor}
    />
  );
};

export default Product;
