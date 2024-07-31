import React from "react";
import { Select } from "antd";

const Filter = ({ handleActive, handleSortUser }) => {
  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {" "}
      <Select
        placeholder="Select user status"
        style={{ width: "100px" }}
        optionFilterProp="label"
        onChange={(value) => {
          handleActive(value);
        }}
        options={[
          {
            value: "All",
            label: "All",
          },
          {
            value: "Active",
            label: "Active",
          },
          {
            value: "In Active",
            label: "In Active",
          },
        ]}
      />
      <Select
        placeholder="Sort by name"
        style={{ width: "150px" }}
        optionFilterProp="label"
        onChange={(value) => {
          handleSortUser(value);
        }}
        options={[
          {
            value: "Ascending",
            label: "Ascending",
          },
          {
            value: "Descending",
            label: "Descending",
          },
        ]}
      />
    </div>
  );
};

export default Filter;
