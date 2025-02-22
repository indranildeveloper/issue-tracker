import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/db/database";
import { IssueValidator, IssueRequestType } from "@/validators/IssueValidator";
import { getServerSession } from "next-auth";
import { authOptions } from "@/constants/authOptions";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({}, { status: 401 });
  }

  const body = (await request.json()) as IssueRequestType;
  const validation = IssueValidator.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
