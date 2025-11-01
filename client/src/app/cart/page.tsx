import CartPage from '@/src/pages/CartPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gocart | Cart',
  description: 'Your shopping cart',
};

interface CartProps {
  searchParams: Promise<{ step: string }>;
}

const Cart = async ({ searchParams }: CartProps) => {
  const { step } = await searchParams;
  const activeStep = step ? parseInt(step) : 1;

  return <CartPage activeStep={activeStep} />;
};

export default Cart;
