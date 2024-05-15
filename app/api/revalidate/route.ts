import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  if (secret !== process.env.MY_SECRET) {
    return new NextResponse(JSON.stringify({ message: "Invalid token" }), {
      status: 401,
      statusText: undefined,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const path = request.nextUrl.searchParams.get("path") || "/";

  revalidatePath(path);

  return NextResponse.json(
    { message: "Revalidated: true" },
    {
      status: 200,
    }
  );
}
