import React from 'react';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import { Nav } from '../Nav/Nav';


const Header = () => {
    return (
        <div>
            <Nav/>
            <HeaderBanner/>
        </div>
    );
};

export default Header;