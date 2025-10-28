import { FormField } from '@/src/components/molecules/FormField';
import { shippingSchema } from '@/src/schemas';
import { ShippingFormData } from '@/src/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ShippingFormProps {
  setShippingForm: (data: ShippingFormData) => void;
}

export const ShippingForm = ({ setShippingForm }: ShippingFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
  });

  const router = useRouter();

  const handleShippingSubmit: SubmitHandler<ShippingFormData> = (data) => {
    setShippingForm(data);
    router.push('/cart?step=3', { scroll: false });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShippingSubmit)}>
      <FormField
        id="name"
        label="Name"
        placeholder="John Doe"
        {...register('name')}
        error={errors.name}
      />
      <FormField
        id="email"
        label="Email"
        placeholder="johndoe@gmail.com"
        {...register('email')}
        error={errors.email}
      />
      <FormField
        id="phone"
        label="Phone"
        placeholder="123456789"
        {...register('phone')}
        error={errors.phone}
      />
      <FormField
        id="address"
        label="Address"
        placeholder="123 Main St, Anytown"
        {...register('address')}
        error={errors.address}
      />
      <FormField
        id="city"
        label="City"
        placeholder="New York"
        {...register('city')}
        error={errors.city}
      />
      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2">
        Continue
        <ArrowRight className="w-3 h-3" />
      </button>
    </form>
  );
};
