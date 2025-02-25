import { Status } from "@prisma/client";

export interface IssuesPageProps {
  searchParams: Promise<{ status: Status }>;
}
