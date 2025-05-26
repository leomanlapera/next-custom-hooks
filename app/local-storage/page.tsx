"use client";

import { z } from "zod";

const cartSchema = z.array(
  z.object({
    id: z.number(),
    quantity: z.number().int().positive(),
  })
);

export default function LocalStoragePage() {
  const cart: unknown = JSON.parse(localStorage.getItem("cart") || "{}");

  const validatedCart = cartSchema.safeParse(cart);

  if (!validatedCart.success) {
    localStorage.removeItem("cart");
    return;
  }

  console.log(validatedCart.data.map((item) => console.log(item)));

  return <main className="max-w-lg mx-auto p-8">Local Storage</main>;
}
