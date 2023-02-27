import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import moment from "moment";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FilterListIcon from "@mui/icons-material/FilterList";

import Divider from "./Divider";

function Filter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [date, setDate] = useState(moment().format("MM/DD/YYYY"));

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
      });
  }, []);

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
            <InputLabel id="country-native-simple">Country</InputLabel>
            <Select
              labelId="country-native-simple"
              value={selectedCountry}
              label="Country"
              onChange={(e) => {
                setSelectedCountry(e.target.value);
              }}
            >
              {country.map((data) => (
                <MenuItem key={data.cca3} value={data.cca3}>
                  {data.name.common}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Divider />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date"
              inputFormat="YYYY/MM/DD"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => (
                <TextField variant="standard" {...params} sx={{width: '88%'}}  />
              )}
            />
          </LocalizationProvider>
        </div>
        <Button
          variant="contained"
          sx={{ m: 1 }}
          startIcon={<FilterListIcon />}
          onClick={() => {
            fetch(
              `http://localhost:3000/employees?email=${email}&name=${name}&phone=${phone}&country=${selectedCountry}&date=${date}`
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              });
          }}
        >
          Filter
        </Button>
      </form>
    </div>
  );
}

export default Filter;
