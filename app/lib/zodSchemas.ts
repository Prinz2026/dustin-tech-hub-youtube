import { z } from "zod";
export const checkoutSchema = z.object({ email: z.string().email(), name: z.string().min(1), address: z.string().min(1), city: z.string().min(1), phone: z.string().min(1) });
export const productSchema = z.object({ name: z.string().min(1), description: z.string().min(1), price: z.number(), stock: z.number() });
export const orderSchema = z.object({ userId: z.string().optional(), total: z.number(), items: z.array(z.any()) });
