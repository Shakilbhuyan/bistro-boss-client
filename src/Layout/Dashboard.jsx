import React from 'react';
import { FaShoppingCart, FaWallet, FaCalendar, FaHome, FaListUl, FaHamburger, FaUtensils, FaBook, FaUser, FaUsers } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();

    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    return (

        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button  lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
                    {/* Sidebar content here */}

                    {
                    isAdmin? <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/additem"><FaUtensils></FaUtensils>Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/manageitems"><FaCalendar></FaCalendar>Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/reservation"><FaBook></FaBook>Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers>All Users</NavLink></li>

                        </> : <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome>User Home</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment Histroy</NavLink></li>
                            <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>My Cart<div className="badge badge-secondary">{cart?.length || 0}</div></NavLink></li>
                            <li><NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar>Reservation</NavLink></li>
                        </>
                    }

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