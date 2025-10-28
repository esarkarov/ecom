import { PaymentDisclaimer } from '@/src/components/organisms/PaymentDisclaimer';
import { ProductActions } from '@/src/components/organisms/ProductActions';
import { PRODUCT } from '@/src/constants';
import Image from 'next/image';

interface ProductPageProps {
  selectedSize: string;
  selectedColor: string;
}

const ProductPage = ({ selectedSize, selectedColor }: ProductPageProps) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      <div className="w-full lg:w-5/12 relative aspect-2/3">
        <Image
          src={PRODUCT.images[selectedColor]}
          alt={PRODUCT.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{PRODUCT.name}</h1>
        <p className="text-gray-500">{PRODUCT.description}</p>
        <h2 className="text-2xl font-semibold">${PRODUCT.price.toFixed(2)}</h2>
        <ProductActions
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
        <PaymentDisclaimer />
      </div>
    </div>
  );
};

export default ProductPage;
