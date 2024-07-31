import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getSingleUser = async (id) => {
  console.log(id);
  const response = await axios.get(
    `https://658a4e12ba789a962236e2f6.mockapi.io/user/${id}`
  );
  return response;
};

const getUser = (id) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getSingleUser(id),
  });
};

export default getUser;
