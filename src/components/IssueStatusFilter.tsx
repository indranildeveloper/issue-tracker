"use client";

import { FC } from "react";
import { Select } from "@radix-ui/themes";
import { statuses } from "@/constants/issueStatuses";

const IssueStatusFilter: FC = () => {
  return (
    <Select.Root>
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
