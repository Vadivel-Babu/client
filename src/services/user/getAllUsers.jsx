import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getUsers = async () => {
  const response = await axios.get(
    "https://658a4e12ba789a962236e2f6.mockapi.io/user"
  );
  return response;
};

const getAllUsers = () => {
  return useQuery({ queryKey: ["user"], queryFn: getUsers });
};

export default getAllUsers;
