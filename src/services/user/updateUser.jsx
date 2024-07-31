import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const update = async (data) => {
  const response = await axios.put(
    `https://658a4e12ba789a962236e2f6.mockapi.io/user/${data.id}`,
    data
  );

  return response;
};

export const updateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};
