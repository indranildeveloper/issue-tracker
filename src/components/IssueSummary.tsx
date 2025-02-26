import { FC } from "react";
import { Card, Flex, Text } from "@radix-ui/themes";
import { Status } from "@prisma/client";
import { IssueSummaryProps } from "@/interfaces";
import Link from "next/link";

const IssueSummary: FC<IssueSummaryProps> = ({ open, inProgress, closed }) => {
  const containers: { label: string; value: number; status: Status }[] = [
    { label: "Open", value: open, status: "OPEN" },
    { label: "In Progress", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed", value: closed, status: "CLOSED" },
  ];

  return (
    <Flex gap="4">
      {containers.map((container) => (
        <Card key={container.label}>
          <Flex direction="column" gap="1 ">
            <Link
              href={`/issues/list?status=${container.status}`}
              className="text-sm font-medium"
            >
              {container.label}
            </Link>
            <Text size="5" className="font-bold">
              {container.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
