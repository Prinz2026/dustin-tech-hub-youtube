import { z } from "zod";

export const shippingSchema = z.object({
  fullName: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  address: z.string().min(5, "Address required"),
  city: z.string().min(2),
  country: z.string().min(2),
  postalCode: z.string().min(2),
  phone: z.string().min(5),
});

export const productSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.coerce.number().min(0),
  image: z.string().optional(),
  category: z.string().min(1),
  isFeatured: z.boolean().optional(),
  status: z.string().optional(),
});

export const bannerSchema = z.object({
  title: z.string().min(1),
  image: z.string().min(1),
  link: z.string().optional(),
});

export const categorySchema = z.object({
  name: z.string().min(1),
  image: z.string().optional(),
});

export const checkoutSchema = shippingSchema;
export const orderSchema = z.object({ items: z.array(z.any()), total: z.number() });
export const userSchema = z.object({ email: z.string().email(), name: z.string() });
