import { Issue, Status } from "@prisma/client";

export interface IssueTableProps {
  status: Status;
  orderBy: keyof Issue;
  issues: Issue[];
}
