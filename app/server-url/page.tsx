import { z } from "zod";

const searchParamsSchema = z.object({
  id: z.coerce.number(),
  color: z.enum(["red", "green", "blue"]),
});

export default async function ServerUrlPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParamsPromise = await searchParams;
  const parsedSearchParams = searchParamsSchema.safeParse(searchParamsPromise);

  if (!parsedSearchParams.success) {
    console.error("Invalid search parameters:", parsedSearchParams.error);
    return (
      <main className="max-w-lg mx-auto p-8">Invalid search parameters</main>
    );
  }

  return (
    <main className="max-w-lg mx-auto p-8">
      Server URL Page {parsedSearchParams.data.id} -{" "}
      {parsedSearchParams.data.color}
    </main>
  );
}
