import { useQuery } from "@tanstack/react-query";
import {  fetchAllUsers,   findUserById } from "../Context/API";

export const useAllDoc = (search, page = 1, limit = 10) => {
    return useQuery({
      queryKey: ["docs", page, limit, search ],
      queryFn: () => fetchAllUsers(search, page, limit),
      keepPreviousData: true,
    });
  };

export const useOneUser = (id) => {
    return useQuery({
      queryKey: ["user", id ],
      queryFn: () => findUserById(id),
      keepPreviousData: true,
    });
  };