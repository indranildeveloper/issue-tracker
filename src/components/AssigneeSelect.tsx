"use client";

import { FC } from "react";
import axios from "axios";
import { Avatar, Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import { User } from "@prisma/client";
import Skeleton from "./Skeleton";
import { AssigneeSelectProps } from "@/interfaces";

const AssigneeSelect: FC<AssigneeSelectProps> = ({ issue }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () =>
      axios.get<User[]>("/api/users").then((response) => response.data),
    staleTime: 60 * 1000,
    retry: 3,
  });

  if (isLoading) return <Skeleton height="2rem" />;

  if (error) return null;

  return (
    <Select.Root
      onValueChange={(userId) => {
        axios
          .patch(`/api/issues/${issue.id}`, {
            assignedToUserId: userId === "unassigned" ? null : userId,
          })
          .catch((error) => {
            console.log(error);
          });
      }}
      defaultValue={issue.assignedToUserId || "unassigned"}
    >
      <Select.Trigger placeholder="Assign..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value="unassigned">Unassigned</Select.Item>
          <Select.Separator />
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id} className="mb-1">
              <Avatar
                src={user.image as string}
                fallback={user.name!.slice(0, 1)}
                radius="full"
                size="1"
              />
              <span className="ml-3">{user.name}</span>
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
