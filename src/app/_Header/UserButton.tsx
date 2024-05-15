'use client';

import { Avatar, IconButton } from '@mui/material';
import { useState } from 'react';
import UserDrawer from './UserDrawer';

function UserButton() {
    const [openSideMenu, setOpenSideMenu] = useState(false);

    return <>
        <IconButton onClick={() => setOpenSideMenu(true)} >
            <Avatar />
        </IconButton>
        <UserDrawer open={openSideMenu} onClose={() => setOpenSideMenu(false)} />
    </>;
}

export default UserButton;
