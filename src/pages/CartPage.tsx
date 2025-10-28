'use client';

import { CartItem } from '@/src/components/molecules/CartItem';
import { CartSummary } from '@/src/components/molecules/CartSummary';
import { StepItem } from '@/src/components/molecules/StepItem';
import { PaymentForm } from '@/src/components/organisms/PaymentForm';
import { ShippingForm } from '@/src/components/organisms/ShippingForm';
import { CART_ITEMS, STEPS } from '@/src/constants';
import { ShippingFormData } from '@/src/types';
import { useState } from 'react';

interface CartPageProps {
  activeStep: number;
}

const CartPage = ({ activeStep }: CartPageProps) => {
  const [shippingForm, setShippingForm] = useState<ShippingFormData>();

  const renderStepContent = () => {
    if (activeStep === 1) {
      return CART_ITEMS.map((item) => (
        <CartItem
          key={item.id}
          item={item}
        />
      ));
    }
    if (activeStep === 2) {
      return <ShippingForm setShippingForm={setShippingForm} />;
    }
    if (activeStep === 3 && shippingForm) {
      return <PaymentForm />;
    }
    return <p className="text-sm text-gray-500">Please fill in the shipping form to continue.</p>;
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {STEPS.map((step) => (
          <StepItem
            key={step.id}
            step={step}
            activeStep={activeStep}
          />
        ))}
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-7/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          {renderStepContent()}
        </div>
        <CartSummary activeStep={activeStep} />
      </div>
    </div>
  );
};

export default CartPage;
