import React from "react";
import { TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function DateInput({ date, setDate }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="Date"
        inputFormat="YYYY/MM/DD"
        value={date}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderInput={(params) => (
          <TextField variant="standard" {...params} sx={{ width: "85%" }} />
        )}
      />
    </LocalizationProvider>
  );
}

export default DateInput;
