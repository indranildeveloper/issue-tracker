import { FC } from "react";
import Link from "next/link";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { EditIssueButtonProps } from "@/interfaces";

const EditIssueButton: FC<EditIssueButtonProps> = ({ issueId }) => {
  return (
    <Button>
      <Pencil2Icon />
      <Link href={`/issues/edit/${issueId}`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
