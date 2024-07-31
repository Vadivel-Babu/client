import React from "react";
import { Modal, Button } from "antd";
import { useNavigate } from "react-router-dom";
import deleteUser from "../services/user/deleteUser";

const ModalUser = ({ isModalOpen, handleCancel, user }) => {
  const navigate = useNavigate();
  const { mutate, isPending } = deleteUser();
  return (
    <Modal
      title={user.name}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={(_, { CancelBtn }) => (
        <>
          <Button onClick={() => navigate(`/edituser/${user.id}`)}>Edit</Button>
          <Button
            disabled={isPending}
            type="primary"
            danger
            onClick={() => mutate(user.id)}
          >
            {isPending ? "Deleting... " : "Delete"}
          </Button>
          <CancelBtn />
        </>
      )}
    >
      <p>{user.bio}</p>
      <p>IsActive: {user.active ? "Active" : "Not Active"}</p>
    </Modal>
  );
};

export default ModalUser;
