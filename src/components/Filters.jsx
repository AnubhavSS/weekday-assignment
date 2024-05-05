import React, { useState, useEffect } from "react";
import { Autocomplete, TextField, Stack } from "@mui/material";
import { Experience, BasePay, Location } from "../../data";
const Filters = ({ filterOptions }) => {
  const [filters, setFilters] = useState({});

  useEffect(() => {
    // This effect will execute whenever filters state changes
    filterOptions(filters);
  }, [filters]); // This dependency array ensures that the effect runs whenever filters state changes

  const handleSelect = (selectedOption, id) => {
    const selectedValue = selectedOption?.target?.value;

    // Update the filters state based on the id of the Autocomplete component
    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: selectedValue,
    }));
  };

  return (
    <div>
      <Stack flexWrap={"wrap"} flexDirection={"row"} gap={1}>
        {/* Experience  */}
        <Autocomplete
          id="minExp"
          disablePortal
          options={Experience}
          sx={{ width: 130 }}
          renderInput={(params) => <TextField {...params} label="Experience" />}
          onSelect={(selectedOption) => handleSelect(selectedOption, "minExp")}
        />

        {/* Base Pay */}
        <Autocomplete
          id="minJdSalary"
          disablePortal
          options={BasePay}
          sx={{ width: 200 }}
          renderInput={(params) => (
            <TextField {...params} label="Minimum Base Pay Salary" />
          )}
          onSelect={(selectedOption) =>
            handleSelect(selectedOption, "minJdSalary")
          }
        />

        {/* Location */}
        <Autocomplete
          id="location"
          disablePortal
          options={Location}
          sx={{ width: 150 }}
          renderInput={(params) => <TextField {...params} label="Location" />}
          onSelect={(selectedOption) =>
            handleSelect(selectedOption, "location")
          }
        />
      </Stack>
    </div>
  );
};

export default Filters;
