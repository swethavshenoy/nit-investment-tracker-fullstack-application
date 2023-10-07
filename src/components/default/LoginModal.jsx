import React from 'react'
import { Modal } from '@mui/material';

import LoginPage from '../pages/loginpage/LoginPage';
const LoginModal = (props) => {
    const { showLogin, handleClose } = props;
    return (
        <>

            <Modal
                open={showLogin}
                onClose={handleClose}

                sx={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(39, 62, 84, 0.82)', width: '100%', height: '100%' }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <LoginPage handleClose={handleClose} />
            </Modal>
        </>
    )
}

export default LoginModal