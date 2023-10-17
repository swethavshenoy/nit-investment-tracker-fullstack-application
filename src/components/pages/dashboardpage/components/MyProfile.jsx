import React, { useState } from 'react';
import { Container, Typography, Paper, Grid, TextField, Button, Avatar } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

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

const initialCustomerDetails = {
    profileId: '12345',
    firstName: 'John',
    lastName: 'Doe',
    gender: 'Male',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    address: '123 Main St, City, Country',
    dateOfBirth: '1990-01-01',
    bio: 'Web developer with a passion for coding and technology.',
};

const MyProfile = () => {
    const classes = useStyles();
    const [customerDetails, setCustomerDetails] = useState({ ...initialCustomerDetails });
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        // You can update the customer details on a server or in your state management system
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
                            value={customerDetails.profileId}
                            fullWidth
                            className={classes.textField}
                            disabled={!isEditing}
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
                            value={customerDetails.firstName}
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
                            value={customerDetails.lastName}
                            onChange={handleChange}
                            fullWidth
                            className={classes.textField}
                            disabled={!isEditing}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="email"
                            label="Email"
                            value={customerDetails.email}
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
                            value={customerDetails.phoneNumber}
                            onChange={handleChange}
                            fullWidth
                            className={classes.textField}
                            disabled={!isEditing}
                        />
                    </Grid>
                    <Grid item xs={6}>
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
                    <Grid item xs={12}>
                        <TextField
                            name="dateOfBirth"
                            label="Date of Birth"
                            type="date"
                            value={customerDetails.dateOfBirth}
                            onChange={handleChange}
                            fullWidth
                            className={classes.textField}
                            disabled={!isEditing}
                        />
                    </Grid>
                    {/* <Grid item xs={12}>
                        <TextField
                            name="bio"
                            label="Bio"
                            value={customerDetails.bio}
                            onChange={handleChange}
                            fullWidth
                            className={classes.textField}
                            multiline
                            disabled={!isEditing}
                        />
                    </Grid> */}
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
