import { Menu, NotificationsActive } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
export default function Layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return <>
        <AppBar position='static'>
            <Toolbar>
                <Link href={'/service'}>
                    <IconButton>
                        <NotificationsActive />
                    </IconButton>
                </Link>
                <Typography flex={1} textAlign={'center'} variant='h6'>Orderflix</Typography>
                <IconButton>
                    <Menu />
                </IconButton>
            </Toolbar>
        </AppBar>
        {children}
    </>;
}
