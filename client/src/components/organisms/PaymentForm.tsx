import { FormField } from '@/src/components/molecules/FormField';
import { paymentSchema } from '@/src/schemas';
import { PaymentFormData } from '@/src/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';

export const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
  });

  const handlePaymentSubmit: SubmitHandler<PaymentFormData> = () => {};

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handlePaymentSubmit)}>
      <FormField
        id="cardHolder"
        label="Name on Card"
        placeholder="John Doe"
        {...register('cardHolder')}
        error={errors.cardHolder}
      />
      <FormField
        id="cardNumber"
        label="Card Number"
        placeholder="123456789123"
        {...register('cardNumber')}
        error={errors.cardNumber}
      />
      <FormField
        id="expirationDate"
        label="Expiration Date"
        placeholder="01/32"
        {...register('expirationDate')}
        error={errors.expirationDate}
      />
      <FormField
        id="cvv"
        label="CVV"
        placeholder="123"
        {...register('cvv')}
        error={errors.cvv}
      />
      <div className="flex items-center gap-2 mt-4">
        <Image
          src="/cards.png"
          alt="cards"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/stripe.png"
          alt="stripe"
          width={50}
          height={25}
          className="rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2">
        Checkout
        <ShoppingCart className="w-3 h-3" />
      </button>
    </form>
  );
};
