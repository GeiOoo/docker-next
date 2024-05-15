import { List } from "@mui/material";
import { LinkGroupData } from "./NavigationGroup";
import { LinkNodeData } from "./NavigationLink";
import NavigationNode from "./NavigationNode";

export type LinkData = LinkNodeData | LinkGroupData;

export default function Navigation(props: {
    linkList: LinkData[];
}) {
    return (
        <List sx={{ minWidth: 150 }}>
            {props.linkList.map((child, index) => <NavigationNode key={index} {...child} />)}
        </List>
    );
}
