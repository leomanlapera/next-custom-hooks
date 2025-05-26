import { userSchema } from "@/lib/validations";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  const jsonDirectory = path.join(process.cwd(), "../../data/user.json");
  const fileContents = await import(jsonDirectory);
  const parsedUsers = userSchema.safeParse(fileContents.default);

  if (!parsedUsers.success) {
    return NextResponse.json(
      { error: "Invalid user data", details: parsedUsers.error.errors },
      { status: 400 }
    );
  }

  parsedUsers.data.map((user) => {
    console.log(user.first_name);
  });

  return NextResponse.json(parsedUsers.data, { status: 200 });
}
