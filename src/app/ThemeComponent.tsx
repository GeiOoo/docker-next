'use client';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export function ThemeComponent({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
