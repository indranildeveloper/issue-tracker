import { z } from "zod";

export const IssueValidator = z.object({
  title: z.string().min(1, "Title is required!").max(255),
  description: z.string().min(1, "Description is required!").max(65535),
});

export const IssuePatchValidator = z.object({
  title: z.string().min(1, "Title is required!").max(255).optional(),
  description: z
    .string()
    .min(1, "Description is required!")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "AssignToUserId is required!")
    .max(255)
    .optional()
    .nullable(),
});

export type IssueRequestType = z.infer<typeof IssueValidator>;
export type IssuePatchRequestType = z.infer<typeof IssuePatchValidator>;
