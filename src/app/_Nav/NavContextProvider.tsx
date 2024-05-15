'use client';

import React, { createContext, useState } from 'react';

const defaultValue = {
    isOpen: false,
    toggleMenu: () => { },
    openTabList: [],
    openTab: (tabId: string) => { }
};

export const NavContext = createContext(defaultValue);

function NavContextProvider(props: {
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(defaultValue.isOpen);
    const [openTabList, setOpenTabList] = useState(defaultValue.openTabList);

    return (
        <NavContext.Provider value={{ isOpen, openTabList, openTab, toggleMenu: () => setIsOpen(prev => !prev) }}>
            {props.children}
        </NavContext.Provider>
    );

    function openTab(tabId: string) {
        console.log(tabId);
    }
}

export default NavContextProvider;
