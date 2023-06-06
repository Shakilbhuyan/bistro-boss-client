import React from 'react';
import { FaShoppingCart, FaWallet, FaCalendar, FaHome , FaListUl, FaHamburger} from 'react-icons/fa';
import {NavLink, Outlet } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart()
    return (

        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center  justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button  lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
                    {/* Sidebar content here */}
                    <li><NavLink to="/dashboard/home"><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment Histroy</NavLink></li>
                    <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>My Cart<div className="badge badge-secondary">{cart?.length || 0}</div></NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar>Reservation</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/menu"><FaListUl></FaListUl>Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaHamburger></FaHamburger>Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;