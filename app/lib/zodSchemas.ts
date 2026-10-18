import { z } from "zod";

export const shippingSchema = z.object({
  fullName: z.string().min(2),
  address: z.string().min(5),
  city: z.string().min(2),
  country: z.string().min(2),
  postalCode: z.string().min(2),
  phone: z.string().min(5),
});

export const checkoutSchema = shippingSchema;
export const productSchema = z.object({
  name: z.string().min(1),
  price: z.number().min(0),
  description: z.string().optional(),
});

export const orderSchema = z.object({
  items: z.array(z.any()),
  total: z.number(),
});
