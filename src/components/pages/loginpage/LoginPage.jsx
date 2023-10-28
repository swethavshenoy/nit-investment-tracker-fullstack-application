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
  Grid,
} from "@mui/material";
import { Email, VpnKey } from "@mui/icons-material";
import NITLogo from "../../../images/logo.jpg";
import CloseIcon from '@mui/icons-material/Close';
import { REACT_APP_API_BASE_URL } from '../../../env';
import { useDispatch } from 'react-redux';
import { loginPopup } from '../../../redux/loginPopupSlice';
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";

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
  // const [formData] = useState({
  //   email: "",
  //   password: "",
  // });

  const { register, handleSubmit, formState: { errors }, trigger } = useForm();
  const [showPassword] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const Login = async (formData, e) => {
    e.preventDefault();

    try {
      const authResponse = await axios.post(`http://localhost:9912/authapi/login`, formData);
      if (authResponse.status === 200) {
        const response = await axios.get(`${REACT_APP_API_BASE_URL}user-auth/user/${formData.email}`);
        if (response.status === 200) {
          let userDetails = response.data;
          delete userDetails.password
          localStorage.setItem('userDetails', JSON.stringify(userDetails));
          localStorage.setItem('token', JSON.stringify(authResponse.data.token));
          handleClose();
          navigate("/dashboard");
        } else {
          setLoginStatus(response.message || 'Login Failed. Please try again');
        }
      } else {
        setLoginStatus(authResponse.message || 'Login Failed. Please check your credentials');
      }
    } catch (error) {
      setLoginStatus((error?.response?.data?.messager)?.replace('_', ' ') || 'Login Failed. Please check your credentials');
    }
  };

  const handleClose = () => {
    dispatch(loginPopup(false));
  }

  const handleLogSignup = (e) => {
    dispatch(loginPopup(e));
  }

  return (
    <div style={styles.root}>
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
        <form onSubmit={handleSubmit(Login)} style={styles.form}>
          <Grid>
            <Grid>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                // onChange={handleChange}
                {...register('email', { required: true, pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/ })}
                error={errors.email}
                onKeyUp={() => {
                  trigger("email");
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
                style={styles.inputField}
              />
              <Typography variant='caption' color='error'>
                {errors.email?.type === 'required' && 'Email Address is required'}
                {errors.email?.type === 'pattern' && 'Please enter a valid email'}
              </Typography>
            </Grid>
            <Grid>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                // onChange={handleChange}
                {...register('password', { required: true })}

                error={errors.password}
                onKeyUp={() => {
                  trigger("password");
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VpnKey />
                    </InputAdornment>
                  ),
                }}
                style={styles.inputField}
              />
              <Typography variant='caption' color='error'>
                {errors.password?.type === 'required' && 'Password is required'}
              </Typography>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={styles.button}
          >
            Log in
          </Button>
        </form>
        <Box pt={3}>
          Don't have a NIT account?{" "}
          <Link onClick={() => handleLogSignup('signup')} style={{ color: "#5a287d" }}>
            <b>Sign up for free </b>
          </Link>
        </Box>
        <div>
        </div>
      </Container>
    </div >
  );
}
export default LoginPage;






