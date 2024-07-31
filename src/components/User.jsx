import React, { useState } from "react";
import UserCard from "./UserCard";
import { Button, Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import getAllUsers from "../services/user/getAllUsers";

const User = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { data, isLoading } = getAllUsers();

  const handlePagination = (e) => {
    setPage(e);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "green",
            color: "white",
            width: "max-content",
          }}
        >
          <h1>Total Users</h1>
          <h2>{data?.data.length}</h2>
        </div>
        <div
          style={{
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "yellow",
            width: "max-content",
          }}
        >
          <h1>Active Users</h1>
          <h2>{data?.data.filter((user) => user.active === true).length}</h2>
        </div>
        <div
          style={{
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "red",
            color: "white",
            width: "max-content",
          }}
        >
          <h1>Inactive Users</h1>
          <h2>{data?.data.filter((user) => user.active !== true).length}</h2>
        </div>
      </div>
      <div>
        <Button onClick={() => navigate("/createuser")}> create user </Button>
      </div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {data.data.slice((page - 1) * 10, page * 10).map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <Pagination
        style={{ marginTop: "10px" }}
        total={data?.data.length}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
        pageSize={10}
        defaultCurrent={1}
        onChange={handlePagination}
      />
    </div>
  );
};

export default User;
