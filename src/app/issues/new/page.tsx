"use client";

import dynamic from "next/dynamic";
import { IssueFormSkeleton } from "@/components";

const IssueForm = dynamic(() => import("@/components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;
