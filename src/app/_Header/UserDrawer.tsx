import { Logout } from '@mui/icons-material';
import { Avatar, Drawer, IconButton, ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';

function UserDrawer(props: {
    open: boolean;
    onClose: () => void;
}) {
    const session = useSession();

    return (
        <Drawer open={props.open} onClose={() => props.onClose()} anchor='right'>
            <Stack flex={1} gap={.5} minWidth={200} >
                <ListItem>
                    <ListItemIcon>
                        <Avatar />
                    </ListItemIcon>
                    <ListItemText primary={session.data?.user?.name} secondary={session.data?.user?.email} />
                    <IconButton onClick={() => signOut()} >
                        <Logout />
                    </IconButton>
                </ListItem>
            </Stack>
        </Drawer>
    );
}

export default UserDrawer;
