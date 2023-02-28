import axios from "axios";
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import dayjs from "dayjs";

import CountrySelect from "./CountrySelect";
import DateInput from "./DateInput";
import Divider from "./Divider";
import FilterButton from "./FilterButton";

function Filter({ setUsers }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [date, setDate] = useState(null);
  const [company, setCompany] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const filterEmployees = async () => {
    const query = {
      ...(email && { user_email: email }),
      ...(name && { user_name: name }),
      ...(phone && { user_phone: phone }),
      ...(company && { user_company: company }),
      ...(selectedCountry && { user_country: selectedCountry }),
      ...(date && { user_date: dayjs(date).format("YYYY-MM-DD") }),
    };

    const { data } = await axios.get("http://localhost:3000/employees", {
      params: query,
    });
    setUsers(data);
  };

  return (
    <div className="filter">
      <Button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Filters
      </Button>
      {isVisible && (
        <form className="filter__form">
          <h2 className="filter__title">FILTERS</h2>
          <hr />
          <div className="filter__item">
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Divider />
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Divider />
            <TextField
              id="standard-basic"
              label="Phone"
              variant="standard"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <Divider />
            <TextField
              id="standard-basic"
              label="Company"
              variant="standard"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />
            <Divider />
            <CountrySelect
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
            />
            <Divider />
            <DateInput date={date} setDate={setDate} />
          </div>
          <FilterButton filterEmployees={filterEmployees} />
        </form>
      )}
    </div>
  );
}

export default Filter;
