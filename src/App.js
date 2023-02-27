import React, { useEffect, useState } from "react";

import "./App.css";
import Filter from "./components/Filter";
import Table from "./components/Table";


const API_URL = "http://localhost:3000/employees";

function App() {
  const [users, setUsers] = useState([]);

  const fetchEmployees = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="App">
      <Filter />
      <br />
      {/* <div>
        <h3 className="table__title">Employees</h3>
        <input
          type="text"
          placeholder="Search"
          className="search"
          onChange={(e) => {
            const search = e.target.value;
            const filteredUsers = users.filter((user) => {
              return user.user_name
                .toLowerCase()
                .includes(search.toLowerCase());
            });
            setUsers(filteredUsers);
          }}
        />
      </div> */}

      {/* <ul className="list">
        <li className="list-item">
        <div className="list-item__name">John</div>
      <div className="list-item__phone">123456789</div> */}

      <Table users={users} />
    </div>
  );
}

export default App;
