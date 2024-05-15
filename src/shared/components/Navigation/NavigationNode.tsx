'use client';
import { LinkData } from "./Navigation";
import NavigationGroup from "./NavigationGroup";
import NavigationLink, { LinkNodeData } from "./NavigationLink";

export type BaseLinkData = {
    title: string;
    icon?: React.ReactNode;
    parentUrl?: string;
    secondaryAction?: React.ReactNode;
};

export default function NavigationNode(props: LinkData) {
    return (
        isLink(props) ?
            <NavigationLink {...props} />
            :
            <NavigationGroup {...props} />

    );
}

function isLink(data: LinkData): data is LinkNodeData {
    return !('children' in data);
}
