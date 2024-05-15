'use client';

import React, { createContext, useState } from 'react';

const defaultValue = {
    isOpen: false,
    toggleMenu: () => { }
};

export const NavContext = createContext(defaultValue);

function NavContextProvider(props: {
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(defaultValue.isOpen);

    return (
        <NavContext.Provider value={{ isOpen, toggleMenu: () => setIsOpen(prev => !prev) }}>
            {props.children}
        </NavContext.Provider>
    );
}

export default NavContextProvider;
