import { Status } from "@prisma/client";

export const statuses: { label: string; value?: Status }[] = [
  {
    label: "All",
  },
  {
    label: "Open",
    value: "OPEN",
  },
  {
    label: "In Progress",
    value: "IN_PROGRESS",
  },
  {
    label: "Closed",
    value: "CLOSED",
  },
];
