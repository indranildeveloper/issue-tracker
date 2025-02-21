import { FC } from "react";
import { notFound } from "next/navigation";
import { Box, Grid } from "@radix-ui/themes";
import { prisma } from "@/db/database";
import { EditIssueButton, IssueDetails } from "@/components";
import { IssueDetailPageProps } from "@/interfaces/IssueDetailPageProps";

/**
 * * Single Responsibility Principle
 * One single component should handle one single responsibility
 * One single component should not have too many imports
 */

const IssueDetailPage: FC<IssueDetailPageProps> = async ({ params }) => {
  const { issueId } = await params;

  if (Number.isNaN(parseInt(issueId))) notFound();

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(issueId),
    },
  });

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <EditIssueButton issueId={issue.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
