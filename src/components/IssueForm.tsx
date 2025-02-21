"use client";

import { FC, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Callout, TextField } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import { IssueValidator, IssueRequestType } from "@/validators/IssueValidator";
import ErrorMessage from "@/components/ErrorMessage";
import Spinner from "@/components/Spinner";
import { IssueFormProps } from "@/interfaces/IssueFormProps";
import "easymde/dist/easymde.min.css";

// ? Very important
// ? This code prevents the error while loading the client side components in the server
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

// TODO: Refactor and extract common components
const IssueForm: FC<IssueFormProps> = ({ issue }) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueRequestType>({
    resolver: zodResolver(IssueValidator),
  });
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      if (issue) {
        await axios.patch(`/api/issues/${issue.id}`, data);
      } else {
        await axios.post("/api/issues", data);
      }
      router.push("/issues");
    } catch (error) {
      setIsSubmitting(false);
      console.log(error);
      setError("An unexpected error occurred!");
    }
  });

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form
        className="space-y-3"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={onSubmit}
      >
        <TextField.Root
          defaultValue={issue?.title}
          placeholder="Title"
          {...register("title")}
        />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          defaultValue={issue?.description}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>
          {issue ? "Update Issue" : "Submit New Issue "}{" "}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
