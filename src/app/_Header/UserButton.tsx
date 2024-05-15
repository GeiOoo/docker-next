'use client';

import { Avatar, IconButton, Typography } from '@mui/material';
import { Session } from 'next-auth';
import { useState } from 'react';
import UserDrawer from './UserDrawer';

function UserButton({ session }: {
    session: Session | null;
}) {
    const [openSideMenu, setOpenSideMenu] = useState(false);

    return <>
        <Typography variant="body1" sx={{ p: 2 }}>Account: {session?.user?.name}</Typography>
        <IconButton onClick={() => setOpenSideMenu(true)} >
            <Avatar />
        </IconButton>
        <UserDrawer open={openSideMenu} onClose={() => setOpenSideMenu(false)} />
    </>;
}

export default UserButton;
