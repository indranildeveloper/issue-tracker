import { FC } from "react";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { IssueFormSkeleton } from "@/components";
import { EditIssuePageProps } from "@/interfaces";
import { prisma } from "@/db/database";

const IssueForm = dynamic(() => import("@/components/IssueForm"), {
  loading: () => <IssueFormSkeleton />,
});

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
