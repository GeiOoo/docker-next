import { Button, ButtonProps } from '@mui/material';
import Link, { LinkProps } from 'next/link';

export function LinkButton({ href, children, ...buttonProps }: ButtonProps & LinkProps) {
    return (
        <Link href={href}>
            <Button {...buttonProps}>{children}</Button>
        </Link>
    );
}
