import { Button, Card, Input, message, Checkbox } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getUser from "../services/user/getUser";
import { updateUser } from "../services/user/updateUser";

const { TextArea } = Input;

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = getUser(id);

  const { mutate, isPending, isError, error } = updateUser();

  const [messageApi, contextHolder] = message.useMessage();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setName(data?.data.name);
    setBio(data?.data.bio);
    setCheck(data?.data.active);
  }, [id, isLoading]);

  const handleUpdateUser = (e) => {
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
      id,
      name,
      bio,
      active: check,
    };
    mutate(user);
    if (isError) {
      messageApi.error(error.message);
      return;
    }
    navigate("/");
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }

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
        <h1>Update User</h1>
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

        <div>
          <Button
            onClick={handleUpdateUser}
            disabled={isPending}
            type="primary"
          >
            {isPending ? "Updating..." : "Update User"}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default EditUser;
