import { Stack } from '@mui/material';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import LoginForm from './LoginForm';

async function page() {
    const session = await getServerSession();

    if (!!session)
        redirect('/');

    return (
        <Stack height={'100%'} justifyContent={'center'} alignItems={'center'}>
            <LoginForm />
        </Stack>
    );
}

export default page;
