import { FC } from "react";
import Link from "next/link";
import { Button } from "@radix-ui/themes";

const IssuesPage: FC = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
