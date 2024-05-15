import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';
import { useState } from 'react';
import { LinkData } from './Navigation';
import NavigationNode, { BaseLinkData } from './NavigationNode';

export type LinkGroupData = BaseLinkData & {
    url?: string;
    children: LinkData[];
    unmountOnExit?: true;
};

export default function NavigationGroup(props: LinkGroupData) {
    const [open, setOpen] = useState(true);

    return (
        <>
            <Stack direction={'row'} alignItems={'center'}>
                <ListItemButton onClick={() => setOpen(prev => !prev)}>
                    <ListItemIcon>{open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
                    <ListItemText>{props.title}</ListItemText>
                </ListItemButton>
                {props.secondaryAction}
            </Stack>
            <Collapse in={open} unmountOnExit={props.unmountOnExit}>
                <List disablePadding sx={{ pl: 2 }}>
                    {props.children.map((child, index) => <NavigationNode key={index} parentUrl={(props.parentUrl ?? '') + props.url} {...child} />)}
                </List>
            </Collapse>
        </>
    );
}
