import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from '../shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <ToastContainer
            position="top-right"
            autoClose={2000} />
         
        </div>
    );
};

export default RootLayout;