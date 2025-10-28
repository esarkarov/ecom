import { paymentSchema, shippingSchema } from '@/src/schemas';
import z from 'zod';

export interface ProductEntity {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
}

export interface CartItemEntity extends ProductEntity {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export type SelectionType = 'size' | 'color';
export type ProductListParam = 'homepage' | 'products';
export type QuantityAction = 'increase' | 'decrease';
export type OptionShape = 'square' | 'circle';
export type ShippingFormData = z.infer<typeof shippingSchema>;
export type PaymentFormData = z.infer<typeof paymentSchema>;
