import { FC } from "react";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { prisma } from "@/db/database";
import { AssigneeSelect, EditIssueButton, IssueDetails } from "@/components";
import { IssueDetailPageProps } from "@/interfaces";
import { DeleteIssueButton } from "@/components";
import { authOptions } from "@/constants/authOptions";

/**
 * * Single Responsibility Principle
 * One single component should handle one single responsibility
 * One single component should not have too many imports
 */

/**
 * To get the session of the user we use useSession hook in client components
 * and getServerSession in the server components
 */

const IssueDetailPage: FC<IssueDetailPageProps> = async ({ params }) => {
  const { issueId } = await params;

  const session = await getServerSession(authOptions);

  if (Number.isNaN(parseInt(issueId))) notFound();

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(issueId),
    },
  });

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      {session && (
        <Box>
          <Flex direction="column" gap="4">
            <AssigneeSelect />
            <EditIssueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
};

export default IssueDetailPage;
