'use client';

import { Button, Card, CardContent, Stack, TextField } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

function LoginForm() {
    const [submitDisabled, setSubmitDisabled] = useState(true);

    return (
        <Card>
            <CardContent>
                <form action={handleLogin}>
                    <Stack gap={1} >
                        <TextField onChange={event => setSubmitDisabled(event.target.value === '')} required type="text" placeholder="Name" name='username' />
                        <Button disabled={submitDisabled} type="submit" variant='contained'>Login</Button>
                    </Stack>
                </form>
            </CardContent>
        </Card>
    );

    function handleLogin(form: FormData) {
        const username = form.get('username');

        if (!username) {
            throw new Error('Name is required');
        }

        signIn('credentials', { username });
    }
}

export default LoginForm;
