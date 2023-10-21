import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, Grid, TextField, Button, Avatar } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { REACT_APP_API_BASE_URL } from '../../../../env';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(3),
    },
    textField: {
        marginBottom: theme.spacing(2),
    },
}));

const MyProfile = () => {
    const classes = useStyles();
    // const [customerDetails, setCustomerDetails] = useState({ ...initialCustomerDetails });
    const [customerDetails, setCustomerDetails] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        getProfileData();
    }, []);

    const userData = JSON.parse(localStorage.getItem('userDetails'));

    async function getProfileData() {
        const response = await axios.get(`${REACT_APP_API_BASE_URL}user-auth/user/${userData.emailid}`);
        if (response) {
            console.log(response.data);
            setCustomerDetails({ ...response.data })
        } else {
            alert('something went wrong');
        }
    }

    const handleEdit = () => {
        setIsEditing(true);
    };

    async function handleSaveProfile(data) {
        try {
            const response = await axios.put(`https://cors-anywhere.herokyapp.com/${REACT_APP_API_BASE_URL}user-auth/update-user`, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    'Access-control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin, Authorization'
                }
            }, data);
            if (response.status === 200) {
                alert("Profile updated successfully");
            } else {
                alert('Something went wrong');
            }
        } catch (error) {
            console.error("An error occurred:", error);
            alert('Something went wrong');
        }
    }

    const handleSave = () => {
        setIsEditing(false);
        // You can update the customer details on a server or in your state management system
        console.log(customerDetails);
        handleSaveProfile(customerDetails);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCustomerDetails({
            ...customerDetails,
            [name]: value,
        });
    };

    return (
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align='center' color="#5a287d" gutterBottom>
                    <Grid item xs={4} align='center'>
                        <Avatar src="/path-to-avatar-image.jpg" alt="User Avatar" className={classes.avatar} />
                    </Grid>
                    My Profile
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            name="profileId"
                            label="Profile ID"
                            value={customerDetails.profileid}
                            fullWidth
                            className={classes.textField}
                            disabled='true'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="gender"
                            label="Gender"
                            type="text"
                            value={customerDetails.gender}
                            onChange={handleChange}
                            fullWidth
                            className={classes.textField}
                            disabled={!isEditing}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="firstName"
                            label="First Name"
                            value={customerDetails.fname}
                            onChange={handleChange}
                            fullWidth
                            className={classes.textField}
                            disabled={!isEditing}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="lastName"
                            label="Last Name"
                            value={customerDetails.lname}
                            onChange={handleChange}
                            fullWidth
                            className={classes.textField}
                            disabled={!isEditing}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="email"
                            label="Email"
                            value={customerDetails.emailid}
                            onChange={handleChange}
                            fullWidth
                            className={classes.textField}
                            disabled={!isEditing}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="phoneNumber"
                            label="Phone Number"
                            value={customerDetails.phoneno}
                            onChange={handleChange}
                            fullWidth
                            className={classes.textField}
                            disabled={!isEditing}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="address"
                            label="Address"
                            value={customerDetails.address}
                            onChange={handleChange}
                            fullWidth
                            className={classes.textField}
                            disabled={!isEditing}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="dateOfBirth"
                            label="Date of Birth"
                            type="date"
                            value={customerDetails.dob}
                            onChange={handleChange}
                            fullWidth
                            className={classes.textField}
                            disabled={!isEditing}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="usertype"
                            label="User Type"
                            value={customerDetails.usertype}
                            onChange={handleChange}
                            fullWidth
                            className={classes.textField}
                            multiline
                            disabled='true'
                        />
                    </Grid>
                    {isEditing ? (
                        <Button variant="contained" color="primary" onClick={handleSave}>
                            Save
                        </Button>
                    ) : (
                        <Button variant="contained" color="primary" onClick={handleEdit}>
                            Edit
                        </Button>
                    )}
                </Grid>
            </Paper>
        </Container>
    );
};

export default MyProfile;
