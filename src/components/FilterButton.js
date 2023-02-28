import React from "react";
import Button from "@mui/material/Button";
import FilterListIcon from "@mui/icons-material/FilterList";

function FilterButton({ filterEmployees }) {
  return (
    <Button
      variant="contained"
      sx={{ m: 1 }}
      startIcon={<FilterListIcon />}
      onClick={filterEmployees}
    >
      Filter
    </Button>
  );
}

export default FilterButton;
