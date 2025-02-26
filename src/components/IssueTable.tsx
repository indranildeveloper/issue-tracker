import { FC } from "react";
import NextLink from "next/link";
import { Table } from "@radix-ui/themes";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import Link from "./Link";
import { issueTableColumns } from "@/constants/issueTableColumns";
import IssueStatusBadge from "./IssueStatusBadge";
import { IssueTableProps } from "@/interfaces";

const IssueTable: FC<IssueTableProps> = ({ issues, orderBy, status }) => {
  return (
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
  );
};

export default IssueTable;
