import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

function CountrySelect({ selectedCountry, setSelectedCountry }) {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountry(res.data);
    });
  }, []);

  return (
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
  );
}

export default CountrySelect;
