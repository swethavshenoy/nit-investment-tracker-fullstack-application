import React from 'react'
import { Modal } from '@mui/material';
import LoginPage from '../pages/loginpage/LoginPage';
import { useSelector } from 'react-redux';
import SignUp from '../pages/signuppage/SignUp';

const LoginModal = () => {
    const showLogin = useSelector((state) => state.loginPopup);

    return (
        <>
            <Modal
                open={showLogin}
                sx={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(39, 62, 84, 0.82)', width: '100%', height: '100%' }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {showLogin === 'login' ? <LoginPage /> : <SignUp />}
            </Modal>
        </>
    )
}

export default LoginModal