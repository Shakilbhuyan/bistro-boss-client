import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';
import NavBer from '../pages/shared/NavBer/NavBer';

const MainLayout = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('login') || location.pathname.includes('signup');
    
    return (
        <div>
            {isLogin || <NavBer></NavBer>}
            <Outlet></Outlet>
            {isLogin || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;