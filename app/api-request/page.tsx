"use client";

import { useEffect } from "react";
import { z } from "zod";

const productSchema = z.object({
  name: z.string(),
  price: z.number(),
});

type Product = z.infer<typeof productSchema>;

export default function ApiRequest() {
  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((product: Product) => {
        // use Zod to validate the product
        const validateProduct = productSchema.safeParse(product);

        if (!validateProduct.success) {
          console.error(validateProduct.error);
          return;
        }

        // use the validateProduct
        console.log(validateProduct.data.name);
      });
  }, []);

  return <main className="max-w-lg mx-auto p-8">API Request</main>;
}
