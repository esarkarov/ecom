import { ProductList } from '@/src/components/organisms/ProductList';
import Image from 'next/image';

interface HomePageProps {
  category: string;
}

const HomePage = ({ category }: HomePageProps) => {
  return (
    <>
      <div className="relative aspect-3/1 mb-12">
        <Image
          src="/featured.png"
          alt="Featured Product"
          fill
        />
      </div>
      <ProductList
        category={category}
        params="homepage"
      />
    </>
  );
};

export default HomePage;
