"use client";

import { useSearchParams } from "next/navigation";
import { z } from "zod";

const searchParamsSchema = z.object({
  id: z.coerce.number(),
  color: z.enum(["red", "green", "blue"]),
});

export default function URLPage() {
  const searchParams = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams.entries());
  const validatedSearchParams =
    searchParamsSchema.safeParse(searchParamsObject);

  if (!validatedSearchParams.success) {
    return;
  }

  console.log(validatedSearchParams.data);

  return <main className="max-w-lg mx-auto p-8">URL</main>;
}
