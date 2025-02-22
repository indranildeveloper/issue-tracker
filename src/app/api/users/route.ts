import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/db/database";

/**
 * To prevent caching we need to provide the request parameter
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return NextResponse.json(users);
}
