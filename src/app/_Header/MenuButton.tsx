'use client';
import { Close, Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useContext } from 'react';
import { NavContext } from '../_Nav/NavContextProvider';

function MenuButton() {
    const { isOpen, toggleMenu } = useContext(NavContext);
    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleMenu()}
            sx={{ mr: 2 }}
        >
            {isOpen ? <Close /> : <Menu />}
        </IconButton>
    );
}

export default MenuButton;
