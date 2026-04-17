import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <ToastContainer
            position="top-right"
            autoClose={2000} />
         
        </div>
    );
};

export default RootLayout;