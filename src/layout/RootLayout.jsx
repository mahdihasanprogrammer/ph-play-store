import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';

const RootLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <h1>footer</h1>
        </div>
    );
};

export default RootLayout;