import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addDocs, deleteUser, updateUser } from "../Context/API";

export const useAddDocument = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => {
      return addDocs(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("docs");
    },
  });
};

export const useUpdateDocument = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({id, data}) => {
      return updateUser(id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("docs");
    },
  });
};

export const useDeleteDocument = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => {
      return deleteUser(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("docs");
    },
  });
};
