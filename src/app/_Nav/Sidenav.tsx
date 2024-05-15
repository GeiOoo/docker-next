'use client';

import { Home } from '@mui/icons-material';
import { Collapse, Divider } from '@mui/material';
import { useContext } from 'react';
import Navigation, { LinkData } from '../../shared/components/Navigation/Navigation';
import { NavContext } from './NavContextProvider';

function Sidenav() {
    const { isOpen } = useContext(NavContext);

    const linkList: LinkData[] = [{
        title: 'Home',
        url: '/',
        icon: <Home />
    }, {
        title: 'Home2',
        url: '/2',
        icon: <Home />
    }, {
        title: 'Home3',
        url: '/3',
        icon: <Home />
    }, {
        title: 'Home4',
        url: '/4',
        icon: <Home />
    }, {
        title: 'Home5',
        url: '/5',
        icon: <Home />
    },];

    return (<>
        <Collapse in={isOpen} collapsedSize={55} orientation='horizontal'>
            <Navigation linkList={linkList} />
        </Collapse>
        <Divider orientation='vertical' />
    </>
    );
}

export default Sidenav;
