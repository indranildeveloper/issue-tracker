import { FC } from "react";
import { notFound } from "next/navigation";
import { IssueForm } from "@/components";
import { EditIssuePageProps } from "@/interfaces/EditIssuePageProps";
import { prisma } from "@/db/database";

const EditIssuePage: FC<EditIssuePageProps> = async ({ params }) => {
  const { issueId } = await params;

  if (Number.isNaN(parseInt(issueId))) notFound();

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(issueId) },
  });

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
