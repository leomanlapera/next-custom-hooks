import { NextResponse } from "next/server";

export async function GET() {
  const product = {
    id: "1",
    name: "Fujifilm X-T1",
    price: 100,
  };

  return NextResponse.json(product);
}
