import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSignup } from "../hooks/useSignup";
import MenuItem from "@mui/material/MenuItem";

const departments = ["grocery", "meat", "paylue", "stock", "public", "none"];

function Sighup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    department: "",
    userImage: "",
    password: "",
  });

  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(
      user.name,
      user.email,
      user.department,
      user.userImage,
      user.password
    );
  };

  return (
    <div>
      <div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: "300px",
              minHeight: "300px",
              alignItems: "center",
              position: "fixed",
              top: "50%",
              left: "50%",
              background: "white",
              borderRadius: "5px",
              marginLeft: "-150px",
              marginTop: "-150px",
            }}
          >
            <TextField
              style={{ marginTop: "25px" }}
              label="Name"
              type="text"
              autoComplete="current-password"
              onChange={(e) => {
                setUser((p) => {
                  return { ...p, name: e.target.value };
                });
              }}
              value={user.name}
            />
            <TextField
              style={{ marginTop: "25px" }}
              label="Email"
              type="email"
              autoComplete="current-password"
              onChange={(e) => {
                setUser((p) => {
                  return { ...p, email: e.target.value };
                });
              }}
              value={user.email}
            />
            <TextField
              style={{ marginTop: "25px" }}
              label="Department"
              select
              onChange={(e) => {
                setUser((p) => {
                  return { ...p, department: e.target.value };
                });
              }}
              value={user.department}
            >
              {departments.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              style={{ marginTop: "25px" }}
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => {
                setUser((p) => {
                  return { ...p, password: e.target.value };
                });
              }}
              value={user.password}
            />

            <Button
              onClick={handleSubmit}
              disabled={isLoading}
              variant="contained"
            >
              Sign up{" "}
            </Button>
            {error && <div style={{ marginTop: "25px" }}>{error}</div>}
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Sighup;
