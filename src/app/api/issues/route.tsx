import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/db/database";
import {
  CreateIssueValidator,
  CreateIssueRequest,
} from "@/validators/IssueValidator";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as CreateIssueRequest;
  const validation = CreateIssueValidator.safeParse(body);

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
