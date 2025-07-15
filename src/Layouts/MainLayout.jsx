import React from 'react';
import Navbar from '../Components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '@/Components/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='bg-gradient-to-b from-blue-100 to-white anima'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;