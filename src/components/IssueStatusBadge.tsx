import { FC } from "react";
import { Badge } from "@radix-ui/themes";
import { statusMap } from "@/constants/statusMap";
import { IssueStatusBadgeProps } from "@/interfaces";

const IssueStatusBadge: FC<IssueStatusBadgeProps> = ({ status }) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;
