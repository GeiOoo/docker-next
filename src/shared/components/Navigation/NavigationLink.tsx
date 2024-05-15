import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";
import { BaseLinkData } from "./NavigationNode";

export type LinkNodeData = BaseLinkData & {
    url: string;
};

export default function NavigationLink(props: LinkNodeData) {
    return (
        <>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} href={(props.parentUrl ?? '') + props.url}>
                <ListItemButton>
                    <ListItemIcon>{props.icon}</ListItemIcon>
                    <ListItemText>{props.title}</ListItemText>
                </ListItemButton>
            </Link>
            {props.secondaryAction}
        </>
    );
}
