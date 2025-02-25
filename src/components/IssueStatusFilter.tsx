"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { Select } from "@radix-ui/themes";
import { statuses } from "@/constants/issueStatuses";

const IssueStatusFilter: FC = () => {
  const router = useRouter();

  const handleStatusValueChange = (status: string) => {
    const query = status !== "all" ? `?status=${status}` : "";
    router.push(`/issues/list/${query}`);
  };

  return (
    <Select.Root onValueChange={handleStatusValueChange}>
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.label} value={status.value || "all"}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
