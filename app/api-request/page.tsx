"use client";

import { useEffect } from "react";
import { z } from "zod";

const productSchema = z.object({
  name: z.string(),
  price: z.number(),
});

type Product = z.infer<typeof productSchema>;

const postSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  userId: z.number(),
});

type Post = z.infer<typeof postSchema>;

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

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((post: Post) => {
        // use Zod to validate post
        const validatePost = postSchema.safeParse(post);

        if (!validatePost.success) {
          console.error(validatePost.error);
          return;
        }

        console.log(validatePost.data.body);
      });
  }, []);

  return <main className="max-w-lg mx-auto p-8">API Request</main>;
}
