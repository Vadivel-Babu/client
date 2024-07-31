import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const postUser = async (data) => {
  const response = await axios.post(
    "https://658a4e12ba789a962236e2f6.mockapi.io/user",
    data
  );
  return response;
};

const createUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postUser,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

export default createUser;
