"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Select } from "@radix-ui/themes";
import { statuses } from "@/constants/issueStatuses";

const IssueStatusFilter: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleStatusValueChange = (status: string) => {
    const params = new URLSearchParams();

    if (status) params.append("status", status);
    if (searchParams.get("orderBy"))
      params.append("orderBy", searchParams.get("orderBy")!);

    const query = params.size ? `?${params.toString()}` : "";
    router.push(`/issues/list/${query}`);
  };

  return (
    <Select.Root
      defaultValue={searchParams.get("status") ?? "all"}
      onValueChange={handleStatusValueChange}
    >
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
