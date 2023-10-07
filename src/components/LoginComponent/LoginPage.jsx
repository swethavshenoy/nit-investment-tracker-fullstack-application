import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button,
  TextField,
  Typography,
  Container,
  CssBaseline,
  InputAdornment,
} from "@mui/material";
import { Email, VpnKey } from "@mui/icons-material";
import NITLogo from "../LoginComponent/images/logo.png";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
  },
  container: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  logo: {
    width: "80px",
    marginBottom: "1rem",
  },
  headerText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginBottom: "2rem",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputField: {
    marginBottom: "1rem",
  },
  button: {
    backgroundColor: "purple",
    color: "white",
    "&:hover": {
      backgroundColor: "#45a049",
    },
  },
  errorText: {
    color: "red",
    marginBottom: "1rem",
  },
};

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8089/login", // Adjust the login endpoint
        formData
      );
      console.log("Login successful:", response.data);
      setLoginStatus("Login successful");

      // Redirect to a different page after successful login if needed
    } catch (error) {
      console.error("Login failed:", error);
      setLoginStatus("Login failed");
    }
  };

  return (
    <div style={styles.root}>
      <Container component="main" style={styles.container}>
        <CssBaseline />
        <div style={styles.headerText}>
          <img src={NITLogo} alt="NIT Logo" style={styles.logo} />
        </div>
        <Typography variant="h5">
          <b>Log in to NIT</b>
        </Typography>
        {loginStatus && (
          <Typography variant="body1" style={styles.errorText}>
            {loginStatus}
          </Typography>
        )}
        <form onSubmit={handleSubmit} style={styles.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
            style={styles.inputField}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKey />
                </InputAdornment>
              ),
            }}
            style={styles.inputField}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={styles.button}
          >
            Log in
          </Button>
        </form>
        <div>
          Don't have a NIT account?{" "}
          <Link to="/register" style={{ color: "#4caf50" }}>
            <b>Sign up for free </b>
          </Link>
        </div>
        <div>
  <Link to="/forgot-password" style={{ color: "#45a049" }}>
    <b>Forgot Password?</b>
  </Link>
</div>
      </Container>
    </div>
  );
}
export default LoginPage;






