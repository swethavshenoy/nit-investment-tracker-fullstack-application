import React, { useState, useRef } from "react";
import axios from "axios";
import { Grid, IconButton, InputAdornment } from "@mui/material";
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
import { Email, Phone, VpnKey, Lock } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import NITLogo from "../../../images/logo.jpg";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from "react-redux";
import { loginPopup } from '../../../redux/loginPopupSlice';
import HomeIcon from '@mui/icons-material/Home';
import SnackAlert from "../../shared/SnackAlert";
import { loader } from "../../../redux/loaderSlice";
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


function Register({ showLinks }) {
    // const [formData, setFormData] = useState({
    //     profileid: Math.floor(Math.random() * 100000) + 1,
    //     username: "",
    //     fname: "",
    //     lname: "",
    //     gender: "",
    //     emailid: "",
    //     phoneno: "",
    //     address: "",
    //     password: "",
    //     confirmPassword: "",
    //     usertype: "Free"
    // });

    const [showPassword] = useState(false);
    const [registrationStatus, setRegistrationStatus] = useState("");
    const dispatch = useDispatch();

    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');

    const formRef = useRef(null);

    // const handleChange = (e) => {
    //     console.log(e.target.value);
    //     console.log(e.target.name);
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value,
    //     });
    // };

    // const handleFieldBlur = (fieldName) => {
    //     setTouchedFields({
    //         ...touchedFields,
    //         [fieldName]: true,
    //     });
    // };
    const handleCheckboxChange = (e) => {
        setAgreedToTerms(e.target.checked);
    };
    const Signup = async (formData, e) => {
        e.preventDefault();

        // const isEmailFieldValid =
        //     !touchedFields.email || isEmailValid(formData.emailid);
        // const isMobileNumberFieldValid =
        //     !touchedFields.mobileNumber || isMobileNumberValid(formData.mobileNumber);
        // const isPasswordFieldValid =
        //     !touchedFields.password || isPasswordValid(formData.password);

        // if (
        //     !isEmailFieldValid ||
        //     !isMobileNumberFieldValid ||
        //     !isPasswordFieldValid ||
        //     formData.confirmPassword !== formData.password ||
        //     !agreedToTerms // Check if the user has agreed to the terms
        // ) {
        //     setRegistrationStatus("Registration failed. Please check your input.");
        //     return;
        // }

        try {
            console.log(formData);
            formData.usertype = "Free"
            formData.profileid = Math.floor(Math.random() * 100000) + 1;
            await axios.post("http://localhost:9912/authapi/save", formData);
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

            // setFormData({
            //     ...formData,
            //     password: "",
            //     confirmPassword: "",
            // });
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

    const { register, handleSubmit, getValues, formState: { errors }, trigger } = useForm();

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
                <form onSubmit={handleSubmit(Signup)} style={styles.form} ref={formRef}>
                    <Grid>
                        <Grid>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="emailid"
                                label="Email Address"
                                name="emailid"
                                type="email"
                                autoFocus
                                // onChange={handleChange}
                                // onBlur={() => handleFieldBlur("emailid")}
                                // error={!isEmailValid(formData.email) && touchedFields.email}
                                // helperText={
                                //     touchedFields.email && !isEmailValid(formData.email)
                                //         ? "Enter a valid email address"
                                //         : ""
                                // }
                                {...register('emailid', { required: true, pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/ })}
                                error={errors.emailid}
                                onKeyUp={() => {
                                    trigger("emailid");
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
                                {errors.emailid?.type === 'required' && 'Email Address is required'}
                                {errors.emailid?.type === 'pattern' && 'Please enter a valid email'}
                            </Typography>
                        </Grid>
                        <Grid>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="fname"
                                label="First Name"
                                name="fname"
                                // onChange={handleChange}
                                {...register('fname', { required: true, pattern: /^[A-Za-z]{3,25}$/ })}

                                error={errors.fname}
                                onKeyUp={() => {
                                    trigger("fname");
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                style={styles.inputField}
                            />
                            <Typography variant='caption' color='error'>
                                {errors.fname?.type === 'required' && 'First Name is required'}
                                {errors.fname?.type === 'pattern' && 'Please use only alphabets, it should be between 3-25 characters'}
                            </Typography>
                        </Grid>
                        <Grid>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="lname"
                                label="Last Name"
                                name="lname"
                                required
                                // onChange={handleChange}
                                {...register('lname', { required: true, pattern: /^[A-Za-z]{1,25}$/ })}

                                error={errors.lname}
                                onKeyUp={() => {
                                    trigger("lname");
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                style={styles.inputField}
                            />
                            <Typography variant='caption' color='error'>
                                {errors.lname?.type === 'required' && 'Last Name is required'}
                                {errors.lname?.type === 'pattern' && 'Please use only alphabets'}
                            </Typography>
                        </Grid>
                        {/* <Grid>
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
                                {...register("gender", { required: true })}
                            // onChange={handleChange}
                            >
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                                <MenuItem value="other">Other</MenuItem>

                                <MenuItem value="" disabled>Select Option</MenuItem>
                                <MenuItem value="1">Male</MenuItem>
                                <MenuItem value="2">Female</MenuItem>
                                <MenuItem value="3">Other</MenuItem>
                            </TextField>
                        </Grid> */}
                        <Grid>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="phoneno"
                                label="Mobile Number"
                                name="phoneno"
                                // onChange={handleChange}
                                // onBlur={() => handleFieldBlur("phoneno")}
                                // error={
                                //     !isMobileNumberValid(formData.phoneno) &&
                                //     touchedFields.phoneno
                                // }
                                // helperText={
                                //     touchedFields.phoneno &&
                                //         !isMobileNumberValid(formData.phoneno)
                                //         ? "Enter a valid mobile number"
                                //         : ""
                                // }
                                {...register('phoneno', { required: true, pattern: /^[\d-]\d{09}$/ })}

                                error={errors.phoneno}
                                onKeyUp={() => {
                                    trigger("phoneno");
                                }}
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
                            <Typography variant='caption' color='error'>
                                {errors.phno?.type === 'required' && 'Phone number is required'}
                                {errors.phno?.type === 'pattern' && 'Please enter 10 digit mobile number'}
                            </Typography>
                        </Grid>
                        <Grid>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="address"
                                label="Address"
                                name="address"
                                // onChange={handleChange}
                                {...register('address', { required: true, pattern: /^.{10,50}$/ })}

                                error={errors.address}
                                onKeyUp={() => {
                                    trigger("address");
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <HomeIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                style={styles.inputField}
                            />
                            <Typography variant='caption' color='error'>
                                {errors.address?.type === 'required' && 'Address is required'}
                                {errors.address?.type === 'pattern' && 'Please enter between 10-50 characters '}
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
                                autoComplete="new-password"
                                type={showPassword ? "text" : "password"}
                                id="password"
                                // onChange={handleChange}
                                // value={formData.password}
                                // onBlur={() => handleFieldBlur("password")}
                                // error={
                                //     !isPasswordValid(formData.password) && touchedFields.password
                                // }
                                // helperText={
                                //     touchedFields.password && !isPasswordValid(formData.password)
                                //         ? "Password must be at least 8 characters long"
                                //         : ""
                                // }
                                {...register('password', { required: true, pattern: /^(?=.*[\d-])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%^&])(?!.* ).{8,20}$/ })}

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
                                    // endAdornment: (
                                    //     <InputAdornment position="sticky">
                                    //         <Button
                                    //             onClick={() => setShowPassword(!showPassword)}
                                    //             edge="end"
                                    //         >
                                    //             {showPassword ? <Visibility /> : <VisibilityOff />}
                                    //         </Button>
                                    //     </InputAdornment>
                                    // ),
                                }}
                                style={styles.inputField}
                            />
                            <Typography variant='caption' color='error'>
                                {errors.password?.type === 'required' && 'Password is required'}
                                {errors.password?.type === 'pattern' && 'password should contain atleast 8 characters.Must Contain 1 uppercase, 1 lowercase, 1 numeric and atleast 1 symbols ( @, #, %, ^, &)'}
                            </Typography>
                        </Grid>
                        <Grid>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmPassword"
                                // onChange={handleChange}
                                // error={
                                //     formData.confirmPassword !== formData.password &&
                                //     touchedFields.password
                                // }
                                // helperText={
                                //     touchedFields.password &&
                                //         formData.confirmPassword !== formData.password
                                //         ? "Passwords do not match"
                                //         : ""
                                // }
                                {...register('cnfpassword', {
                                    required: true,
                                    validate: (value) => {
                                        const { password } = getValues();
                                        return password === value || "Passwords should match!";
                                    }
                                })}
                                error={errors.cnfpassword}
                                onKeyUp={() => {
                                    trigger("cnfpassword");
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock />
                                        </InputAdornment>
                                    ),
                                }}
                                style={styles.inputField}
                            />
                            <Typography variant='caption' color='error'>
                                {errors.cnfpassword?.type === 'required' && 'Confirm password is Required'}
                                {errors.cnfpassword?.type === 'validate' && 'Your password should match'}
                            </Typography>
                        </Grid>
                    </Grid>
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
        </div >
    );
}

export default Register;
