import { FC } from "react";
import { DeleteIssueButtonProps } from "@/interfaces/DeleteIssueButtonProps";
import { Button } from "@radix-ui/themes";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DeleteIssueButton: FC<DeleteIssueButtonProps> = ({ issueId }) => {
  return <Button color="red">Delete Issue</Button>;
};
export default DeleteIssueButton;
