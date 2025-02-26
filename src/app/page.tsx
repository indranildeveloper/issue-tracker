import { FC } from "react";
import { IssueChart, IssueSummary } from "@/components";
import { prisma } from "@/db/database";

const HomePage: FC = async () => {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });

  return (
    <>
      <IssueSummary open={open} inProgress={inProgress} closed={closed} />
      <IssueChart open={open} inProgress={inProgress} closed={closed} />
    </>
  );
};

export default HomePage;
