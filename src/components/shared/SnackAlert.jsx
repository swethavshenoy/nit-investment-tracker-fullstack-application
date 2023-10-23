import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackAlert = (props) => {
    const { openAlert, handleClose, msg, severity } = props;

    return (
        <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity || "warning"}
                sx={{ width: '100%' }}>
                {msg}
            </Alert>
        </Snackbar>
    )
}

export default SnackAlert