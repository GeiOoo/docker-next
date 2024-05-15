import { AppBar, CircularProgress, Toolbar, Typography } from '@mui/material';
import { Suspense } from 'react';
import MenuButton from './MenuButton';
import UserButton from './UserButton';

async function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <MenuButton />
                <Typography flex={1} variant="h6" component="div">Home</Typography>
                <Suspense fallback={<CircularProgress />}>
                    <UserButton />
                </Suspense>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
