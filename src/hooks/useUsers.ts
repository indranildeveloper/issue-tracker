import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { User } from "@prisma/client";

export const useUsers = () =>
  useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () =>
      axios.get<User[]>("/api/users").then((response) => response.data),
    staleTime: 60 * 1000,
    retry: 3,
  });
