import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./context/AppContext";

const AuthUser = ({ children }) => {
  const navigate = useNavigate();

  const { user } = useContext(AppContext);

  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
  }, [user]);
  return children;
};

export default AuthUser;
