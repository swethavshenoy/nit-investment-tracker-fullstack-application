import React from 'react';
import { Button, Menu, MenuItem, Fade } from '@mui/material';

const MenuDrop = (props) => {
    const { children, open, handleClick, anchorEl, handleClose, navItems, handleNavigate } = props;
    return (
        <>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {children}
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                {navItems.map((item, index) => <MenuItem key={index} onClick={() => handleNavigate(item)}>{item.name}</MenuItem>)}
            </Menu>
        </>
    )
}

export default MenuDrop