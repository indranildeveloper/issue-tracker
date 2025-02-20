import { z } from "zod";

export const CreateIssueValidator = z.object({
  title: z.string().min(1, "Title is required!").max(255),
  description: z.string().min(1, "Description is required!"),
});

export type CreateIssueRequest = z.infer<typeof CreateIssueValidator>;
