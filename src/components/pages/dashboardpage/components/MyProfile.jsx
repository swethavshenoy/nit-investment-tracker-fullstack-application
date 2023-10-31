import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, Grid, TextField, Button, Avatar } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import SnackAlert from '../../../shared/SnackAlert';
import { useDispatch, useSelector } from 'react-redux';
import { REACT_APP_API_BASE_URL } from '../../../../env';
import { useQuery } from 'react-query';
import { myprofileItem } from '../../../../redux/myprofileSlice';
import { loader } from '../../../../redux/loaderSlice';
import { isEmpty } from 'lodash';

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
    const dispatch = useDispatch();
    const [customerDetails, setCustomerDetails] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('');

    const myprofileData = useSelector((state) => state.myprofile);
    const userData = JSON.parse(localStorage.getItem('userDetails'));

    useEffect(() => {
        setCustomerDetails(myprofileData);
    }, [myprofileData])

    const handleEdit = () => {
        setIsEditing(true);
    };

    const retrieveMyprofile = async () => {
        const response = await axios.get(`${REACT_APP_API_BASE_URL}user-auth/user/${userData.emailid}`);
        return response.data;
    }

    const { isLoading: loaderMyprofile } = useQuery("myprofile", retrieveMyprofile, {
        enabled: isEmpty(myprofileData),
        onSuccess: (data) => dispatch(myprofileItem(data)),
        onError: (error) => { setOpenAlert(true); setAlertMsg(error.message) }
    });

    dispatch(loader(loaderMyprofile));

    async function handleSaveProfile(data) {
        try {
            const response = await axios.put(`http://localhost:9972/user-auth/update-user`, data);
            if (response.status === 202) {
                setOpenAlert(true);
                setAlertSeverity('success');
                setAlertMsg(`Profile updated successfully`);
                localStorage.setItem('userDetails', JSON.stringify(data));
                dispatch(myprofileItem(data))
            } else {
                setOpenAlert(true);
                setAlertMsg("Oops..Something went wrong");
            }
        } catch (error) {
            setOpenAlert(true);
            setAlertMsg("Oops..Something went wrong");
        }
    }

    const handleClose = () => {
        setOpenAlert(false);
    }

    const handleSave = () => {
        setIsEditing(false);
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
            <SnackAlert openAlert={openAlert} handleClose={handleClose} msg={alertMsg} severity={alertSeverity} />
            <Paper className={classes.paper}>
                <Typography variant="h4" align='center' color="#5a287d" gutterBottom>
                    <Grid item xs={4} align='center' sx={{ pb: 2 }}>
                        {/* <Avatar src="/path-to-avatar-image.jpg" alt="User Avatar" className={classes.avatar} /> */}
                        <Avatar src="/broken-image.jpg" />
                    </Grid>
                    My Profile
                </Typography>
                <Grid container spacing={2} sx={{ pt: 5 }}>
                    <Grid item xs={6}>
                        <TextField
                            name="profileId"
                            label="Profile ID"
                            value={customerDetails.profileid}
                            fullWidth
                            className={classes.textField}
                            disabled='true'
                            InputLabelProps={{ shrink: true }}
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
                            InputLabelProps={{ shrink: true }}
                        />
                        {/* <FormControl fullWidth>
                            <InputLabel id="gender">Gender</InputLabel>
                            <Select
                                labelId="gender"
                                name="gender"
                                label="Gender"
                                value={customerDetails.gender}
                                disabled={!isEditing}
                                InputLabelProps={{ shrink: true }}
                                onChange={handleChange}
                            >
                                <MenuItem value={'Male'}>Male</MenuItem>
                                <MenuItem value={'Female'}>Female</MenuItem>
                                <MenuItem value={'Other'}>Other</MenuItem>
                            </Select>
                        </FormControl> */}
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            name="fname"
                            label="First Name"
                            value={customerDetails.fname}
                            onChange={handleChange}
                            fullWidth
                            className={classes.textField}
                            disabled={!isEditing}
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="lname"
                            label="Last Name"
                            value={customerDetails.lname}
                            onChange={handleChange}
                            fullWidth
                            className={classes.textField}
                            disabled={!isEditing}
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="emailid"
                            label="Email"
                            value={customerDetails.emailid}
                            onChange={handleChange}
                            fullWidth
                            className={classes.textField}
                            disabled={!isEditing}
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="phoneno"
                            label="Phone Number"
                            value={customerDetails.phoneno}
                            onChange={handleChange}
                            fullWidth
                            className={classes.textField}
                            disabled={!isEditing}
                            InputLabelProps={{ shrink: true }}
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
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="dob"
                            label="Date of Birth"
                            type="date"
                            value={customerDetails.dob}
                            onChange={handleChange}
                            fullWidth
                            className={classes.textField}
                            disabled={!isEditing}
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="usertype"
                            label="User Type"
                            value={customerDetails.usertype}
                            fullWidth
                            className={classes.textField}
                            multiline
                            disabled='true'
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    {isEditing ?
                        <Button variant="contained" color="primary" onClick={handleSave}>
                            Save
                        </Button>
                        : (
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
