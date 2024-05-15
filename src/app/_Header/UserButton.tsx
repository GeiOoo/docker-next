'use client';

import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { signOut } from 'next-auth/react';
import { useState } from 'react';

function UserButton() {
    const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);

    return <>
        <IconButton onClick={event => setAnchorElement(event.currentTarget)}>
            <Avatar />
        </IconButton>
        <Menu open={!!anchorElement} anchorEl={anchorElement} onClose={() => setAnchorElement(null)}>
            <MenuItem onClick={() => signOut()}>Logout</MenuItem>
        </Menu>
    </>;
}

export default UserButton;
