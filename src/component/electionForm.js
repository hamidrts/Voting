import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";

const departments = ["grocery", "meat", "paylue", "stock", "public"];
const statuses = ["open", "close", "planned", "cancel", "draft"];

export default function ElectionForm({
  department,
  setDepartment,
  name,
  setName,
  term,
  setTerm,
  startDate,
  setStartDate,
  finishDate,
  setFinishDate,
  status,
  setStatus,
}) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "30ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          
          required
          id="outlined-select-departmant"
          select
          label="Departmant"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
          helperText="Please select your departmant"
        >
          {departments.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="outlined-election-name"
          label="Election Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          id="outlined-number"
          label="Term"
          type="number"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Finish Date"
          type="date"
          value={finishDate}
          onChange={(event) => setFinishDate(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="outlined-select-status"
          select
          label="Status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          helperText="Please select current status"
        >
          {statuses.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
