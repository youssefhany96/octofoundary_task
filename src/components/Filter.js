import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import moment from "moment";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FilterListIcon from '@mui/icons-material/FilterList';

import Divider from "./Divider";

function Filter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("All");
  const [date, setDate] = useState(moment().format("MM/DD/YYYY"));

  return (
    <div className="filter">
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

          <Divider />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
            <InputLabel htmlFor="country-native-simple">Country</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              native
              value={country}
              label="Country"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              inputProps={{
                name: "country",
                id: "country-native-simple",
              }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
              <MenuItem value="Mexico">Mexico</MenuItem>
            </Select>
          </FormControl>
          <Divider />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date"
              inputFormat="MM/DD/YYYY"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => (
                <TextField variant="standard" {...params} />
              )}
            />
          </LocalizationProvider>
        </div>
        <Button variant="contained" sx={{ m: 1 }} startIcon={<FilterListIcon />}>
          Filter
        </Button>
      </form>
    </div>
  );
}

export default Filter;
