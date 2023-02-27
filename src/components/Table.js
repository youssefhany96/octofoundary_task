import React, { useState, useEffect } from "react";
import "../App.css";

import useSortableData from "../hooks/useSortableData";

const API_URL = "http://localhost:3000/employees";

function Table() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  const { items, requestSort, sortConfig } = useSortableData(users);

  const fetchEmployees = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setUsers(data);
  };

  const search = (data) => {
    return data.filter((item) =>
      item.user_name.toLowerCase().includes(query.toLowerCase())
    );
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <table className="table">
        <div className="table__search">
          <h3 className="table__title">Employees</h3>
          <input
            type="text"
            placeholder="Search"
            className="search"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        {/* <tr>
          <h3 className="table__title">Employees</h3>
          <input
            type="text"
            placeholder="Search"
            className="search"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </tr> */}
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
