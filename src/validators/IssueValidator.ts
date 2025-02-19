import { z } from "zod";

export const CreateIssueValidator = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

export type CreateIssueRequest = z.infer<typeof CreateIssueValidator>;
