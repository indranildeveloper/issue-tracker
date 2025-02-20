import { FC } from "react";
import { notFound } from "next/navigation";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { prisma } from "@/db/database";
import delay from "delay";
import { IssueDetailPageProps } from "@/interfaces/IssueDetailPageProps";
import IssueStatusBadge from "@/components/IssueStatusBadge";

const IssueDetailPage: FC<IssueDetailPageProps> = async ({ params }) => {
  const { issueId } = await params;

  if (Number.isNaN(parseInt(issueId))) notFound();

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(issueId),
    },
  });

  if (!issue) notFound();

  // TODO: Remove this
  await delay(2000);

  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gap="3" my="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card>
        <p>{issue.description}</p>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
