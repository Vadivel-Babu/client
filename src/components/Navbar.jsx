import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Button } from "antd";
const Navbar = () => {
  const { user, logout } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NavLink to="/">
          <Button type="text" style={{ fontSize: "30px" }}>
            User
          </Button>
        </NavLink>
        {!user ? (
          <NavLink to="/login">
            <Button type="link">Login</Button>
          </NavLink>
        ) : (
          <Button
            type="link"
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            logout
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
