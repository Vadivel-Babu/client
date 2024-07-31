import { Button, Card, Input, message, Checkbox } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import createUser from "../services/user/createUser";

const { TextArea } = Input;
const CreateUser = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [check, setCheck] = useState(false);
  const { mutate, isPending, isError, error } = createUser();

  const handleAddUser = (e) => {
    e.preventDefault();
    if (name.trim().length === 0) {
      messageApi.error("Enter your name");
      return;
    }
    if (bio.trim().length === 0) {
      messageApi.error("Enter your bio");
      return;
    }
    const user = {
      name,
      bio,
      active: check,
    };
    mutate(user);
    if (isError) {
      messageApi.error(error);
      return;
    }
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
        <h1>Create User</h1>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: "15px" }}
        />
        <TextArea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Controlled autosize"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
        <Checkbox
          style={{ margin: "10px 0" }}
          checked={check}
          onChange={() => setCheck(!check)}
        >
          active
        </Checkbox>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <Button onClick={() => navigate(-1)}>Back</Button>
          <Button onClick={handleAddUser} disabled={isPending} type="primary">
            {isPending ? "Creating..." : "Create User"}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default CreateUser;
