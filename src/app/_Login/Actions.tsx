'use server';

import { signIn } from 'next-auth/react';


export async function handleLogin(form: FormData) {
    const name = form.get('name');

    if (!name) {
        throw new Error('Name is required');
    }

    signIn('credentials', { username: name });
}
