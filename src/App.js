import axios from "axios";
import React, { useEffect, useState } from "react";

import "./App.css";
import Filter from "./components/Filter";
import Table from "./components/Table";

const API_URL = "http://localhost:3000/employees";

function App() {
  const [users, setUsers] = useState([]);

  const fetchEmployees = async () => {
    const response = await axios.get(API_URL);
    setUsers(response.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="App">
      <Filter setUsers={setUsers} />
      <Table users={users} />
    </div>
  );
}

export default App;
