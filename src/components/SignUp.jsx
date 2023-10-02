import React, { useState, useRef } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Button,
  TextField,
  Typography,
  Container,
  CssBaseline,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import TermsOfUse from "./TermsOfUse"; // Import the TermsOfUse component
import PrivacyPolicy from "./PrivacyPolicy";
import { Email, Phone, VpnKey, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import NITLogo from "../images/logo.png";

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
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "1rem",
  },
  checkboxLabel: {
    fontSize: "0.9rem",
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

const isEmailValid = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

const isPasswordValid = (password) => {
  return password.length >= 8;
};

const isMobileNumberValid = (mobileNumber) => {
  const numberPattern = /^[0-9]+$/;
  return numberPattern.test(mobileNumber) && mobileNumber.length === 10;
};

function Register({ showLinks }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobileNumber: "",
    accountNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState("");
  const [touchedFields, setTouchedFields] = useState({
    email: false,
    mobileNumber: false,
    password: false,
  });

  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFieldBlur = (fieldName) => {
    setTouchedFields({
      ...touchedFields,
      [fieldName]: true,
    });
  };
  const handleCheckboxChange = (e) => {
    setAgreedToTerms(e.target.checked);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmailFieldValid =
      !touchedFields.email || isEmailValid(formData.email);
    const isMobileNumberFieldValid =
      !touchedFields.mobileNumber || isMobileNumberValid(formData.mobileNumber);
    const isPasswordFieldValid =
      !touchedFields.password || isPasswordValid(formData.password);

    if (
      !isEmailFieldValid ||
      !isMobileNumberFieldValid ||
      !isPasswordFieldValid ||
      formData.confirmPassword !== formData.password ||
      !agreedToTerms // Check if the user has agreed to the terms
    ) {
      setRegistrationStatus("Registration failed. Please check your input.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8089/userreg",
        formData
      );
      console.log("Registration successful:", response.data);
      setRegistrationStatus("Registration successful");

      formRef.current.reset();

      setFormData({
        ...formData,
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Registration failed:", error);
      setRegistrationStatus("Registration failed");
    }
  };

  return (
    <div style={styles.root}>
      <Container component="main" style={styles.container}>
        <CssBaseline />
        <div style={styles.headerText}>
          <img src={NITLogo} alt="NIT Logo" style={styles.logo} />
          </div>
        <Typography variant="h4"><b>Sign Up to NIT</b></Typography>
        <Typography variant="body1" style={styles.signupMessage}>
          Free for one portfolio, upgrade anytime.
        </Typography>
        {registrationStatus && (
          <Typography variant="body1" style={styles.errorText}>
            {registrationStatus}
          </Typography>
        )}
        <form onSubmit={handleSubmit} style={styles.form} ref={formRef}>
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
            onBlur={() => handleFieldBlur("email")}
            error={!isEmailValid(formData.email) && touchedFields.email}
            helperText={
              touchedFields.email && !isEmailValid(formData.email)
                ? "Enter a valid email address"
                : ""
            }
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
            fullWidth
            id="username"
            label="Username"
            name="username"
            onChange={handleChange}
            style={styles.inputField}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="mobileNumber"
            label="Mobile Number"
            name="mobileNumber"
            onChange={handleChange}
            onBlur={() => handleFieldBlur("mobileNumber")}
            error={
              !isMobileNumberValid(formData.mobileNumber) &&
              touchedFields.mobileNumber
            }
            helperText={
              touchedFields.mobileNumber &&
              !isMobileNumberValid(formData.mobileNumber)
                ? "Enter a valid mobile number"
                : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone />
                </InputAdornment>
              ),
            }}
            style={styles.inputField}
            inputProps={{
              maxLength: 10,
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            autoComplete="new-password"
            type={showPassword ? "text" : "password"}
            id="password"
            onChange={handleChange}
            value={formData.password}
            onBlur={() => handleFieldBlur("password")}
            error={
              !isPasswordValid(formData.password) && touchedFields.password
            }
            helperText={
              touchedFields.password && !isPasswordValid(formData.password)
                ? "Password must be at least 8 characters long"
                : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKey />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </Button>
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
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            onChange={handleChange}
            error={
              formData.confirmPassword !== formData.password &&
              touchedFields.password
            }
            helperText={
              touchedFields.password &&
              formData.confirmPassword !== formData.password
                ? "Passwords do not match"
                : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
            style={styles.inputField}
          />

          <div style={styles.checkboxContainer}>
  <FormControlLabel
    control={
      <Checkbox
        id="termsCheckbox"
        checked={agreedToTerms}
        onChange={handleCheckboxChange}
        color="primary"
      />
    }
    label={
      <Typography variant="body2" style={styles.checkboxLabel}>
        I have read and agree to the <Link to="/terms">Terms of Use</Link> & <Link to="/privacy">Privacy Policy</Link>
      </Typography>
    }
  />
</div>


          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={styles.button}
            disabled={!agreedToTerms}
          >
            Register
          </Button>
        </form>

        {showLinks && (
          <div>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#4caf50" }}>
              <b>Login</b>
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Register;
