'use client';

import { ThemeProvider } from '@emotion/react';
import { Box, CssBaseline, createTheme } from '@mui/material';
import { SessionProvider } from 'next-auth/react';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export function BaseThemeComponent({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <SessionProvider>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Box height={'100vh'}>
                    {children}
                </Box>
            </ThemeProvider>
        </SessionProvider>
    );
}
