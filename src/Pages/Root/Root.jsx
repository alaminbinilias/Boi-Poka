import React from 'react';
import Navber from '../../Components/Header/Navber';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div className='w-full lg:w-300 mx-auto rounded-md'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;