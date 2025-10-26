import HomePage from '@/src/pages/HomePage';

interface HomeProps {
  searchParams: Promise<{ category: string }>;
}

const Home = async ({ searchParams }: HomeProps) => {
  const category = (await searchParams).category;

  return <HomePage category={category} />;
};

export default Home;
