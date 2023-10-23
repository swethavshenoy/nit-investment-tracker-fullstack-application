import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Typography,
  Container,
  CssBaseline,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Email, VpnKey } from "@mui/icons-material";
import NITLogo from "../../../images/logo.jpg";
import CloseIcon from '@mui/icons-material/Close';
import { REACT_APP_API_BASE_URL } from '../../../env';
import { useDispatch } from 'react-redux';
import { loginPopup } from '../../../redux/loginPopupSlice';
import { stockItem } from '../../../redux/stockSlice'
import SnackAlert from "../../shared/SnackAlert";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  container: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
    position: "relative"
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

  const [showPassword] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleWatchList = async () => {
  //   handleClose();
  //   navigate("/dashboard");
  // }

  async function handleWatchList() {
    const response = await axios.get(`${REACT_APP_API_BASE_URL}watchlist/`);
    if (response) {
      dispatch(stockItem(response.data));
      handleClose();
      navigate("/dashboard");
    } else {
      setOpenAlert(true);
      setAlertMsg("Oops..Something went wrong");
    }
  }
  const handleCloseAlert = () => {
    setOpenAlert(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`${REACT_APP_API_BASE_URL}user-auth/user/${formData.email}`);
      if (response.data.password === formData.password) {
        localStorage.setItem('userDetails', JSON.stringify(response.data));
        setLoginStatus("Login successful");
        handleWatchList();
      } else {
        setLoginStatus("Incorrect Password");
      }

      // Redirect to a different page after successful login if needed
    } catch (error) {
      setLoginStatus(error?.response?.data?.message || 'Login Failed. Please check your credentials');
    }
  };

  const handleClose = () => {
    dispatch(loginPopup(false));
  }

  return (
    <div style={styles.root}>
      <SnackAlert openAlert={openAlert} handleClose={handleCloseAlert} msg={alertMsg} />
      <Container component="main" style={styles.container}>
        <IconButton sx={{ position: 'absolute', top: 10, right: 10 }}
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <CssBaseline />
        <div style={styles.headerText}>
          <img src={NITLogo} alt="NIT Logo" style={styles.logo} />
        </div>
        <Typography variant="h5">
          <b>Login to NIT</b>
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






