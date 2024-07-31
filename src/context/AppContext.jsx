import { createContext, useState } from "react";

export const AppContext = createContext(null);

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const Appcontext = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage());

  function login(user) {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  }
  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AppContext.Provider value={{ user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export default Appcontext;
