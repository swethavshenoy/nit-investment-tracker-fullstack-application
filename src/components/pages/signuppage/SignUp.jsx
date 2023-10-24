import React, { useState, useRef } from "react";
import axios from "axios";
import { IconButton, InputAdornment, MenuItem } from "@mui/material";
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
import { Email, Phone, VpnKey, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import WcIcon from '@mui/icons-material/Wc';
import NITLogo from "../../../images/logo.jpg";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from "react-redux";
import { loginPopup } from '../../../redux/loginPopupSlice';
import HomeIcon from '@mui/icons-material/Home';
import SnackAlert from "../../shared/SnackAlert";
import { loader } from "../../../redux/loaderSlice";

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
        position: "relative",
        maxHeight: '550px',
        overflow: 'auto'
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
        textAlign: "left"
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
        profileid: Math.floor(Math.random() * 100000) + 1,
        username: "",
        email: "",
        mobileNumber: "",
        accountNumber: "",
        password: "",
        confirmPassword: "",
        usertype: "Free"
    });

    const [showPassword, setShowPassword] = useState(false);
    const [registrationStatus, setRegistrationStatus] = useState("");
    const [touchedFields, setTouchedFields] = useState({
        emailid: false,
        mobileNumber: false,
        password: false,
    });
    const dispatch = useDispatch();

    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');

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
            await axios.post("http://localhost:9972/user-auth/save-user", formData);
            // setRegistrationStatus("Registration successful");
            setOpenAlert(true);
            setAlertMsg(`Hi ${formData.fname}, your account is registered successfully, Please wait you will be redirected now to login page.`);
            dispatch(loader(true));
            setTimeout(() => {
                handleClose();
                dispatch(loginPopup('login'));
                dispatch(loader(false));
            }, 3000);

            formRef.current.reset();

            setFormData({
                ...formData,
                password: "",
                confirmPassword: "",
            });
        } catch (error) {
            setRegistrationStatus("Registration failed");
        }
    };

    const handleClose = () => {
        dispatch(loginPopup(''));
    }

    const handleCloseAlert = () => {
        setOpenAlert(false);
    }

    return (
        <div style={styles.root}>
            <SnackAlert openAlert={openAlert} handleClose={handleCloseAlert} msg={alertMsg} severity={'success'} />
            <Container className='scroll-bar' component="main" style={styles.container}>
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
                <Typography variant="h5"><b>Sign Up to NIT</b></Typography>
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
                        id="emailid"
                        label="Email Address"
                        name="emailid"
                        type="email"
                        onChange={handleChange}
                        onBlur={() => handleFieldBlur("emailid")}
                        error={!isEmailValid(formData.email) && touchedFields.emailid}
                        helperText={
                            touchedFields.emailid && !isEmailValid(formData.email)
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
                        id="fname"
                        label="First Name"
                        name="fname"
                        required
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }}
                        style={styles.inputField}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="lname"
                        label="Last Name"
                        name="lname"
                        required
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }}
                        style={styles.inputField}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        select
                        id="gender"
                        label="Gender"
                        name="gender"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <WcIcon />
                                </InputAdornment>
                            ),
                        }}
                        style={styles.inputField}
                        onChange={handleChange}
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </TextField>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="phoneno"
                        label="Mobile Number"
                        name="phoneno"
                        onChange={handleChange}
                        onBlur={() => handleFieldBlur("phoneno")}
                        error={
                            !isMobileNumberValid(formData.phoneno) &&
                            touchedFields.phoneno
                        }
                        helperText={
                            touchedFields.phoneno &&
                                !isMobileNumberValid(formData.phoneno)
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
                        fullWidth
                        id="address"
                        label="Address"
                        name="address"
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <HomeIcon />
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
                                <InputAdornment position="sticky">
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
