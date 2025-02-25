import { Issue, Status } from "@prisma/client";

export interface IssuesPageProps {
  searchParams: Promise<{ status: Status; orderBy: keyof Issue }>;
}
