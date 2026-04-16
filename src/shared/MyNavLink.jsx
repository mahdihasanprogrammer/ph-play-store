import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({children, to}) => {
    
    return (
        <div>
            <NavLink to={to}
            className={({isActive}) => `font-semibold pb-1 ${isActive && 'text-purple-500 border-b-2 border-purple-500 '}`}
            >{children}</NavLink>
        </div>
    );
};

export default MyNavLink;