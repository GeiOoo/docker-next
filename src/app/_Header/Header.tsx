import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, CircularProgress, IconButton, Toolbar, Typography } from '@mui/material';
import { getServerSession } from 'next-auth';
import { Suspense } from 'react';
import UserButton from './UserButton';

async function Header() {
    const session = await getServerSession();

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
                <Typography flex={1} variant="h6" component="div">Home</Typography>
                <Suspense fallback={<CircularProgress />}>
                    <UserButton session={session} />
                </Suspense>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
