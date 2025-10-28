import z from 'zod';

export const shippingSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  phone: z
    .string()
    .min(7, 'Phone number must be between 7 and 10 digits')
    .max(10, 'Phone number must be between 7 and 10 digits')
    .regex(/^\d+$/, 'Phone number must contain only digits'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
});

export const paymentSchema = z.object({
  cardHolder: z.string().min(1, 'Card holder name is required'),
  cardNumber: z.string().length(16, 'Card number must be exactly 16 digits'),
  expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiration date must be in MM/YY format'),
  cvv: z.string().length(3, 'CVV must be 3 digits'),
});
