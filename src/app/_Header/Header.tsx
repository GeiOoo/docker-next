'use client';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import UserButton from './UserButton';

function Header() {
    const pathname = usePathname();
    const page = pathname.split('/')[0];
    const pageName = page !== '' ? page : 'Home';


    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{pageName}</Typography>
                <UserButton />
            </Toolbar>
        </AppBar>
    );
}

export default Header;
