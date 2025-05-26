import { checkoutFormSchema } from "@/lib/validations";
import { NextResponse } from "next/server";

export async function GET() {
  const product = {
    id: "1",
    name: "Fujifilm X-T1",
    price: 100,
  };

  return NextResponse.json(product);
}

export async function POST(request: Request) {
  const body: unknown = await request.json();

  const parsedForm = checkoutFormSchema.safeParse(body);

  if (!parsedForm.success) {
    return NextResponse.json(parsedForm.error, { status: 422 });
  }

  return NextResponse.json({ message: "Sucess" }, { status: 200 });
}
