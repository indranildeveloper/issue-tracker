import { FC } from "react";
import { Metadata } from "next";
import { Flex } from "@radix-ui/themes";
import { Status } from "@prisma/client";
import { prisma } from "@/db/database";
import { IssueActions, Pagination } from "@/components";
import { IssuesPageProps } from "@/interfaces";
import { issueTableColumns } from "@/constants/issueTableColumns";
import IssueTable from "@/components/IssueTable";

export const metadata: Metadata = {
  title: "Issue Tracker - Issue List",
  description: "View all project issues.",
};

const IssuesPage: FC<IssuesPageProps> = async ({ searchParams }) => {
  const { status, orderBy, page } = await searchParams;

  const statuses = Object.values(Status);
  const validatedStatus = statuses.includes(status) ? status : undefined;
  const where = { status: validatedStatus };
  const validatedOrderBy = issueTableColumns
    .map((column) => column.value)
    .includes(orderBy)
    ? { [orderBy]: "asc" }
    : undefined;

  const currentPage = parseInt(page) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where,
    orderBy: validatedOrderBy,
    skip: (currentPage - 1) * pageSize,
    take: pageSize,
  });

  const issueCount = await prisma.issue.count({
    where,
  });

  return (
    <Flex direction="column" gap="3">
      <IssueActions />
      <IssueTable issues={issues} orderBy={orderBy} status={status} />
      <Pagination
        pageSize={pageSize}
        currentPage={currentPage}
        itemCount={issueCount}
      />
    </Flex>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
