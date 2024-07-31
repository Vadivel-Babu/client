import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const remove = async (id) => {
  const response = await axios.delete(
    `https://658a4e12ba789a962236e2f6.mockapi.io/user/${id}`
  );
  return response;
};

const deleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: remove,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

export default deleteUser;
