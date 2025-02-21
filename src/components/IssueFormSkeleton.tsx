import { Box } from "@radix-ui/themes";
import { FC } from "react";
import Skeleton from "./Skeleton";

const IssueFormSkeleton: FC = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton height="2rem" />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default IssueFormSkeleton;
