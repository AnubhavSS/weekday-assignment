import React, { useState, useEffect } from "react";
import { Autocomplete, TextField, Stack } from "@mui/material";
import { Experience, BasePay, Location, JobRole } from "../../data";
const Filters = ({ filterOptions }) => {
  const [filters, setFilters] = useState({
    companyName: "",
  });

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
      <Stack flexWrap={"wrap"} flexDirection={"row"} gap={1} marginBottom={4}>
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
          sx={{ width: 250 }}
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

        {/* Job Role */}
        <Autocomplete
          id="jobRole"
          options={JobRole}
          groupBy={(option) => option.category}
          getOptionLabel={(option) => option.label}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="Roles" />}
          onSelect={(selectedOption) => handleSelect(selectedOption, "jobRole")}
        />

        {/* Company Name */}
        <TextField
          id="companyName"
          label="Company Name"
          variant="outlined"
          value={filters.companyName}
          onChange={(e) =>
            setFilters({ ...filters, companyName: e.target.value })
          }
        />
      </Stack>
    </div>
  );
};

export default Filters;
