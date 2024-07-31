import { Button, Card, Input, message } from "antd";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const { login, logout } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim().length === 0 || !email.includes("@")) {
      messageApi.error("Enter Valid Email");
      return;
    }
    if (password.trim().length === 0) {
      messageApi.error("Enter Valid Password");
      return;
    }
    const user = {
      email,
      password,
    };
    login(user);
    navigate("/");
  };
  return (
    <Card
      style={{
        maxWidth: 400,
        margin: "20px auto",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      {contextHolder}
      <form action="">
        <h1>Login</h1>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setMail(e.target.value)}
          style={{ marginBottom: "15px" }}
        />
        <Input.Password
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "15px" }}
        />
        <div className="flex flex-col gap-4">
          <Button
            onClick={handleSubmit}
            className="bg-yellow-400 py-2 rounded-lg transistion hover:bg-yellow-300"
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
