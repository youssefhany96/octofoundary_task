import React, { useState } from "react";

import "../App.css";
import useSortableData from "../hooks/useSortableData";

function Table({ users }) {
  const [query, setQuery] = useState("");

  const { items, requestSort, sortConfig } = useSortableData(users);

  const search = (data) => {
    return data.filter((item) =>
      item.user_name.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="table__container">
      <table className="table">
        <td colSpan={2} className="table__title">
          Employees
        </td>
        <input
          type="text"
          placeholder="Search by name"
          className="search"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />

        <tr className="table__header">
          <th onClick={() => requestSort("user_name")}>
            Name
            <span>
              {sortConfig &&
                sortConfig.key === "user_name" &&
                (sortConfig.direction === "ascending" ? " ↑" : " ↓")}
            </span>
          </th>
          <th>Phone</th>
          <th>Email</th>
          <th>Date</th>
          <th>Country</th>
          <th>Company</th>
        </tr>
        {search(items).map((item) => (
          <tr key={item.id}>
            <td>{item.user_name}</td>
            <td>{item.user_phone}</td>
            <td>
              <a href="mailto:{item.user_email}">{item.user_email}</a>
            </td>
            <td>{item.user_date}</td>
            <td>{item.user_country}</td>
            <td>{item.user_company}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
