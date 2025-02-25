import { FC } from "react";
import NextLink from "next/link";
import { Table } from "@radix-ui/themes";
import { prisma } from "@/db/database";
import { IssueActions, IssueStatusBadge, Link } from "@/components";
import { IssuesPageProps } from "@/interfaces";
import { Status } from "@prisma/client";
import { issueTableColumns } from "@/constants/issueTableColumns";
import { ArrowUpIcon } from "@radix-ui/react-icons";

const IssuesPage: FC<IssuesPageProps> = async ({ searchParams }) => {
  const { status, orderBy } = await searchParams;

  const statuses = Object.values(Status);
  const validatedStatus = statuses.includes(status) ? status : undefined;
  const validatedOrderBy = issueTableColumns
    .map((column) => column.value)
    .includes(orderBy)
    ? { [orderBy]: "asc" }
    : undefined;

  const issues = await prisma.issue.findMany({
    where: {
      status: validatedStatus,
    },
    orderBy: validatedOrderBy,
  });

  return (
    <div>
      <IssueActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {issueTableColumns.map((column) => (
              <Table.ColumnHeaderCell
                key={column.value}
                className={column.className}
              >
                <NextLink
                  href={{
                    query: { status, orderBy: column.value },
                  }}
                >
                  {column.label}
                </NextLink>
                {column.value === orderBy && <ArrowUpIcon className="inline" />}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <div className="block md:hidden">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
