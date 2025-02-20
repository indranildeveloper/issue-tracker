import { FC } from "react";
import { IssueStatusBadgeProps } from "@/interfaces/IssueStatusBadgeProps";
import { Badge } from "@radix-ui/themes";
import { statusMap } from "@/constants/statusMap";

const IssueStatusBadge: FC<IssueStatusBadgeProps> = ({ status }) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;
