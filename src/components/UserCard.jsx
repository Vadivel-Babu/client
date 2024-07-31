import { Button, Card } from "antd";
import React, { useState } from "react";
import ModalUser from "./ModalUser";

const UserCard = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Card
        title={user.name}
        style={{
          backgroundColor: `${user.active ? "#8bfca2" : "#fc8b8b"}`,
          maxWidth: 300,
        }}
        extra={
          <Button onClick={showModal} type="link">
            See More
          </Button>
        }
      >
        <p>{user.bio.slice(0, 5)} ...</p>
      </Card>
      <ModalUser
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        user={user}
      />
    </>
  );
};

export default UserCard;
